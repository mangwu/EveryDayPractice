/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-16 08:58:17                                                  *
 * @LastModifiedDate: 2022-06-16 09:53:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个整数数组和一个整数 k，你需要在数组里找到 不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目。

// 这里将 k-diff 数对定义为一个整数对 (nums[i], nums[j])，并满足下述全部条件：

// 0 <= i < j < nums.length
// |nums[i] - nums[j]| == k
// 注意，|val| 表示 val 的绝对值。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  // 因为取绝对值，所以|nums[i] - nums[j]| 两个元素的差值等于 k, 那么两个元素互换位置后，差值仍然等于k
  // 且互换位置并不影响数对个数，因为(nums[i], nums[j])只是变为(nums[j], nums[i])而已
  nums.sort((a, b) => a - b);
  const n = nums.length;
  // k 是大于0的, 使用双指针
  let left = 0;
  let right = 1;
  let ans = 0;
  // 特殊处理0
  if (k == 0) {
    const set = new Set();
    for (let i = 0; i < n; i++) {
      if (nums[i] == nums[i - 1]) {
        set.add(nums[i]);
      }
    }
    return set.size;
  }
  while (left < right && right < n) {
    if (nums[right] == nums[right - 1] && right - 1 !== left) {
      right++;
      continue;
    }
    if (nums[left] == nums[left - 1] && left + 1 !== right) {
      left++;
      continue;
    }
    if (nums[right] - nums[left] == k) {
      ans++;
      right++;
      left++;
    } else if (nums[right] - nums[left] > k) {
      if (left + 1 == right) {
        left++;
        right++;
      } else {
        left++;
      }
    } else {
      right++;
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  // 记录法
  const hash = new Map();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (hash.has(nums[i])) {
      const arr = hash.get(nums[i]);
      arr.push(i);
      hash.set(nums[i], arr);
    } else {
      hash.set(nums[i], [i]);
    }
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const target1 = nums[i] - k;
    const target2 = nums[i] + k;
    if (hash.has(target1)) {
      // 找出第一个比i大的索引
      const arr = hash.get(target1);
      let left = binarySearch(arr, i);
      ans += arr.length - left;
    }
    if (hash.has(target2)) {
      const arr = hash.get(target2);
      let left = binarySearch(arr, i);
      ans += arr.length - left;
    }
  }
  return ans;
};
var binarySearch = (arr, i) => {
  // 二分查找
  let left = 0;
  let right = arr.length;
  // [left, right)
  while (left < right) {
    let mid = (left + right) >> 1;
    if (arr[mid] <= i) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

// 上述解答错误，数对不能重复

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  // 记录法
  const hash = new Map();
  let n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (hash.has(nums[i])) {
      const arr = hash.get(nums[i]);
      arr.push(i);
      hash.set(nums[i], arr);
    } else {
      hash.set(nums[i], [i]);
    }
  }
  let ans = 0;
  if (k == 0) {
    for (const [_key, value] of hash) {
      if (value.length > 1) {
        ans++;
      }
    }
    return ans;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] == nums[i - 1]) {
      // 不用找重复的
      continue;
    }
    // 只找比自己大的
    let target = nums[i] + k;
    if (hash.has(target)) {
      ans++;
    }
  }
  return ans;
};
var binarySearch = (arr, i) => {
  // 二分查找
  let left = 0;
  let right = arr.length;
  // [left, right)
  while (left < right) {
    let mid = (left + right) >> 1;
    if (arr[mid] <= i) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
