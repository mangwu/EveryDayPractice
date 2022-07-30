/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-30 15:37:38                                                  *
 * @LastModifiedDate: 2022-07-30 21:32:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个由不同正整数的组成的非空数组 nums ，考虑下面的图：

// 有 nums.length 个节点，按从 nums[0] 到 nums[nums.length - 1] 标记；
// 只有当 nums[i] 和 nums[j] 共用一个大于 1 的公因数时，
// nums[i] 和 nums[j]之间才有一条边。
// 返回 图中最大连通组件的大小 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function (nums) {
  // nums中的数字各不相同
  const n = nums.length;
  // 约数对数字
  const factor2Num = new Map();
  const num2Factors = new Map();
  for (const num of nums) {
    const factors = getFactor(num);
    for (const factor of factors) {
      if (factor2Num.has(factor)) {
        const arr = factor2Num.get(factor);
        arr.push(num);
        factor2Num.push(arr);
      } else {
        factor2Num.push([num]);
      }
    }
    num2Factors.set(num, factors);
  }
};

// 获取约数
var getFactor = (num) => {
  const sqrtNum = Math.sqrt(num);
  const ans = [num];
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i == 0) {
      if (i == sqrtNum) {
        ans.push(i);
      } else {
        ans.push(i);
        ans.push(num / i);
      }
    }
  }
};
