/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-12 17:16:20                                                  *
 * @LastModifiedDate: 2022-04-12 23:09:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 left 和 right ，
// 表示区间 [left, right] ，返回此区间内所有数字 按位与 的结果（包含 left 、right 端点）。
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  // 显然，当right - left过大时，暴力解法会超时
  // 找到left的第一个
  if (left == right) {
    return left;
  }
  const leftBits = new Array(31).fill(0);
  const rightBits = new Array(31).fill(0);
  for (let i = 0; i < 31; i++) {
    leftBits[30 - i] = (left >> i) & 1;
    rightBits[30 - i] = (right >> i) & 1;
  }
  let left_first_one = -1;
  let right_first_one = -1;
  let flag = true;
  let same_pos = 0;
  for (let i = 0; i < 31; i++) {
    if (leftBits[i] == 1 && left_first_one == -1) {
      left_first_one = i;
      left_flag = true;
    }
    if (rightBits[i] == 1 && right_first_one == -1) {
      right_first_one = i;
      right_flag = true;
    }
    if (left_first_one == right_first_one && left_first_one !== -1) {
      if (leftBits[i] == rightBits[i] && flag) {
        same_pos++;
      } else {
        flag = false;
      }
    }
  }
  console.log(leftBits, left_first_one, same_pos, rightBits, right_first_one);
  if (left_first_one !== right_first_one) {
    return 0;
  } else {
    let ans = 0;
    for (let i = left_first_one; i < left_first_one + same_pos; i++) {
      ans += Math.pow(2, 30 - i) * leftBits[i];
    }
    return ans;
  }
};
rangeBitwiseAnd(87, 89);
//    1
//   10
//   11
//  100
//  101
//  110
//  111
// 1000
// 1001

// left作为做小值，第一个1位位数idx的左边都是0，可以确定结果idx位的左边都是0
// right作为大值，第一个1位位数idx，可以在范围中一定可以找到一个100... 它的右边全是0，可以确定节点从idx2右开始全是0

// 11001
// 11010
// 11011
// 11100

// 重复1的个数
//
