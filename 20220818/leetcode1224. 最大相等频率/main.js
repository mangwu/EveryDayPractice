/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-18 08:59:59                                                  *
 * @LastModifiedDate: 2022-08-18 11:20:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 nums，请你帮忙从该数组中找出能满足下面要求的 最长 前缀，并返回该前缀的长度：

// 从前缀中 恰好删除一个 元素后，剩下每个数字的出现次数都相同。
// 如果删除这个元素后没有剩余元素存在，仍可认为每个数字都具有相同的出现次数（也就是 0 次）。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function (nums) {
  // 记录相等数
  let equalNum = 0;
  let ans = 1;
  const n = nums.length;
  const hash = new Map();
  // 记录数量为1的产品
  const set = new Set();
  // 记录数量为equalNum的产品数量
  let p = 0;
  // 表示hash中的key的value是否都相等
  let isEqual = true;
  for (let i = 0; i < n; i++) {
    if (hash.has(nums[i])) {
      // 添加重复的
      const k = hash.get(nums[i]);
      set.delete(nums[i]);
      if (isEqual) {
        // 是相等的
        ans = i + 1;
        if (hash.size !== 1) {
          // 如果只有一个元素，isEqual仍然是true
          isEqual = false;
        }
        equalNum = k + 1;
        p = 1;
        hash.set(nums[i], equalNum);
      } else {
        // 不是相等的
        // 判断能否构成一个满足条件的前缀
        if (k == equalNum - 1) {
          // 这里的判断需要更严谨，可能出现如下情况 [1,2,3,4,1,2,3,4,1,2] i == 9 size == 4 equalNum == 3
          // 需要保证数量为1的元素有且只有一个
          if (equalNum * (hash.size - 1) == i && set.size == 1) {
            ans = i + 1;
          }
          // 恰好使得每个元素都具有相同值
          if (equalNum * hash.size == i + 1) {
            isEqual = true;
          }
          p++;
        } else if (k == equalNum) {
          equalNum = equalNum + 1;
          p = 1;
          // 只有一个数字数量为1，其它数字都是同一个数字的情况
          if (equalNum * (hash.size - 1) == i && set.size == 1) {
            ans = i + 1;
          }
        } else if (k + 1 == equalNum - 1) {
          // 只有一个等于equalNum, 其它数的数量为euqalNum - 1
          // 为了确保严谨性，需要保证等于equalNum的元素个数为1个
          if ((equalNum - 1) * hash.size == i && p == 1) {
            ans = i + 1;
          }
        }
        hash.set(nums[i], k + 1);
      }
    } else {
      // 新增
      if (equalNum <= 1) {
        equalNum = 1;
        p++;
        ans = i + 1;
      } else {
        // equalNum 大于等于2
        if (isEqual) {
          // 是相等的
          ans = i + 1;
          isEqual = false;
        } else if (equalNum == 2) {
          // 不是全相等的
          // 只有一个数字数量等于2时的情况也符合条件
          if (hash.size + 1 == i) {
            ans = i + 1;
          }
        }
      }
      hash.set(nums[i], 1);
      set.add(nums[i]);
    }
  }
  return ans;
};

maxEqualFreq([
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21,
  22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31,
  31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40,
  13, 41, 65, 63, 48, 66, 4, 60, 63, 19, 9, 38, 83, 98, 59, 80, 91, 74, 77, 66,
  80, 17, 66, 41, 51, 26, 22, 83, 4, 80, 40, 42, 23, 80, 5, 19, 79, 88, 75, 84,
  56, 89, 87, 100, 7, 87, 9, 51, 65, 37, 44, 73, 85, 38, 43, 83, 22, 25, 20, 76,
]);
