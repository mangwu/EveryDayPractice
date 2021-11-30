/**
 * @description leetcode 400题
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-30 20:13:38
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 给你一个整数 n ，
// 请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n 位上的数字。
/**
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
  // 个位数 9 * 1 = 9
  // 十位数 90 * 2 = 180
  // 百位数 900 * 3 = 2700
  // n 是200 那么n > 9 + 180 必定是在百位数中取 n - 9 - 180 = 11
  // 从百位数开始数11个数
  // 11 / 3 = 3 ...2 也就是三个数后，第四个数的 第二位 
  // 百位数从0开始： 100 101 102     103的第二位
  // cur 是 位数
  // base是每位数要计算的基数，如百位数： 9*10^(cur-1) * cur
  let cur = 1; 
  let base = 9; 
  while (n > cur * base) {
    // 减去cur位数 ，最终循环结果为cur位数的第n位
    n -= cur * base;
    cur ++;
    base *= 10;
    // cur * base 要超过最大值时退出计算
    if (Number.MAX_SAFE_INTEGER / base < cur) {
      break;
    }
  };
  const num = Math.floor(n / cur) + 1; // 第cur的第num个数
  const idx = n % cur; // 第num个数的  第idx位
  const result = Math.floor(num / Math.pow(10,cur - 1 - idx)) % 10;
  return result;
};