/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-25 16:08:14                                                  *
 * @LastModifiedDate: 2022-04-25 17:29:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 每组输入只有一个解
  let ans = Infinity;
  const len = nums.length;
  nums.sort((a, b) => a - b);
  // if (target <= nums[0]) {
  //   return nums[0] + nums[1] + nums[2];
  // }
  // if (target >= nums[len - 1]) {
  //   return nums[len - 1] + nums[len - 2] + nums[len - 3];
  // }
  console.log(nums);
  for (let i = 0; i < len - 2; i++) {
    // 不用遍历重复元素
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let right = len - 1;
    let j = i + 1;
    while (j < right) {
      let sum = nums[i] + nums[j] + nums[right];
      // 需要判断sum和target的大小比较
      if (sum == target) {
        return target;
      }
      // 判断当前之和是否更接近目标值
      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum;
      }
      // 确定right和j的值
      if (sum > target) {
        // 确定right
        let r = right - 1;
        while (r > j && nums[right] == nums[r]) {
          r--;
        }
        right = r;
      } else {
        let l = j + 1;
        while (l < right && nums[j] == nums[l]) {
          l++;
        }
        j = l;
      }
      // while (
      //   Math.abs(nums[i] + nums[j] + nums[right] - target) <=
      //     Math.abs(ans - target) &&
      //   j < right
      // ) {
      //   ans = nums[i] + nums[j] + nums[right];
      //   if (ans == target) {
      //     return target;
      //   }
      //   right--;
      // }
    }
  }
  return ans;
};

threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82);
