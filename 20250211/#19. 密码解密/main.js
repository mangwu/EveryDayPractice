// 给定一段“密文”字符串 s，其中字符都是经过“密码本”映射的，现需要将“密文”解密并输出。

// 映射的规则（'a' ~ 'i'）分别用（'1' ~ '9'）表示；（'j' ~ 'z'）分别用（"10*" ~ "26*"）表示。

// 约束：映射始终唯一。

// 输入描述 “密文”字符串：9131113*

// 输出描述 明文字符串：imkm

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const asyncFun = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFun())) {
    inputs.push(line);
  }
  const str = inputs[0];
  // 两位后面都带有*,其他都是一位的
  const res = [];
  const n = str.length;
  const aCode = "a".charCodeAt() - 1;
  for (let i = 0; i < n; i++) {
    if (str[i + 2] === "*") {
      const num = parseInt(str[i] + str[i + 1]);
      i += 2;
      res.push(String.fromCharCode(aCode + num));
    } else {
      const num = parseInt(str[i]);
      res.push(String.fromCharCode(aCode + num));
    }
  }
  console.log(res.join(""))
}
solution();
