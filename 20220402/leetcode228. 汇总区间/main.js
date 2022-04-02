/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-02 17:04:48                                                  *
 * @LastModifiedDate: 2022-04-02 17:15:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个  无重复元素 的 有序 整数数组 nums 。

// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

// 列表中的每个区间范围 [a,b] 应该按如下格式输出：

// "a->b" ，如果 a != b
// "a" ，如果 a == b

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const len = nums.length;
  const ans = [];
  let i = 0;
  while (i < len) {
    let j = i;
    while (j < len - 1) {
      if (nums[j] + 1 == nums[j + 1]) {
        j++;
      } else {
        break;
      }
    }
    if (j == i) {
      ans.push(nums[i].toString());
    } else {
      ans.push(`${nums[i]}->${nums[j]}`);
    }
    i = j + 1;
  }
  return ans;
};
