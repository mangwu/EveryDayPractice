// 来自异国的客人
// 题目
// 有位客人来自异国，在该国使用 m 进制计数。 该客人有个幸运数字n（n < m），每次购物时，其总是喜欢计算本次支付的花费（折算为异国的价格后）中存在多少幸运数字。 问：当其购买一个在我国价值 k 的产品时，其中包含多少幸运数字?

// 输入描述 第一行输入为 k，n，m。 其中： k 表示该客人购买的物品价值（以十进制计算的价格） n 表示该客人的幸运数字 m 表示该客人所在国度采用的进制

// 输出描述 输出幸运数字的个数，行末无空格

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  let [k, n, m] = inputs[0].split(" ").map((v) => parseInt(v));
  const target = [];
  while (k) {
    target.push(k % m);
    k = Math.floor(k / m);
  }
  let res = 0;
  for (const num of target) {
    if (num == n) res++;
  }
  console.log(res);
}

solution();
