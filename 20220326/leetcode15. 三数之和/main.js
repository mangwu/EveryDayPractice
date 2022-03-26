/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-26 20:01:25                                                  *
 * @LastModifiedDate: 2022-03-26 23:14:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  const hash = new Set();
  // 暴力解法
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          if (!hash.has(nums[i] + "," + nums[j] + "," + nums[k])) {
            ans.push([nums[i], nums[j], nums[k]]);
          }
          hash.add(nums[i] + "," + nums[j] + "," + nums[k]);
        }
      }
    }
  }
  return ans;
};
// 暴力解法O(n^3)
// threeSum([-1, 0, 1, 2, -1, -4, -1, 0, 0]);

// 三重循环的优化
// 1. 避免重复，可以将数组先进行排序，这样三重循环得到的[a,b,c] a<b<c
// 2. 同时为了完全避免相同元素，应该保证重复元素不再再次遍历，如当 1 1 2 2 3 3 等同于遍历1 2 3
// 3. 第二轮循环进行后，b肯定是增大的，所以c一定是减少的，所以c可以后序遍历
// 4. 第一轮遍历每次记录上一次c的索引，就可以在下一轮遍历时从该索引开始遍历（因为一定在该索引前）
// 5. 这就是双指针，因为b和c的遍历只遍历了一遍数组，相当于一轮遍历
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  // 双指针
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    // 不遍历重复元素
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let third = len - 1;
    for (let j = i + 1; j < len; j++) {
      // 第二轮遍历也不遍历相同元素
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      // 遍历第三个指针 三者之和大于0时，就可以右移third了
      while (third > j && nums[i] + nums[j] + nums[third] > 0) {
        third--;
      }
      if (j == third) {
        // 指针重合，可以直接退出，不符合条件
        break;
      }
      if (nums[i] + nums[j] + nums[third] == 0) {
        // 不用考虑nums[third]的重复情况，因为每次nums[i]和nums[j]固定，third只取一个
        ans.push([nums[i], nums[j], nums[third]]);
      }
    }
  }
  console.log(ans)
  return ans;
};
threeSum([-1, 0, 1, 2, -1, -4, -1, 0, 0]);
