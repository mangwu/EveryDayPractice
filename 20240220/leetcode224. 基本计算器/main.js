// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // s中包含数字，+，-，空格和括号()，括号会改变优先级，
  // 其中 - 可以用作表示负数的一元运算符
  // 使用栈的匹配来解决问题
  // 如果遇到左括号，就不能立即解决问题了
  // 为了避免负数符号出现一元运算符的情况，可以在前面添加一个0
  const strArr = s.split("").filter((v) => v !== " "); // 去除空格
  const arr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "-" && (strArr[i - 1] === "(" || i === 0)) {
      arr.push(0);
      arr.push(strArr[i]);
    } else if (isNaN(parseInt(strArr[i]))) {
      arr.push(strArr[i]);
    } else {
      // 连续数字
      let cur = parseInt(strArr[i]);
      while (i + 1 < n && !isNaN(parseInt(strArr[i + 1]))) {
        cur = cur * 10 + parseInt(strArr[++i]);
      }
      arr.push(cur);
    }
  }
  const stack = [];
  for (const ch of arr) {
    
  }
};
