/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-21 09:55:07                                                  *
 * @LastModifiedDate: 2022-07-21 10:35:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  // 删除元素后的奇偶下标元素之和需要使用O(1)时间复杂度得到
  const n = nums.length;
  if (n == 1) {
    return 1;
  }
  let sum = 0;
  let oddSum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (i % 2 == 1) {
      oddSum += nums[i];
    }
  }
  let evenSum = sum - oddSum;
  let curSum = 0;
  let curOddSum = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    // 去除nums[i]的总和必须为偶数
    if ((sum - nums[i]) % 2 == 1) {
      curSum += nums[i];
      if (i % 2 == 1) {
        curOddSum += nums[i];
      }
      continue;
    }
    // 计算奇数的总和
    // 左边就是curOddSum
    // 右边就是原来右边的偶数和
    let rightOddSum = evenSum - (curSum - curOddSum);
    if (i % 2 == 0) {
      // 当前元素索引是偶数 需要删除当前元素
      rightOddSum -= nums[i];
    }
    let newOddSum = curOddSum + rightOddSum;
    if (newOddSum * 2 == sum - nums[i]) {
      ans++;
    }
    curSum += nums[i];
    if (i % 2 == 1) {
      curOddSum += nums[i];
    }
  }
  return ans;
};

// 1 2 3 4 5 6 7 8
//   |   |   |   |
