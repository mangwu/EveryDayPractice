/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-07 13:44:57                                                  *
 * @LastModifiedDate: 2022-04-07 14:14:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。

// 例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
// 给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。

// 子数组 是数组中的一个连续序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  // 1. 等差数列至少有三个元素
  // 2. 等差数列子数组的求得的连续子数组具有规律
  // 3. 如果等差数列的长度为n，那么起个数a(n)就是在n-1的a(n-1)基础上增加
  const len = nums.length;
  if (len < 3) {
    return 0;
  }
  // 用于判断进行最后一个等差数组
  nums.push("a");
  // 记录等差数列长度
  let cnt = 0;
  let ans = 0;
  // 差值
  let curDiff = Infinity;
  for (let i = 1; i < len; i++) {
    if (nums[i] - nums[i - 1] !== curDiff) {
      // 判断当前是否已长度大于3的等差数列
      if (cnt >= 3) {
        ans += ((cnt - 1) * (cnt - 2)) / 2;
      }
      curDiff = nums[i] - nums[i - 1];
      cnt = 2;
    } else if (nums[i] - nums[i - 1] == curDiff) {
      cnt++;
    }
  }
  return ans;
};

// 1 2 3
// 增加个数为 4 - 2 = 2 个
// 2 3 4
// 1 2 3 4
// 增加的个数为5 - 2 = 3个
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5
// 增加的个数为6 - 2 = 4个
// 4 5 6
// 3 4 5 6
// 2 3 4 5 6
// 1 2 3 4 5 6
// 当数组的长度为n时，就增加 n - 2个

// 可以得出结论,长度为n的等差数组，其子等差数组个数为
// 1 + 2 + 3 +....n-2 (n >= 3);
// (1 + n - 2)(n - 2)/2 == (n-1)(n-2)/2
