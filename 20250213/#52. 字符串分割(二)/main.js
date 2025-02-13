// 给定一个非空字符串S，其被N个‘-’分隔成N+1的子串，给定正整数K，要求除第一个子串外，其余的子串每K个字符组成新的子串，并用‘-’分隔。 对于新组成的每一个子串，如果它含有的小写字母比大写字母多，则将这个子串的所有大写字母转换为小写字母； 反之，如果它含有的大写字母比小写字母多，则将这个子串的所有小写字母转换为大写字母；大小写字母的数量相等时，不做转换。

// 输入描述 输入为两行，第一行为参数K，第二行为字符串S。

// 输出描述 输出转换后的字符串。
const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const k = parseInt(inputs[0]);
  const strArr = inputs[1].split("-");
  const res = [strArr[0]];
  const restStr = strArr.slice(1).join("");
  const n = restStr.length;
  const m = Math.ceil(n / k);
  const isUpper = (ch) => {
    const code = ch.charCodeAt();
    return code >= "A".charCodeAt() && code <= "Z".charCodeAt();
  };
  const isSmall = (ch) => {
    const code = ch.charCodeAt();
    return code >= "a".charCodeAt() && code <= "z".charCodeAt();
  };
  for (let i = 0; i < m; i++) {
    const curStr = restStr.substring(i * k, i * k + k);
    let bigNum = 0;
    let samllNum = 0;
    for (const ch of curStr) {
      if (isSmall(ch)) samllNum++;
      else if (isUpper(ch)) bigNum++;
    }
    if (bigNum > samllNum) res.push(curStr.toUpperCase());
    else if (samllNum > bigNum) res.push(curStr.toLowerCase());
    else res.push(curStr);
  }
  console.log(res.join("-"));
}

solution();
