/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-16 08:52:58                                                  *
 * @LastModifiedDate: 2023-10-16 09:34:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。

// 你必须设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else set.add(num);
  }
  return [...set];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // num1 ^ num2 其中包含一个最低位的1
  // 最低位的1的得到说明在改位置上num1和num2的
  let lsb = 0;
  for (const num of nums) {
    lsb ^= num;
  }
  lsb = lsb & -lsb;
  let type1 = 0;
  let type2 = 0;
  for (const num of nums) {
    if (lsb & num) {
      type1 ^= num;
    } else {
      type2 ^= num;
    }
  }
  return [type1, type2];
};
