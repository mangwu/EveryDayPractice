// 警察在侦破一个案件时，得到了线人给出的可能犯罪时间，形如 “HH:MM” 表示的时刻。根据警察和线人的约定，为了隐蔽，该时间是修改过的，解密规则为：利用当前出现过的数字，构造下一个距离当前时间最近的时刻，则该时间为可能的犯罪时间。每个出现数字都可以被无限次使用。

// 输入描述

// 形如HH:SS字符串，表示原始输入。

// 输出描述

// 形如HH:SS的字符串，表示推理处理的犯罪时间。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const parseTime = (time) => {
    const [hour, min] = time.split(":").map((v) => parseInt(v));
    return hour * 60 + min;
  };
  const max = 24 * 60;
  const toTime = (minutes) => {
    const min = (minutes % 60).toString().padStart(2, "0");
    const hour = Math.floor(minutes / 60)
      .toString()
      .padStart(2, "0");
    return [hour, min].join(":");
  };
  const timeStr = inputs[0];
  const time = parseTime(timeStr);
  const set = new Set(timeStr.split(""));
  const check = (minutes) => {
    const curTimeStr = toTime(minutes);
    for (const ch of curTimeStr) {
      if (!set.has(ch)) return false;
    }
    return true;
  };
  let res = timeStr;
  for (let i = time + 1; i < time + max; i++) {
    const curTime = i % max;
    if (check(curTime)) {
      res = toTime(curTime);
      break;
    }
  }
  console.log(res);
}
solution();
