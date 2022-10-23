/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-22 17:45:41                                                  *
 * @LastModifiedDate: 2022-10-22 20:42:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 arr ，该数组表示一个从 1 到 n 的数字排列。
// 有一个长度为 n 的二进制字符串，该字符串上的所有位最初都设置为 0 。

// 在从 1 到 n 的每个步骤 i 中（假设二进制字符串和 arr 都是从 1 开始索引的情况下），
// 二进制字符串上位于位置 arr[i] 的位将会设为 1 。

// 给你一个整数 m ，请你找出二进制字符串上存在长度为 m 的一组 1 的最后步骤。
// 一组 1 是一个连续的、由 1 组成的子串，且左右两边不再有可以延伸的 1 。

// 返回存在长度 恰好 为 m 的 一组 1  的最后步骤。如果不存在这样的步骤，请返回 -1 。

/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
  // 关键点在于长度为m的一组1的判断
  // 可以使用数组记录每个位置的边界情况，即其左边界和右边界分别是哪个
  // 再插入时，只需要修改最左或最右的边界情况即可
  const n = arr.length;
  const edges = new Array(n + 1).fill(0).map(() => new Array(2).fill(-1));
  // 连续的m个1的数量，初始为1
  let count = 0;
  // 最后存在连续m个1的步骤
  let ans = -1;
  for (let i = 0; i < n; i++) {
    // 被选中的字符
    let target = arr[i];
    // 保存左边和右边的字符
    let left = arr[i];
    let right = arr[i];
    if (left > 1 && edges[target - 1][0] != -1) {
      // 左边有1字符
      // 计算长度
      let len = edges[target - 1][1] - edges[target - 1][0] + 1;
      if (len === m) {
        count--;
      }
      // 更新左边
      left = edges[target - 1][0];
    }
    if (right < n && edges[target + 1][0] != -1) {
      // 右边有1字符
      // 计算长度
      let len = edges[target + 1][1] - edges[target + 1][0] + 1;
      if (len === m) {
        count--;
      }
      // 更新右边
      right = edges[target + 1][1];
    }
    // 计算添加后的总长度
    let len = right - left + 1;
    if (len === m) {
      count++;
    }
    if (count > 0) {
      ans = i + 1;
    }
    // 更新边界（只需要更新最左边和最右边的）
    edges[left][0] = edges[right][0] = left;
    edges[left][1] = edges[right][1] = right;
  }
  return ans;
};
