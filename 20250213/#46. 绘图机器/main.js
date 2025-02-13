// 题目
// 绘图机器的绘图笔初始位置在原点(0,0)机器启动后按照以下规则来进行绘制直线。

// 尝试沿着横线坐标正向绘制直线直到给定的终点E

// 期间可以通过指令在纵坐标轴方向进行偏移，offsetY为正数表示正向偏移,为负数表示负向偏移

// 给定的横坐标终点值E 以及若干条绘制指令，

// 请计算绘制的直线和横坐标轴以及x=E的直线组成的图形面积。
const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // N条指令， 终点值E
  const [n, e] = inputs[0].split(" ").map((v) => parseInt(v));
  let x = 0;
  let y = 0;
  let res = 0;
  for (let i = 1; i <= n; i++) {
    const [curX, offsetY] = inputs[i].split(" ").map((v) => parseInt(v));
    if (curX < e) {
      let diffX = curX - x;
      res += Math.abs(y) * diffX;
      y += offsetY;
      x = curX;
    } else {
      let diffX = e - x;
      res += Math.abs(y) * diffX;
      x = curX;
      y += offsetY;
      break;
    }
  }
  if (e > x) res += Math.abs(y) * e - x;
  console.log(res);
}

solution();
