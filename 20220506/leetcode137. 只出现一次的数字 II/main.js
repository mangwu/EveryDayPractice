/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-06 15:46:26                                                  *
 * @LastModifiedDate: 2022-05-06 16:58:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 因为是3次，所以不能使用异或运算符号进行求解了
  // 使用额外的空间来判断是否有重复元素
  let set = new Set();
  let set2 = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      set2.delete(num);
    } else {
      set.add(num);
      set2.add(num);
    }
  }
  return [...set2][0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 考虑不使用额外空间的解法
  // 1 <= nums.length <= 3 * 104
  // -2^31 <= nums[i] <= 2^31 - 1
  // 每一个数都是32位的整型数字，那么对于每一个数的每一位要么是1要么是0
  // 将每一个数的固定一位进行和值，如果未加上单个的哪个数的固定位，那么和值一定是3的倍数
  // 如果加上单个数的固定位，就是一个3的倍数 加上0或者1
  // 所以可以确定单个数在改位上的值为和值除以3的余数
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    // 第i位之和
    let total = 0;
    for (const num of nums) {
      // 有移i位与1并得到第i位
      total += (num >> i) & 1;
    }
    // 与3相除得到单个数字在当前的数字
    if (total % 3 !== 0) {
      // 1左移i位得到第i位数字,相或设置第i位为1
      ans |= 1 << i;
    }
  }
  return ans;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 数字电路法
  // 设法设计一个电路状态
  let a = 0,
    b = 0;
  for (const num of nums) {
    a = (a ^ num) & ~b;
    b = (b ^ num) & ~a;
  }
  return a;
};
