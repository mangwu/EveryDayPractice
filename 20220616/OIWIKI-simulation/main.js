/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-16 15:20:32                                                  *
 * @LastModifiedDate: 2022-06-16 15:25:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 只长度不计的蠕虫位于 $n$ 英寸深的井的底部。
// 它每次向上爬 $u$ 英寸，但是必须休息一次才能再次向上爬。
// 在休息的时候，它滑落了 $d$ 英寸。之后它将重复向上爬和休息的过程。
// 蠕虫爬出井口需要至少爬多少次？如果蠕虫爬完后刚好到达井的顶部，我们也设作蠕虫已经爬出井口。

/**
 * @description 多少次能爬出
 * @param {number} n 深度
 * @param {number} u 每次爬高度
 * @param {number} d 每次掉落高度
 * @returns {number} 爬的次数
 */
var howTimes = function (n, u, d) {
  let ans = 0;
  // 爬的高度
  let height = 0;
  do {
    height += u;
    ans++;
    if (height >= n) {
      break;
    }
    height -= d;
  } while (true);
  return ans;
};
/**
 * @description 多少次能爬出
 * @param {number} n 深度
 * @param {number} u 每次爬高度
 * @param {number} d 每次掉落高度
 * @returns {number} 爬的次数
 */
var howTimes = function (n, u, d) {
  let ans = 0;
  // 爬的高度
  let height = 0;
  while (true) {
    height += u;
    ans++;
    if (height >= n) {
      break;
    }
    height -= d;
  }
  return ans;
};
