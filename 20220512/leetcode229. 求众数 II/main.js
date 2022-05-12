/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-12 16:26:00                                                  *
 * @LastModifiedDate: 2022-05-12 17:16:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const ans = new Set();
  const hash = new Map();
  let n = Math.floor(nums.length / 3);
  for (const num of nums) {
    if (hash.has(num)) {
      const k = hash.get(num);
      if (k + 1 > n) {
        ans.add(num);
      }
      hash.set(num, k + 1);
    } else {
      hash.set(num, 1);
      if (1 > n) {
        ans.add(num);
      }
    }
  }
  return [...ans];
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  // 如果一个元素超过n / 3,答案最多有两个元素
  // 最终的结果最多两个元素，所以使用两个变量保存
  let ele1 = 0;
  let ele2 = 0;
  let vote1 = 0;
  let vote2 = 0;
  for (const num of nums) {
    if (vote1 > 0 && num == ele1) {
      vote1++;
    } else if (vote2 > 0 && num == ele2) {
      vote2++;
    } else if (vote1 == 0) {
      vote1++;
      ele1 = num;
    } else if (vote2 == 0) {
      vote2++;
      ele2 = num;
    } else {
      // 抵消
      vote1--;
      vote2--;
    }
  }
  let cnts1 = 0;
  let cnts2 = 0;
  for (const num of nums) {
    if (num == ele1 && vote1 > 0) {
      cnts1++;
    }
    if (num == ele2 && vote2 > 0) {
      cnts2++;
    }
  }
  let ans = [];
  let n = Math.floor(nums.length / 3);
  if (cnts1 > n && vote1 > 0) {
    ans.push(ele1);
  }
  if (cnts2 > n && vote2 > 0) {
    ans.push(ele2);
  }
  return ans;
};
