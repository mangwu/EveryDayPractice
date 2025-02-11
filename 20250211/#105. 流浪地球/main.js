// 题目描述
// 流浪地球计划在赤道上均匀部署了 N 个转向发动机，按位置顺序编号为 0 ~ N

// 初始状态下所有的发动机都是未启动状态

// 发动机启动的方式分为“手动启动”和“关联启动”两种方式 如果在时刻 1 一个发动机被启动，下一个时刻 2 与之相邻的两个发动机就会被“关联启动”

// 如果准备启动某个发动机时，它已经被启动了，则什么都不用做。发动机 0 与发动机 N-1 是相邻的。地球联合政府准备挑选某些发动机在某些时刻进行“手动启动”。当然最终所有的发动机都会被启动。哪些发动机最晚被启动呢？

// 输入描述

// 第一行两个数字 N 和 E，中间有空格

// N 代表部署发动机的总个数，1 < N ≤ 1000 E 代表计划手动启动的发动机总个数，1 ≤ E ≤ 1000，E ≤ N 接下来共 E 行，每行都是两个数字 T 和 P，中间有空格

// T 代表发动机的手动启动时刻，0 ≤ T ≤ N P 代表次发动机的位置编号，0 ≤ P < N

// 输出描述

// 第一行一个数字 N， 以回车结束

// N 代表最后被启动的发动机个数 第二行 N 个数字，中间有空格，以回车结束

// 每个数字代表发动机的位置编号，从小到大排序

// 输入

// 8 2 0 2 0 6

// 输出

// 2 0 4

// 说明 8个发动机；

// 时刻0启动（2,6）;

// 时刻1启动（1,3,5,7）（其中1,3被2关联启动，5,7被6关联启动）；

// 时刻2启动（0,4）（其中0被1,7关联启动，4被3,5关联启动）；

// 至此所有发动机都被启动，最后被启动的有2个，分别是0和4。

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const asyncFunc = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFunc())) {
    inputs.push(line);
  }
  // bfs
  const arr = inputs[0].split(" ").map((v) => parseInt(v));
  const n = arr[0]; // 总发动机
  const m = arr[1]; // 手动启动发动机的个数
  const time = new Map(); // 记录发动机启动时刻，key: 发动机，time：时刻
  const map = new Map(); // key:时刻，value:发动机
  let curTime = Infinity; // 当前时刻
  let queue = [];
  for (let i = 1; i < inputs.length; i++) {
    const curArr = inputs[i].split(" ").map((v) => parseInt(v));
    const time = curArr[0];
    const number = curArr[1];
    if (time < curTime) {
      curTime = time;
      queue = [number];
    } else if (time === curTime) {
      queue.push(number);
    }
    map.has(time) ? map.get(time).push(number) : map.set(time, [number]);
  }
  for (const q of queue) {
    time.set(q, curTime);
  }
  let res = [];
  while (queue.length) {
    // 获取当前时间手动启动的发动机
    const add = map.get(curTime) || [];
    for (const item of add) {
      if (!time.has(item)) {
        queue.push(item);
        time.set(item, curTime);
      }
    }
    curTime++;
    const nxt = [];
    for (const q of queue) {
      let left = (q - 1 + n) % n;
      let right = (q + 1 + n) % n;
      if (!time.has(left)) {
        nxt.push(left);
        time.set(left, curTime);
      }
      if (!time.has(right)) {
        nxt.push(right);
        time.set(right, curTime);
      }
    }
    if (nxt.length) {
      res = nxt;
    } else break;
    queue = nxt;
  }
  res.sort((a, b) => a - b); // 从小到大排序
  console.log(curTime - 1);
  console.log(res.join(" "));
}
solution();
