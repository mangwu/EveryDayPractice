/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-25 08:45:22                                                  *
 * @LastModifiedDate: 2022-08-25 09:38:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。
// 返回的结果必须要是按升序排好的。

// 整数 a 比整数 b 更接近 x 需要满足：

// |a - x| < |b - x| 或者
// |a - x| == |b - x| 且 a < b

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  const n = arr.length;
  if (arr[0] >= x) {
    return arr.slice(0, k);
  }
  if (arr[n - 1] <= x) {
    return arr.slice(n - k);
  }
  // 二分查找第一个大于x的元素
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (arr[mid] <= x) {
      // 在右边
      left = mid + 1;
    } else {
      // 在左边
      right = mid;
    }
  }
  left--;
  let ans = [];
  while (k-- > 0) {
    if (left >= 0 && right < n) {
      if (x - arr[left] <= arr[right] - x) {
        left--;
      } else {
        right++;
      }
    } else if (right == n) {
      left--;
    } else {
      right++;
    }
  }
  // 不在while中使用，避免使用排序
  for (let i = left + 1; i < right; i++) {
    ans.push(arr[i]);
  }
  return ans;
};

findClosestElements([0, 1, 1, 1, 2, 3, 6, 7, 8, 9], 9, 4);

// [0,1,1,1,2,3,6,7,8,9]

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  arr.sort((a, b) => {
    return Math.abs(a - x) - Math.abs(b - x) || a - b;
  });
  return arr.slice(0, k);
};
