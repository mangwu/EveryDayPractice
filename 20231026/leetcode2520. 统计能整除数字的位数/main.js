// 给你一个整数 num ，返回 num 中能整除 num 的数位的数目。

// 如果满足 nums % val == 0 ，则认为整数 val 可以整除 nums 。

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const numStr = num.toString();
  let ans = 0;
  for (const ch of numStr) {
    if (num % parseInt(ch) === 0) ans++;
  }
  return ans;
};
