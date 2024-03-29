/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-25 15:22:54                                                  *
 * @LastModifiedDate: 2022-09-25 15:31:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们称一个数 X 为好数, 如果它的每位数字逐个地被旋转 180 度后，
// 我们仍可以得到一个有效的，且和 X 不同的数。要求每位数字都要被旋转。

// 如果一个数的每位数字被旋转以后仍然还是一个数字， 则这个数是有效的。
// 0, 1, 和 8 被旋转后仍然是它们自己；2 和 5 可以互相旋转成对方
// （在这种情况下，它们以不同的方向旋转，换句话说，2 和 5 互为镜像）；
// 6 和 9 同理，除了这些以外其他的数字旋转以后都不再是有效的数字。

// 现在我们有一个正整数 N, 计算从 1 到 N 中有多少个数 X 是好数？

const set = new Set(["0", "1", "8"]);
const set2 = new Set(["9", "5", "6", "2"]);

/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    const str = i.toString();
    let isValid = false;
    for (let item of str) {
      if (set.has(item)) {
        continue;
      }
      if (set2.has(item)) {
        isValid = true;
        continue;
      }
      isValid = false;
      break;
    }
    if (isValid) {
      ans++;
    }
  }
  return ans;
};
