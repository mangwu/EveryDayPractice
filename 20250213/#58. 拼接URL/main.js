// 题目
// 给定一个url前缀和url后缀,通过,分割 需要将其连接为一个完整的url 1、如果前缀结尾和后缀开头都没有/，需要自动补上/连接符 2、如果前缀结尾和后缀开头都为/，需要自动去重 约束：不用考虑前后缀URL不合法情况

// 输入描述 url前缀(一个长度小于100的字符串)，url后缀(一个长度小于100的字符串)

// 输出描述 拼接后的url

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  let [pre, suf] = inputs[0].split(",");
  if (pre[pre.length - 1] === "/") pre = pre.substring(0, pre.length - 1);
  if (suf[0] === "/") suf = suf.substring(1);
  console.log([pre, suf].join("/"));
}
solution()