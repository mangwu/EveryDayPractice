/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-19 11:32:16                                                  *
 * @LastModifiedDate: 2023-02-19 12:01:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 nums 。

// 如果数组 nums 的子集中的元素乘积是一个 无平方因子数 ，则认为该子集是一个 无平方 子集。

// 无平方因子数 是无法被除 1 之外任何平方数整除的数字。

// 返回数组 nums 中 无平方 且 非空 的子集数目。因为答案可能很大，返回对 109 + 7 取余的结果。

// nums 的 非空子集 是可以由删除 nums 中一些元素（可以不删除，但不能全部删除）得到的一个数组。如果构成两个子集时选择删除的下标不同，则认为这两个子集不同。
var getFactors = (num) => {
  if (num % 4 == 0 || num % 9 == 0 || num % 16 === 0 || num % 25 == 0) {
    return false;
  }
  const set = new Set();
  let cur = 2;
  while (num >= cur) {
    while (num % cur === 0) {
      num /= cur;
      set.add(cur);
    }
    cur++;
  }
  return set;
};
const hash = new Map();
for (let i = 2; i <= 30; i++) {
  const set = getFactors(i);
  if (set) hash.set(i, set);
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var squareFreeSubsets = function (nums) {
  // 先判断每个数是否为无平方因子数
  // num 1 - 30
  // 具有相同质因数的元素不能组合
  const n = nums.length;
  const res = [];
  for (const num of nums) {
    if (hash.has(num)) {
      let m = 1;
      const set = hash.get(num);
      for (const num2 of nums) {
        const set2 = hash.get(num2);
        if (set2) {
          let flag = true;
          for (const item of set) {
            if (set2.has(item)) {
              flag = false;
              break;
            }
          }
          if (flag) m++;
        }
      }
      res.push(m);
    } else {
      res.push(0);
    }
  }
  return res.reduce((pre, cur) => {
    return (pre + ((cur + 1) * cur) / 2) % 100000007;
  }, 0);
};

// 1 1  => none
// 2 2  => 6  10 14 22 26 30
// 3 3  => 6  15 21 30
// 5 5  => 10 15 30
// 6 2 3 =>2 3
// 7 7
// 10 2 5
// 11 11
// 13 13
// 14 2 7
// 15 3 5
// 17 17
// 19 19
// 21 3 7
// 22 2 11
// 23 23
// 26 2 13
// 29 29
// 30 2 3 5
