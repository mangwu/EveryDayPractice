/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-09 09:10:30                                                  *
 * @LastModifiedDate: 2022-08-09 10:27:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 可以求出nums的总和
  // 如果是奇数，可以直接返回false
  // 如果是偶数，利用dfs进行求解
  let sums = 0;
  const hash = new Map();
  for (const num of nums) {
    sums += num;
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }
  if (sums % 2 == 1) {
    return false;
  }
  sums /= 2;
  const dfs = (pre) => {
    if (pre > sums) {
      return false;
    }
    if (pre == sums) {
      return true;
    }
    // 小于sums继续遍历
    for (const [key, val] of [...hash]) {
      if (val == 1) {
        hash.delete(key);
      } else {
        hash.set(key, val - 1);
      }
      if (dfs(pre + key)) {
        return true;
      }
      hash.set(key, val);
    }
    return false;
  };
  return dfs(0);
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sums = 0;
  const hash = new Map();
  for (const num of nums) {
    sums += num;
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }
  if (sums % 2 == 1) {
    return false;
  }
  // 双指针解答错误
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let leftSum = 0;
  let rightSum = 0;
  while (left <= right) {
    if (leftSum == rightSum) {
      if (left < right) {
        leftSum += nums[left];
        left++;
        rightSum += nums[right];
        right--;
        continue;
      } else {
        return false;
      }
    }
    if (leftSum < rightSum) {
      leftSum += nums[left];
      left++;
      continue;
    } else {
      rightSum += nums[right];
      right--;
      continue;
    }
  }
  if (leftSum == rightSum) {
    return true;
  }
  return false;
};

// 1 2 2 3 4 5 7 9

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sums = 0;
  const hash = new Map();
  for (const num of nums) {
    sums += num;
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }
  if (sums % 2 == 1) {
    return false;
  }
  sums /= 2;
  // 双指针解答错误
  nums.sort((a, b) => a - b);
  // 滑动窗口
  let window = [];
  let newSum = 0;
  let idx = 0;
  while (idx < nums.length) {
    newSum += nums[idx];
    window.push(nums[idx]);
    idx++;
    if (newSum == sums) {
      return true;
    }
    if (newSum > sums) {
      while (newSum > sums) {
        newSum -= window.shift();
      }
      if (newSum == sums) {
        return true;
      }
    }
  }
  return false;
};
