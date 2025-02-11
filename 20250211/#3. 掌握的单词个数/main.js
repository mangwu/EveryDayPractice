// 掌握的单词个数
// 有一个字符串数组 words 和一个字符串 chars。

// 假如可以用 chars 中的字母拼写出 words 中的某个“单词”（字符串），那么我们就认为你掌握了这个单词。

// words 的字符仅由 a-z 英文小写字母组成，例如 "abc"

// chars 由 a-z 英文小写字母和 "?" 组成。其中英文 "?" 表示万能字符，能够在拼写时当作任意一个英文字母。例如："?" 可以当作 "a" 等字母。

// 注意：每次拼写时，chars 中的每个字母和万能字符都只能使用一次。

// 输出词汇表 words 中你掌握的所有单词的个数。没有掌握任何单词，则输出0。

// 输入描述 第一行：输入数组 words 的个数，记作N。 第二行 ~ 第N+1行：依次输入数组words的每个字符串元素 第N+2行：输入字符串chars

// 3
// blue
// hair
// id
// bd?lue
// 输出描述 输出一个整数，表示词汇表 words 中你掌握的单词个数

// 2
// 备注 1 ≤ words.length ≤ 100 1 ≤ words[i].length, chars.length ≤ 100 所有字符串中都仅包含小写英文字母、英文问号

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const strs = [];
  for (let i = 1; i <= n; i++) {
    strs.push(inputs[i]);
  }
  const chars = inputs[n + 1];
  const check = (origin, target) => {
    // 用origin字符拼写target
    const aplha = new Array(26).fill(0);
    let custom = 0;
    for (const ch of origin) {
      if (ch === "?") {
        custom++;
        continue;
      }
      aplha[ch.charCodeAt() - "a".charCodeAt()]++;
    }
    for (const ch of target) {
      const code = ch.charCodeAt() - "a".charCodeAt();
      if (aplha[code] > 0) aplha[code]--;
      else if (custom > 0) custom--;
      else return false;
    }
    return true;
  };
  let res = 0;
  for (const str of strs) {
    res += Number(check(chars, str));
  }
  console.log(res);
}
solution();
