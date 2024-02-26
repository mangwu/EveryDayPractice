// 给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。

// 表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // 此题和基本计算器 II相同
  // 去除空格
  const strArr = s.split("").filter((v) => v !== " ");
  const stack = [];
  let preSign = "+";
  const n = strArr.length;
  for (let i = 0; i < n; i++) {
    if (isNaN(parseInt(strArr[i]))) {
      preSign = strArr[i];
    } else {
      let cur = parseInt(strArr[i]);
      while (i + 1 < n && !isNaN(parseInt(strArr[i + 1]))) {
        cur = cur * 10 + parseInt(strArr[++i]);
      }
      if (preSign === "+") {
        stack.push(cur);
      } else if (preSign === "-") {
        stack.push(-cur);
      } else if (preSign === "*") {
        stack.push(stack.pop() * cur);
      } else if (preSign === "/") {
        const preNum = stack.pop();
        stack.push(
          cur * preNum >= 0 ? Math.floor(preNum / cur) : Math.ceil(preNum / cur)
        );
      }
    }
  }
  return stack.reduce((pre, cur) => pre + cur, 0);
};
// "3+2*2/3-8+9*2/4-8+5 /4-2+6/4-3+1-7/4"
// [3, 1, -8, 4, -8, 1, -2, 1, -3, 1, -2];
