/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-09 22:22:59                                                  *
 * @LastModifiedDate: 2025-02-09 23:02:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 说明：

// 为什么返回数值是整数，但输出的答案是数组呢？

// 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

// 你可以想象内部操作如下:

// // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
// int len = removeDuplicates(nums);

// // 在函数里修改输入数组对于调用者是可见的。
// // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  let pre = 0; // 记录保证最多两个元素时的正确索引
  let popNum = 0; // 记录需要删除的元素个数
  for (let i = 0; i < n; i++) {
    let j = i + 1;
    nums[pre++] = nums[i];
    while (j < n && nums[j] === nums[j - 1]) j++;
    if (j - i >= 2) {
      nums[pre++] = nums[i];
      popNum += j - i - 2;
    }
    i = j - 1;
  }
  while (popNum--) nums.pop();
};

// 1 1 1 2 2 2 2 3 4 4 4 4 5 5 5
