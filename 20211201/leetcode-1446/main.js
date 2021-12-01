/**
 * @description 字符串的能量
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-01 19:34:20
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
 * 请你返回字符串的能量。
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  // 求字符串中的最长连续字符，使用一个值暂存连续字符串的个数，一个值存比较的连续字符
  // 每次比较，如果暂存连续字符串个数大于result，就将暂存的个数赋予reult
  // 如果连续字符，重置暂存的连续字符个数为1，更新基础字符
  // 最长的结果,至少为1
  let result = 1;
  // 暂存连续的字符串，至少为1
  let k = 1;
  // 字符串长度
  const length = s.length;
  // 基础字符，以第一个为基准
  let baseChar = s[0];
  // 从第二个开始遍历
  for (let i = 1; i < length; i++) {
    // 如果相等，暂存的k加1，否则重置为1，基础值也重置
    if (s[i] === baseChar) {
      k++;
      if (k > result) {
        result = k;
      }
    } else {
      k = 1;
      baseChar = s[i];
    }
  }
  return result;
};
// 也可使用双指针：
// i，j指向第一个字符，j按照顺序遍历，
// 当j指向的字符不等于i指向的字符，暂存的连续字符长度为 j - i,
// 然后和ans（初值为1）比较长度，取大值到ans
// 之后设置 i = j ，j继续遍历
console.log(maxPower('s'));
console.log(maxPower('saascascas'));
