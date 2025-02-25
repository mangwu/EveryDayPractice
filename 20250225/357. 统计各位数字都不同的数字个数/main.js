/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  // 排列组合
  if (n === 0) return 1;
  if (n === 1) return 10;
  let res = 10; // 上一轮的存储结果 // 初始i为1
  let cur = 9; // 第一位能选择的个数(1 - 9)
  // 每选一位，需要乘以9 - i
  for (let i = 0; i < n - 1; i++) {
    // 选择第i+2位，
    cur *= 9 - i; // 9 - i是前面选择不同数字后，当前位剩下可选的不同数字的个数
    res += cur; // 加上i+2位的数字就是小于10 ^ (i+2)的数字个数
  }
  return res;
};
