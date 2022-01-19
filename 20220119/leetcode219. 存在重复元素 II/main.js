/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-19 15:01:50                                                  *
 * @LastModifiedDate: 2022-01-19 16:08:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。
// 如果存在，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // k是限制条件，如果不同索引距离太远也无法得到正常的
  // 暴力解法
  // nums长度
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    // 小于
    for (let j = i + 1; j <= Math.min(len - 1, k + i); j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate2 = function (nums, k) {
  // k是限制条件，如果不同索引距离太远也无法得到正常的
  // hash 解法
  // 使用hash表保存遍历到的每个nums
  // 在遍历时，先判断hash表中是否存在相关数据，如果存在就判断索引是否满足条件
  // 不用担心数据相同时的情况，正序遍历，数据相同更新反而缩短了和下一个相同数据的索引距离
  // nums长度
  const len = nums.length;
  // hash
  const hash = new Map();
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    // 判断hash表中是否有相同数据，有就判断索引是否满足条件
    if (hash.has(num) && i - hash.get(num) <= k) {
      return true;
    }
    // 数据入hash
    hash.set(num, i);
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate3 = function (nums, k) {
  // k是限制条件，如果不同索引距离太远也无法得到正常的
  // 弹窗解法
  // 为了节省空间，可以只保存当前索引的前k个nums值
  // 其中有重复的num即可以确定索引值小于k的条件成立
  // 当遍历长度大于k时，每次遍历都删除弹窗之前第一个保存的值
  const len = nums.length;
  // 使用弹窗，只需要保存数字，不需要保存索引
  const set = new Set();
  for (let i = 0; i < len; i++) {
    if (i > k) {
      // 删除第一个数字
      set.delete(nums[i - k - 1]);
    }
    // set表中是否有相同元素
    if (set.has(nums[i])) {
      return true;
    }
    // 数据入hash
    set.add(nums[i]);
  }
  return false;
};
