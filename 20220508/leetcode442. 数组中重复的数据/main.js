/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-08 16:48:34                                                  *
 * @LastModifiedDate: 2022-05-08 17:24:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数，并以数组形式返回。

// 你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  // 非常量法
  const res = new Set();
  let ans = [];
  for (const num of nums) {
    if (res.has(num)) {
      ans.push(num);
    } else {
      res.add(num);
    }
  }
  return ans;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  // 有一个条件未用
  // nums的长度为n，则其中的元素值范围为[1,n]
  // 因为相同元素最多有两个，所以对于排好序的队列，应该是这样的
  // [1,2,2,...x,x,n]
  // 如果没有相同元素，就是[1,2,3,...n]
  // 没增加一个相同元素，就要删掉一个元素，那么将增加的相同元素填补到被删元素处就是
  // [1,2,3,4,2,3,7,8] 等, 具有相同元素的特征是后面的2，3不在它本来的索引上
  // 所以将nums转化为上面形式的数组（将每个元素和索引一一对应）后，
  // 再遍历一遍，取出和索引不对应的元素就是答案
  // 转化方式：因为要和索引对应，所以将nums[i] 与nums[nums[i] - 1]的元素进行替换即可
  // 知道二者相等
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (i + 1 !== nums[i]) {
      ans.push(nums[i]);
    }
  }
  return ans;
};
