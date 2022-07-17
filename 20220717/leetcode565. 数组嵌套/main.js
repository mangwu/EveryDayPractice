/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-17 17:58:55                                                  *
 * @LastModifiedDate: 2022-07-17 19:27:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到最大的集合S并返回其大小，
// 其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。

// 假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]...
// 以此类推，不断添加直到S出现重复的元素。

//

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  // 如果有一个数组元素嵌套长度超过一半就可以返回长度了
  const set = new Set(nums);
  let ans = 0;
  const dfs = (idx, pre) => {
    if (set.has(idx)) {
      set.delete(idx);
      dfs(nums[idx], pre + 1);
    } else {
      ans = Math.max(pre, ans);
      if (set.size == 0) {
        return;
      }
      for (const key of set) {
        dfs(key, 0);
        break;
      }
    }
  };
  dfs(nums[0], 0);
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  const set = new Set(nums);
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    while (set.has(nums[i])) {
      set.delete(nums[i]);
      i = nums[i];
      cnt++;
    }
    ans = Math.max(ans, cnt);
  }
  return ans;
};
