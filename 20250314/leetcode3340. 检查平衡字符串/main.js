// 给你一个仅由数字 0 - 9 组成的字符串 num。如果偶数下标处的数字之和等于奇数下标处的数字之和，则认为该数字字符串是一个 平衡字符串。

// 如果 num 是一个 平衡字符串，则返回 true；否则，返回 false。

/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let odd = 0;
  let even = 0;
  const n = num.length;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 1) {
      odd += parseInt(num[i]);
    } else even += parseInt(num[i]);
  }
  return odd === even;  
};
