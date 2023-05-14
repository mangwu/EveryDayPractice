/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-13 22:30:12                                                  *
 * @LastModifiedDate: 2023-05-13 22:31:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 details 。details 中每个元素都是一位乘客的信息，信息用长度为 15 的字符串表示，表示方式如下：

// 前十个字符是乘客的手机号码。
// 接下来的一个字符是乘客的性别。
// 接下来两个字符是乘客的年龄。
// 最后两个字符是乘客的座位号。
// 请你返回乘客中年龄 严格大于 60 岁 的人数。

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let res = 0;
  for (const detail of details) {
    const age = parseInt(detail.substring(11, 13));
    if (age > 60) res++;
  }
  return res;
};
