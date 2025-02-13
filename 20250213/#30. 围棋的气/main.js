// 题目
// 题目描述
// 围棋棋盘由纵横各19条线垂直相交组成，棋盘上一共19 x 19 = 361 个交点，对弈双方一方执白棋，一方执黑棋，落子时只能将棋子置于交点上。

// “气”是围棋中很重要的一个概念，某个棋子有几口气，是指其上下左右方向四个相邻的交叉点中，有几个交叉点没有棋子，由此可知：

// 1、在棋盘的边缘上的棋子最多有 3 口气（黑1），在棋盘角点的棋子最多有2口气（黑2），其他情况最多有4口气（白1）

// 2、所有同色棋子的气之和叫做该色棋子的气，需要注意的是，同色棋子重合的气点，对于该颜色棋子来说，只能计算一次气，比如下图中，黑棋一共4口气，而不是5口气，因为黑1和黑2中间红色三角标出来的气是两个黑棋共有的，对于黑棋整体来说只能算一个气。

// 3、本题目只计算气，对于眼也按气计算，如果您不清楚“眼”的概念，可忽略，按照前面描述的规则计算即可。

// 现在，请根据输入的黑棋和白棋得到坐标位置，计算黑棋和白棋一共各有多少气？

// 输入描述

// 输入包含两行数据，如：

// 0 5 8 9 9 10
// 5 0 9 9 9 8
// 1、每行数据以空格分隔，数据个数是2的整数倍，每两个数是一组，代表棋子在棋盘上的坐标；

// 2、坐标的原点在棋盘左上角点，第一个值是行号，范围从0到18；第二个值是列号，范围从0到18。

// 3、举例说明：第一行数据表示三个坐标（0, 5）、(8, 9)、(9, 10)

// 4、第一行表示黑棋的坐标，第二行表示白棋的坐标。

// 5、题目保证输入两行数据，无空行且每行按前文要求是偶数个，每个坐标不会超出棋盘范围。

// 输出描述

// 8 7
// 两个数字以空格分隔，第一个数代表黑棋的气数，第二个数代表白棋的气数。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const grid = new Array(19).fill(0).map((v) => new Array(19).fill(0));
  const bP = inputs[0].split(" ").map((v) => parseInt(v));
  const wP = inputs[1].split(" ").map((v) => parseInt(v));
  let bPs = [];
  let wPs = [];
  for (let i = 0; i < bP.length; i += 2) {
    const x = bP[i];
    const y = bP[i + 1];
    bPs.push([x, y]);
    grid[x][y] = 1; // 黑棋为1
  }
  for (let i = 0; i < wP.length; i += 2) {
    const x = wP[i];
    const y = wP[i + 1];
    wPs.push([x, y]);
    grid[x][y] = 2;
  }
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const bQiSet = new Set();
  const wQiSet = new Set();
  for (const bp of bPs) {
    const [x, y] = bp;
    for (const dir of dirs) {
      const nx = dir[0] + x;
      const ny = dir[1] + y;
      if (nx >= 0 && nx < 19 && ny >= 0 && ny < 19 && grid[nx][ny] === 0) {
        bQiSet.add([nx, ny].join(","));
      }
    }
  }
  for (const bp of wPs) {
    const [x, y] = bp;
    for (const dir of dirs) {
      const nx = dir[0] + x;
      const ny = dir[1] + y;
      if (nx >= 0 && nx < 19 && ny >= 0 && ny < 19 && grid[nx][ny] === 0) {
        wQiSet.add([nx, ny].join(","));
      }
    }
  }
  console.log([bQiSet.size, wQiSet.size].join(" "));
}
solution();
