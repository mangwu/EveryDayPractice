// 给定一个表达式，求其分数计算结果。

// 表达式的限制如下：

// 所有的输入数字皆为正整数（包括0）
// 仅支持四则运算（+-*/）和括号
// 结果为整数或分数，分数必须化为最简格式（比如6，3/4，7/8，90/7）
// 除数可能为0，如果遇到这种情况，直接输出"ERROR"
// 输入和最终计算结果中的数字都不会超出整型范围
// 用例输入一定合法，不会出现括号匹配的情况

// 输入描述

// 字符串格式的表达式，仅支持+-*/，数字可能超过两位，可能带有空格，没有负数

// 长度小于200个字符

// 输出描述

// 表达式结果，以最简格式表达

// 如果结果为整数，那么直接输出整数
// 如果结果为负数，那么分子分母不可再约分，可以为假分数，不可表达为带分数
// 结果可能是负数，符号放在前面

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
  const str = inputs[0].replaceAll(" ", ""); // 去除所有空格
  const isNumber = (ch) => {
    return !isNaN(parseInt(ch));
  };
  const compute = (str) => {
    // 找到所有除数
    const n = str.length;
    let prod = 1;
    for (let i = 0; i < n; i++) {
      if (str[i] === "/") {
        if (str[i + 1] === "(") {
          // 出现括号，找到下一个括号
          let leftBrNum = 1;
          let j = i + 2;
          while (j < n) {
            if (str[j] === "(") leftBrNum++;
            else if (str[j] === ")") leftBrNum--;
            if (leftBrNum === 0) break;
            j++;
          }
          const cur = compute(str.substring(i + 2, j));
          if (cur === "ERROR") return cur;
          // 不能为0
          const num = parseInt(cur);
          if (num === 0) return "ERROR";
          // const fracIdx = cur.indexOf("/");
          // 是分数，也是直接乘以num
          // if (fracIdx !== -1) {
          //   const bottom = parseInt(cur.substring(fracIdx + 1));
          //   prod = prod * bottom;
          // } else {
          //   prod = prod * Math.abs(num);
          // }
          prod = prod * Math.abs(num);
          i = j;
        } else {
          // 获取连续数字
          let cur = 0;
          let j = i + 1;
          while (j < n && isNumber(str[j])) cur = cur * 10 + parseInt(str[j++]);
          if (cur === 0) return "ERROR";
          prod = prod * cur;
          i = j - 1;
        }
      }
    }
    // 即使乘以了prod，也有可能会得到4.0000002这样不精确的小数，需要就近取值
    let res = Math.round(eval(`${prod}*(${str})`));
    let isNegtive = false;
    if (res < 0) {
      // 负数
      isNegtive = true;
      res = -res;
    }
    // 分数化简
    if (res % prod === 0) {
      return `${isNegtive ? "-" : ""}${res / prod}`;
    } else {
      // 最小公约数
      const publicFactor = gcd(res, prod);
      res = res / publicFactor;
      prod = prod / publicFactor;
      return `${isNegtive ? "-" : ""}${res}/${prod}`;
    }
  };
  const gcd = (a, b) => {
    if (a < b) return gcd(b, a);
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  console.log(compute(str));
}
solution();
