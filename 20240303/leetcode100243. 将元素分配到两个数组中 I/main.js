/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-03 10:48:29                                                  *
 * @LastModifiedDate: 2024-03-03 10:52:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 1 开始、包含 不同 整数的数组 nums ，数组长度为 n 。

// 你需要通过 n 次操作，将 nums 中的所有元素分配到两个数组 arr1 和 arr2 中。在第一次操作中，将 nums[1] 追加到 arr1 。在第二次操作中，将 nums[2] 追加到 arr2 。之后，在第 i 次操作中：

// 如果 arr1 的最后一个元素 大于 arr2 的最后一个元素，就将 nums[i] 追加到 arr1 。否则，将 nums[i] 追加到 arr2 。
// 通过连接数组 arr1 和 arr2 形成数组 result 。例如，如果 arr1 == [1,2,3] 且 arr2 == [4,5,6] ，那么 result = [1,2,3,4,5,6] 。

// 返回数组 result 。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  const arr1 = [nums[0]];
  const arr2 = [nums[1]];
  const n = nums.length;
  for (let i = 2; i < n; i++) {
    if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
      arr1.push(nums[i]);
    } else arr2.push(nums[i]);
  }
  return arr1.concat(arr2);
};
