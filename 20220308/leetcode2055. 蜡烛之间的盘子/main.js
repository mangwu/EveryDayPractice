/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-08 08:44:41                                                  *
 * @LastModifiedDate: 2022-03-08 10:00:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长桌子，桌子上盘子和蜡烛排成一列。
// 给你一个下标从 0 开始的字符串 s ，它只包含字符 '*' 和 '|' ，其中 '*' 表示一个 盘子 ，'|' 表示一支 蜡烛 。

// 同时给你一个下标从 0 开始的二维整数数组 queries ，
// 其中 queries[i] = [lefti, righti] 表示 子字符串 s[lefti...righti] （包含左右端点的字符）。
// 对于每个查询，你需要找到 子字符串中 在 两支蜡烛之间 的盘子的 数目 。
// 如果一个盘子在 子字符串中 左边和右边 都 至少有一支蜡烛，那么这个盘子满足在 两支蜡烛之间 。

// 比方说，s = "||**||**|*" ，查询 [3, 8] ，表示的是子字符串 "*||**|" 。
// 子字符串中在两支蜡烛之间的盘子数目为 2 ，子字符串中右边两个盘子在它们左边和右边 都 至少有一支蜡烛。
// 请你返回一个整数数组 answer ，其中 answer[i] 是第 i 个查询的答案。

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  // 关键在于蜡烛
  // 通过queries中的元素需要迅速得出其中包含的蜡烛，这样就能得出答案
  // 首先需要遍历一遍s，构建一个能快速取得范围内的蜡烛的数据结构
  // 使用数组记录蜡烛的位置
  // 再遍历一遍queries，然后通过二分查找queries两侧对应的蜡烛索引
  // 再通过这两个蜡烛索引计算盘子数量即可
  // 保存s中的蜡烛索引
  const candles = [];
  const lens = s.length;
  for (let i = 0; i < lens; i++) {
    if (s[i] == "|") {
      candles.push(i);
    }
  }
  // console.log(candles);
  const lenq = queries.length;
  const ans = [];
  // 特殊情况判断
  if (candles.length <= 1) {
    return new Array(lenq).fill(0);
  }
  // 遍历queries
  for (const q of queries) {
    // 二分查找q[0]和q[1]
    let left = binarySearch(candles, q[0]);
    let right = binarySearch(candles, q[1], false);
    console.log(left, right);
    // 获取中间盘子数量
    if (left > right) {
      ans.push(0);
      continue;
    }
    let plates = candles[right] - candles[left] - 1 - (right - left - 1);
    ans.push(plates);
  }
  return ans;
};

const binarySearch = (arr, target, isLeft = true) => {
  // 范围[0, len - 1]
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      // [left, mid - 1]
      right = mid - 1;
    } else {
      // [mid + 1, right]
      left = mid + 1;
    }
  }
  // console.log(left, right);
  return isLeft ? left : right;
};

// const a = [1, 3, 7, 9, 12];

// console.log(binarySearch(a, 11));

platesBetweenCandles("***|**|*****|**||**|*", [
  [1, 17],
  [4, 5],
  [14, 17],
  [5, 11],
  [15, 16],
]);
