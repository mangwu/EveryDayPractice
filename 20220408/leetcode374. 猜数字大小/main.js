/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-08 11:19:40                                                  *
 * @LastModifiedDate: 2022-04-08 14:15:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 猜数字游戏的规则如下：

// 每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。
// 如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。
// 你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，
// 返回值一共有 3 种可能的情况（-1，1 或 0）：

// -1：我选出的数字比你猜的数字小 pick < num
// 1：我选出的数字比你猜的数字大 pick > num
// 0：我选出的数字和你猜的数字一样。恭喜！你猜对了！pick == num
// 返回我选出的数字。

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  // 二分查找的变体
  // [left, right];
  let left = 1;
  let right = n;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let res = guess(mid);
    if (res == 0) {
      // 猜对了
      return mid;
    } else if (res == -1) {
      // mid比结果大 选择左区间 [left, mid-1];
      right = mid - 1;
    } else {
      // mid比结果小 选择右区间[mid+1,right];
      left = mid + 1;
    }
  }
};

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  // n过大会超时
  let ans = 1;
  while (guess(ans) !== 0) {
    ans++;
  }
  return ans;
};
