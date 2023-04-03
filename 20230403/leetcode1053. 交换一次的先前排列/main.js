/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-03 08:39:23                                                  *
 * @LastModifiedDate: 2023-04-03 09:52:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 arr（可能存在重复的元素），请你返回可在 一次交换（交换两数字 arr[i] 和 arr[j] 的位置）后得到的、按字典序排列小于 arr 的最大排列。

// 如果无法这么操作，就请返回原数组。

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
  // arr[i]和arr[j]交换，i < j 则 arr[i] > arr[j]，
  // 如果arr[i]递增，则不存在这样的数组，直接返回原数组
  // 为了得到最大排列，arr[i]要尽量靠后，这样保证前面的大值不被替换成小值
  // 除此之外，arr[j]在相同时要选择靠前的
  // =>大于前一个，则arr[i]不会是同一个，小于前一个数则交换后排列不能保证最大
  // 使用单调栈求解
  const stack = [];
  const n = arr.length;
  let idx = -1;
  let cur = -1;
  for (let i = 0; i < n; i++) {
    let last = -1;
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      last = stack.pop();
    }
    if (stack.length > 0 && stack[stack.length - 1] >= idx) {
      if (last === -1 || arr[i] > arr[last]) {
        idx = stack[stack.length - 1];
        cur = i;
      }
    }
    stack.push(i);
  }
  if (idx === -1) return arr;
  [arr[idx], arr[cur]] = [arr[cur], arr[idx]];
  return arr;
};
// [1,7,6,4,8,2,3]
// 1 7 6 4 3 2 8


