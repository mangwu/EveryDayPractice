// 智能手机方便了我们生活的同时，也侵占了我们不少的时间。 “手机App防沉迷系统”能够让我们每天合理地规划手机App使用时间，在正确的时间做正确的事。 请计算会议室占用时间段。 请编程实现，根据输入数据注册App，并根据输入的时间点，返回时间点使用的App名称，如果该时间点没有注册任何App，请返回字符串“NA”。

// 输入描述 输入分3部分： 第一行表示注册的App数量 N（N ≤ 100） 第二部分包括 N 行，每行表示一条App注册数据 最后一行输入一个时间点，程序即返回该时间点使用的App

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();

const asyncFun = async () => (await iter.next()).value;

// 高优先级的App和低优先级的有冲突，则自动注销低优先级的时段

async function solution() {
  const inputs = [];
  while ((line = await asyncFun())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const targetTime = inputs[inputs.length - 1];
  const parseTime = (time) => {
    // 解析成分钟
    const [h, m] = time.split(":").map((v) => parseInt(v));
    return h * 60 + m;
  };
  const prMap = new Map(); // 优先级记录,key: appName, value: pr，只有更高的优先级才进行注册
  const timeMap = new Map(); // 每个时间点使用的appName
  for (let i = 1; i <= n; i++) {
    let [appName, p, startTime, endTime] = inputs[i].split(" ");
    p = parseInt(p);
    startTime = parseTime(startTime);
    endTime = parseTime(endTime);
    // 判断目标时间时候在时间区间内
    if (!prMap.has(appName)) {
      prMap.set(appName, p);
    } else {
      const curPr = prMap.get(appName);
      if (p < curPr) continue; //  不用注册
      prMap.set(appName, curPr);
    }
    for (let j = startTime; j < endTime; j++) {
      if (timeMap.has(j)) {
        // 判断优先级
        const newAppName = timeMap.get(j);
        const newPr = prMap.get(newAppName);
        if (p > newPr) {
          timeMap.set(j, appName);
        }
      } else {
        timeMap.set(j, appName);
      }
    }
  }
  console.log(timeMap.get(parseTime(targetTime)) || "NA");
}
solution();

async function solution() {
  const inputs = [];
  while ((line = await asyncFun())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const parseTime = (time) => {
    // 解析成分钟
    const [h, m] = time.split(":").map((v) => parseInt(v));
    return h * 60 + m;
  };
  const targetTime = parseTime(inputs[inputs.length - 1]);

  // 需要将有交叉且优先级低时间段给注销掉
  const prMap = new Map(); // 优先级记录,key: appName, value: pr，只有更高的优先级才进行注册
  const timeMap = new Map(); // 每个时间点使用的appName
  const apps = [];
  for (let i = 1; i <= n; i++) {
    let [appName, p, startTime, endTime] = inputs[i].split(" ");
    p = parseInt(p);
    startTime = parseTime(startTime);
    endTime = parseTime(endTime);
    apps.push([appName, p, startTime, endTime]);
  }
  for (let i = 0; i < n; i++) {
    let [appName, p, startTime, endTime] = apps[i];

    if (!prMap.has(appName)) {
      prMap.set(appName, p);
    } else {
      const curPr = prMap.get(appName);
      if (p < curPr) continue; // 不需要注册
      prMap.set(appName, curPr);
    }
    // 遍历之前的，将低优先级的且有交叉的给注销掉
    for (let j = 0; j < i; j++) {
      const [appName2, p2, startTime2, endTime2] = apps[j];
      if (p2 < p) {
        // 判断是否有交叉
        if (startTime2 >= endTime || endTime2 <= startTime) continue;
        // 有交叉
        for (let j = startTime2; j < endTime2; j++) {
          if (timeMap.get(j) === appName2) timeMap.delete(j);
        }
      }
    }
    for (let j = startTime; j < endTime; j++) {
      if (timeMap.has(j)) {
        // 判断优先级
        const newAppName = timeMap.get(j);
        const newPr = prMap.get(newAppName);
        if (p > newPr) {
          timeMap.set(j, appName);
        }
      } else {
        timeMap.set(j, appName);
      }
    }
  }
  console.log(timeMap.get(targetTime) || "NA");
}
solution();
