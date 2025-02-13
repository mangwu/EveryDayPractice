// 部门准备举办一场王者荣耀表演赛，有 10 名游戏爱好者参与，分为两队，每队 5 人。 每位参与者都有一个评分，代表着他的游戏水平。为了表演赛尽可能精彩，我们需要把 10 名参赛者分为示例尽量相近的两队。 一队的实力可以表示为这一队 5 名队员的评分总和。 现在给你 10 名参与者的游戏水平评分，请你根据上述要求分队，最后输出这两组的实力差绝对值。

// 例：10 名参赛者的评分分别为：5 1 8 3 4 6 7 10 9 2，分组为（1 3 5 8 10）和（2 4 6 7 9），两组实力差最小，差值为1。有多种分法，但是实力差的绝对值最小为1。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(" ").map((v) => parseInt(v));
  // 暴力解法
  let sum = arr.reduce((a, b) => a + b);
  // 选5个人
  let res = Infinity;
  for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 7; j++) {
      for (let k = j + 1; j < 8; j++) {
        for (let l = k + 1; l < 9; l++) {
          for (let m = l + 1; m < 10; m++) {
            let curSum = arr[i] + arr[j] + arr[k] + arr[l] + arr[m];
            res = Math.min(res, Math.abs(sum - curSum - curSum));
          }
        }
      }
    }
  }
  console.log(res);
}
solution();
