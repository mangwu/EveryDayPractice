/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-24 08:51:52                                                  *
 * @LastModifiedDate: 2022-10-24 10:09:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组 nums ，将其划分为两个连续子数组 left 和 right， 使得：

// left 中的每个元素都小于或等于 right 中的每个元素。
// left 和 right 都是非空的。
// left 的长度要尽可能小。
// 在完成这样的分组后返回 left 的 长度 。

// 用例可以保证存在这样的划分方法。
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  const arr = nums.slice().sort((a, b) => a - b);
  const hash = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let addEle = arr[i];
    let minusEle = nums[i];
    if (hash.has(addEle)) {
      hash.set(addEle, hash.get(addEle) + 1);
      if (hash.get(addEle) === 0) {
        hash.delete(addEle);
      }
    } else {
      hash.set(addEle, 1);
    }
    if (hash.has(minusEle)) {
      hash.set(minusEle, hash.get(minusEle) - 1);
      if (hash.get(minusEle) === 0) {
        hash.delete(minusEle);
      }
    } else {
      hash.set(minusEle, -1);
    }
    if (hash.size === 0) {
      return i + 1;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  // 动态规划的思想（或者单调最小值的思想），可以求得right右边数组在不同的索引情况下的每个最小值
  const n = nums.length;
  const minRight = new Array(n).fill(0);
  minRight[n - 1] = nums[n - 1];
  // 求在分隔索引在不同情况下的minRight的最小值
  for (let i = n - 2; i >= 1; i--) {
    minRight[i] = Math.min(minRight[i + 1], nums[i]);
  }
  // 使用一个变量报错左边的最大值
  let maxLeft = nums[0];
  for (let i = 1; i < n; i++) {
    if (maxLeft <= minRight[i]) {
      return i;
    }
    maxLeft = Math.max(maxLeft, nums[i]);
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  // 一次遍历
  // 左边的最大值可以通过遍历动态变化，
  // 如果只是要一次，右边的最大值是未知的
  // 可以反过来想一下不合法的位置，如果右边有值是小于左边的最大值的，说明仍然不合法
  // 可以直接将位置移动到不合法的位置，同时更新最大值，继续进行进行遍历
  let curMax = nums[0];
  let leftMax = nums[0];
  let pos = 0;
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    curMax = Math.max(curMax, nums[i]);
    if (nums[i] < leftMax) {
      //  这个位置不合法， 更新pos
      leftMax = curMax;
      pos = i;
    }
  }
  return pos + 1;
};
