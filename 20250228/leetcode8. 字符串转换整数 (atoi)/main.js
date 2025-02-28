// 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数。

// 函数 myAtoi(string s) 的算法如下：

// 空格：读入字符串并丢弃无用的前导空格（" "）
// 符号：检查下一个字符（假设还未到字符末尾）为 '-' 还是 '+'。如果两者都不存在，则假定结果为正。
// 转换：通过跳过前置零来读取该整数，直到遇到非数字字符或到达字符串的结尾。如果没有读取数字，则结果为0。
// 舍入：如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被舍入为 −231 ，大于 231 − 1 的整数应该被舍入为 231 − 1 。
// 返回整数作为最终结果。

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  const num = parseInt(s);
  if (isNaN(num)) return 0;
  if (num > max) return max;
  if (num < min) return min;
  return num;
};

const zeroNumber = "0".charCodeAt();
const nineNumber = "9".charCodeAt();
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  // 不使用内置函数
  s = s.trim();
  const n = s.length;
  let start = 0;
  let isNeg = s[0] === "-";
  const isNumber = (ch) => {
    return !isNaN(parseInt(ch));
  };
  if (s[start] === "-" || s[start] === "+") start++;
  let cur = 0;
  for (let i = start; i < n; i++) {
    if (isNumber(s[i])) {
      cur = cur * 10 + Number(s[i]);
    } else break;
    if (cur > max) break;
  }
  if (isNeg) cur = -cur;
  if (cur > max) return max;
  if (cur < min) return min;
  return cur;
};
