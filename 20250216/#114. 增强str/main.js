// 请你实现一个增强版的strstr函数，他的功能是使用带有可选段的字符串进行模糊查询。与strstr函数相同，该函数在源字符串中查找第一次出现目标字符串的位置，并返回相对于源字符串地址的偏移量。

// 可选段使用"[]"标识，表示该位置可以匹配可选段中的任意一个字符。例如，"a[bc]"表示可以匹配"ab"或"ac"。

// 输入描述：

// 输入参数与strstr函数相同，分别为源字符串和目标字符串的指针。

// 输出描述：

// 与strstr的不同之处在于，返回的源字符串中匹配子字符串相对于源字符串地址的偏移量（这个偏移量从0开始计算）。如果没有匹配，则返回-1。

// 补充说明：

// 源字符串中不包含"[]"，目标字符串中的"[]"会成对出现且不会嵌套。

// 输入的字符串长度在[1, 100]之间。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const str = inputs[0];
  const searchStr = inputs[1];
  const dfs = (str) => {
    const i = str.indexOf("[");
    if (i === -1) return [str];
    const j = str.indexOf("]", i + 1);
    const pre = str.substring(0, i);
    const rest = dfs(str.substring(j + 1));
    const res = [];
    for (let k = i + 1; k < j; k++) {
      for (const item of rest) {
        res.push(pre + str[k] + item);
      }
    }
    return res;
  };
  const strs = dfs(searchStr);
  let res = -1;
  for (const s of strs) {
    if (str.indexOf(s) !== -1) {
      res = str.indexOf(s);
      break;
    }
  }
  console.log(res);
}
solution();

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const str = inputs[0];
  const searchStr = inputs[1];
  // 其他解法
  const n = str.length;
  const searchArr = [];
  for (let i = 0; i < searchStr.length; i++) {
    if (searchStr[i] === "[") {
      const nextJ = searchStr.indexOf("]", i + 1);
      const set = new Set();
      for (let j = i + 1; j < nextJ; j++) {
        set.add(searchStr[j]);
      }
      searchArr.push(set);
      i = nextJ;
    } else searchArr.push(searchStr[i]);
  }
  const m = searchArr.length;
  let res = -1;
  for (let i = 0; i <= n - m; i++) {
    let right = 0;
    let flag = true;
    for (let j = i; j < m + i; j++) {
      const ch = str[j];
      const sCh = searchArr[right++];
      if (typeof sCh === "string") {
        if (sCh === ch) continue;
        flag = false;
        break;
      } else if (sCh.has(ch)) {
        continue;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      res = i;
      break;
    }
  }
  console.log(res);
}
solution();
