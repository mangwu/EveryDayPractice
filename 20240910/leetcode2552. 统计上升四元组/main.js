/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-10 08:49:35                                                  *
 * @LastModifiedDate: 2024-09-10 16:23:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 下标从 0 开始的整数数组 nums ，它包含 1 到 n 的所有数字，请你返回上升四元组的数目。

// 如果一个四元组 (i, j, k, l) 满足以下条件，我们称它是上升的：

// 0 <= i < j < k < l < n 且
// nums[i] < nums[k] < nums[j] < nums[l] 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  const n = nums.length;
  // 对于i < j < k < l，枚举 j 和 k
  // 1.因为要满足nums[i] < nums[k] < nums[j] < nums[l]
  //  所以对于一个合法的nums[j] > nums[k]，应该记录：
  //  满足nums[i] < nums[k]的个数iNum
  //  满足nums[l] > nums[j]的个数lNum
  //  iNum * lNum就是本次枚举的nums[j] ，nums[k]符合条件的四元组个数
  //  枚举完中间的两个数，将满足条件的iNum * lNum相加就是最终结果
  // 2.计算iNum，需要借助辅助数组，每遍历完成一个nums[j]，就需要将大于nums[j]的元素个数加一
  // 因为nums中的元素范围在[1,n]，且各不相同，所以可以直接遍历增加每个元素包含的满足条件的nums[j]
  // 3.计算jNum，倒叙遍历k，因为在遍历k时，nums[j]是固定大小的
  //   如果当前nums[k] > nums[j]，那么nums[k]可以作为之后的nums[l]，因为这个nums[l]一定大于nums[j]，lNum加一
  //   如果当前nums[k] < nums[j]，可以是一次合法的枚举，可以为res加上一次相乘结果
  const iNums = new Array(n + 1).fill(0);
  let res = 0;
  for (let j = 0; j < n; j++) {
    let lNum = 0;
    for (let k = n - 1; k > j; k--) {
      if (nums[j] > nums[k]) {
        res += iNums[nums[k]] * lNum;
      } else lNum++;
    }
    for (let i = nums[j] + 1; i <= n; i++) {
      iNums[i]++;
    }
  }
  return res;
};
// 4000 * 3999 / 2
// 24 * 23 / 2
