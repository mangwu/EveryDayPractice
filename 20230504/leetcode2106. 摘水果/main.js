/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-04 08:39:47                                                  *
 * @LastModifiedDate: 2023-05-04 09:57:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个无限的 x 坐标轴上，有许多水果分布在其中某些位置。给你一个二维整数数组
// fruits ，其中 fruits[i] = [positioni, amounti] 表示共有 amounti 个水果放置在
// positioni 上。fruits 已经按 positioni 升序排列 ，每个 positioni 互不相同 。

// 另给你两个整数 startPos 和 k 。最初，你位于 startPos 。从任何位置，你可以选择
// 向左或者向右 走。在 x 轴上每移动 一个单位 ，就记作 一步 。你总共可以走 最多
// k 步。你每达到一个位置，都会摘掉全部的水果，水果也将从该位置消失（不会再生）。

// 返回你可以摘到水果的 最大总数 。

/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
  // 走法最多折返一次，因为多余的折返的路径必然会有更大的覆盖解决方案
  // 如果startPos在所有fruits的前面或者后面，这种情况下不用进行折返，直接一个方向行走即可
  // 如果startPos在中间，那么可以只从一个方向开始讨论，以右方向为例
  //   -> 先通过k计算出能衍生到的最右的位置
  //   -> 二分查找找到第一个在这个最右位置之前(或等于)的水果位置
  //   -> 如果找到的第一个水果在startPos的左边(或等于startPos)，可以直接确定方向为左
  //   -> 否则从这个位置开始向左遍历fruits，可以通过计算找出一条适合的折返或直线路径
  //   -> 其中最左边的位置可以通过计算得出，再通过二分查找找到第一个大于(或等于)最左边位置的水果位置
  //   -> 最后利用前缀和计算出这条折返路径或直线路径上总的水果个数
  const n = fruits.length;
  if (startPos >= fruits[n - 1][0]) {
    let res = 0;
    for (let i = n - 1; i >= 0; i--) {
      if (startPos - fruits[i][0] <= k) {
        res += fruits[i][1];
      } else {
        break;
      }
    }
    return res;
  } else if (startPos <= fruits[0][0]) {
    let res = 0;
    for (let i = 0; i < n; i++) {
      if (fruits[i][0] - startPos <= k) {
        res += fruits[i][1];
      } else {
        break;
      }
    }
    return res;
  }
  const prefix = [0];
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + fruits[i][1];
  }
  // 最右边位置
  let target = startPos + k;
  let idx = bianrySearch(fruits, target);
  if (fruits[idx][0] <= startPos) {
    let res = 0;
    for (let i = idx; i >= 0; i--) {
      if (startPos - fruits[i][0] <= k) {
        res += fruits[i][1];
      } else {
        break;
      }
    }
    return res;
  }
  let res = 0;
  for (let i = idx; i >= 0; i--) {
    let cur = 0;
    if (fruits[i][0] <= startPos) {
      for (let j = i; j >= 0; j--) {
        if (startPos - fruits[j][0] <= k) {
          cur += fruits[j][1];
        } else {
          break;
        }
      }
      res = Math.max(res, cur);
      break;
    } else {
      const dis = fruits[i][0] - startPos;
      let curTarget = Math.min(
        startPos - (k - dis * 2),
        startPos - (k - dis) / 2
      );
      const curIdx = bianrySearch(fruits, curTarget, "ge");
      console.log(i, curTarget, curIdx, fruits[i][0], dis);
      res = Math.max(res, prefix[i + 1] - prefix[curIdx]);
    }
  }
  return res;
};

/**
 * @description 二分查找
 * @param {number[][]} fruits 水果位置和数量
 * @param {number} target 目标
 * @param {string} type le或ge
 * @returns {number} idx 查找索引
 */
const bianrySearch = function (fruits, target, type = "le") {
  // 找到第一个大于等于target或小于等于target的水果位置
  let left = 0;
  let right = fruits.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (type === "le") {
      // 小于等于target
      if (fruits[mid][0] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 大于等于target
      if (fruits[mid][0] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return type === "le" ? right : left;
};


// [[0,5],[2,5],[3,6],[4,2],[5,3],[7,8],[8,4],[10,3],[12,5],[14,7],[15,4],[16,3],[18,5]]
// 9
// 8

// 11 ----
// 11 8.5 7 16 7 22
// 10 ----
// 10 8 6 15 6 23
// 9 ----
// 9 7.5 6 14 5 19
// 8 ----
// 8 6.5 5 12 3 20
// 7 ----
// 7 3 2 10 1 26
// 6 ----