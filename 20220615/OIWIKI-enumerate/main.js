/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-15 09:54:44                                                  *
 * @LastModifiedDate: 2022-06-15 11:23:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个数组中的数互不相同，求其中和为0的数对的个数。

/**
 * @description 求数组中和为0的数对个数
 * @param {number[]} a 元素互不相同的个数
 */
var SumZeroNumber = function (a) {
  // 可以将数组进行排序后，然后使用双指针
  a.sort((a, b) => a - b);
  const n = a.length;
  if (a[0] >= 0 || a[n - 1] <= 0) {
    return 0;
  }
  // 数不相同，不用考虑重复元素，使用双指针即可
  let left = 0;
  let right = n - 1;
  let cnt = 0;
  while (left < right) {
    let sum = a[left] + a[right];
    if (sum == 0) {
      cnt++;
      left++;
      right--;
    } else if (sum > 0) {
      // right大了
      right--;
    } else {
      // left小了
      left++;
    }
  }
  // 数对可以是 [a, b] 也可以是[b,a]; a不可能等于b，因为数组中元素互不相等
  return cnt * 2;
};

// 枚举思想

/**
 * @description 求数组中和为0的数对个数
 * @param {number[]} a 元素互不相同的个数
 */
var SumZeroNumber = function (a) {
  const n = a.length;
  let ans = 0;
  // 第一次暴力枚举
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i] + a[j] == 0) {
        ans++;
      }
    }
  }
  return ans;
};
// 暴力枚举出了所有可能的数对项目，没进行任何的筛选（减少枚举空间）

// 使用hash记录所有元素，根据已知条件判断当前元素a是否存在 和为0的元素 -a
// 这样就不用枚举第二层了
/**
 * @description 求数组中和为0的数对个数
 * @param {number[]} a 元素互不相同的个数
 */
var SumZeroNumber = function (a) {
  const n = a.length;
  let ans = 0;
  const set = new Set(a);
  for (let i = 0; i < n; i++) {
    if (set.has(-a[i])) {
      ans++;
    }
  }
  return ans;
};

// set是一种键值相同的数据结构，通过它可以O(1)找到存在的元素
// 可以使用桶数据结构

/**
 * @description 求数组中和为0的数对个数
 * @param {number[]} a 元素互不相同的个数
 */
var SumZeroNumber = function (a) {
  const n = a.length;
  let min = Infinity;
  // 桶记录
  for (const num of a) {
    // 找到最小数
    min = Math.min(num, Infinity);
  }
  if (min >= 0) {
    return 0;
  }
  // 每个数都要加上min,保证数组索引最小值大于等于0
  min = -min;
  let ans = 0;
  // 桶数据
  const buckets = [];
  for (let i = 0; i < n; i++) {
    if (buckets[min - a[i]]) {
      ans++;
    }
    // 表示a[i]存在
    buckets[a[i] + min] = true;
  }
  return ans * 2;
};
