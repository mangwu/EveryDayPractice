// 小扇和小船今天又玩起来了数字游戏，小船给小扇一个正整数 n（1 ≤ n ≤ 1e9），小扇需要找到一个比 n 大的数字 m，使得 m 和 n 对应的二进制中 1 的个数要相同，如： 4对应二进制100 8对应二进制1000 其中1的个数都为1个 现在求 m 的最小值。

// 输入描述

// 输入一个正整数 n（1 ≤ n ≤ 1e9）

// 输出描述

// 输出一个正整数 m

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const num = parseInt(inputs[0]);
  console.log(num << 1);
}
solution();
