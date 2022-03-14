/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-13 20:54:00                                                  *
 * @LastModifiedDate: 2022-03-13 21:55:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
// 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致
// （如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 使用一个set保存nums1的，再遍历第二个
  const set = new Set(nums1);
  const ans = new Set();
  for (const num of nums2) {
    if (set.has(num)) {
      ans.add(num);
    }
  }
  console.log(ans);
  return [...ans];
};

intersect([1, 2, 2, 1], [2, 2]);

// 上述解法错误
// 需要考虑元素个数

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect2 = function (nums1, nums2) {
  const hash1 = new Map();
  const hash2 = new Map();
  for (const num1 of nums1) {
    const val = hash1.get(num1) ? hash1.get(num1) + 1 : 1;
    hash1.set(num1, val);
  }
  for (const num2 of nums2) {
    const val = hash2.get(num2) ? hash2.get(num2) + 1 : 1;
    hash2.set(num2, val);
  }
  const ans = [];
  for (const [key, val] of hash1) {
    if (hash2.has(key)) {
      for (let i = 0; i < Math.min(hash2.get(key), val); i++) {
        ans.push(key);
      }
    }
  }
  return ans;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect3 = function (nums1, nums2) {
  // 只用记录一次个数组，可以只记录小的
  if (nums1.length > nums2.length) {
    // 交换顺序
    return intersect3(nums2, nums1);
  }
  const hash1 = new Map();
  for (const num1 of nums1) {
    const val = hash1.get(num1) ? hash1.get(num1) + 1 : 1;
    hash1.set(num1, val);
  }
  const ans = [];
  // 遍历第二个
  for (const num2 of nums2) {
    if (hash1.has(num2)) {
      ans.push(num2);
      const val = hash1.get(num2);
      if (val == 1) {
        hash1.delete(num2);
      } else {
        hash1.set(num2, val - 1);
      }
    }
  }
  return ans;
};
