/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-17 08:52:34                                                  *
 * @LastModifiedDate: 2022-06-17 09:27:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

// 注意：请不要在超过该数组长度的位置写入元素。

// 要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      i++;
      arr.pop();
    }
  }
};

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  // 双指针 找到实际上因为0的增多，而在最后一位的元素索引
  // 从这个索引开始倒序遍历，将倒序时的0增多，就能模拟放置
  const n = arr.length;
  let i = -1;
  let top = 0;
  while (top < n) {
    i++;
    if (arr[i] != 0) {
      top++;
    } else {
      top += 2;
    }
  }
  let j = n - 1;
  // 最后一个元素恰好是0的情况
  if (top == n + 1) {
    arr[j] = 0;
    j--;
    i--;
  }
  while (j >= 0) {
    arr[j] = arr[i];
    j--;
    if (arr[i] == 0) {
      arr[j] = arr[i];
      j--;
    }
    i--;
  }
};

// 1 1 0

// TOP = 4 I = 3
// 2
