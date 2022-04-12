/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-12 17:16:20                                                  *
 * @LastModifiedDate: 2022-04-12 17:33:40                                      *
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
  // 找到
  let idx = 0;
  while()
};

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
