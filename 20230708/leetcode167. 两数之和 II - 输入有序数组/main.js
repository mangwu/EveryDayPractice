/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-08 21:17:41                                                  *
 * @LastModifiedDate: 2023-07-08 21:35:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

// 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

// 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

// 你所设计的解决方案必须只使用常量级的额外空间。

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 二分查找
  const n = numbers.length;
  for (let i = 0; i < n; i++) {
    let sub = target - numbers[i];
    let left = sub >= numbers[i] ? i + 1 : 0;
    let right = sub >= numbers[i] ? n - 1 : i - 1;
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (numbers[mid] === sub) {
        return [i+1, mid+1];
      } else if (numbers[mid] > sub) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
};
