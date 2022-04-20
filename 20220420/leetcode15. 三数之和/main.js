/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-20 15:40:20                                                  *
 * @LastModifiedDate: 2022-04-20 16:29:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 先排序， 如果从排序后的数组左边
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const map = new Map();
  const ans = [];
  for (let i = 0; i < len; i++) {
    const arr = map.get(nums[i]);
    if (arr) {
      arr.push(i);
      map.set(nums[i], arr);
    } else {
      map.set(nums[i], [i]);
    }
  }
  // 最小值大于0,或者最大值小于0，则没有相应的三元组
  if (nums[0] > 0 || nums[len - 1] < 0) {
    return [];
  }
  // 从左边开始遍历，且只遍历非重复的负数值(不能重复的三元组)
  for (let i = 0; i < len && nums[i] <= 0; i++) {
    if (i - 1 >= 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let j = len - 1;
    let pre = i + 1;
    for (; j > pre && nums[j] >= 0; j--) {
      if (j + 1 < len && nums[j] == nums[j + 1]) {
        continue;
      }
      let sub = 0 - nums[j] - nums[i];
      const arr = map.get(sub);
      if (arr && sub >= nums[i] && sub <= nums[j] && arr[0] < j && arr[arr.length - 1] > i) {
        ans.push([nums[i], sub, nums[j]]);
        pre = arr[arr.length - 1];
      }
    }
  }
  return ans;
};
