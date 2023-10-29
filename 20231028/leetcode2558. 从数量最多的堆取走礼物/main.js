/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-28 23:17:26                                                  *
 * @LastModifiedDate: 2023-10-28 23:43:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 gifts ，表示各堆礼物的数量。每一秒，你需要执行以下操作：

// 选择礼物数量最多的那一堆。
// 如果不止一堆都符合礼物数量最多，从中选择任一堆即可。
// 选中的那一堆留下平方根数量的礼物（向下取整），取走其他的礼物。
// 返回在 k 秒后剩下的礼物数量。

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  while (k) {
    k--;
    gifts.sort((a, b) => a - b);
    gifts.push(Math.floor(Math.sqrt(gifts.pop())));
  }
  return gifts.reduce((pre, cur) => pre + cur);
};
