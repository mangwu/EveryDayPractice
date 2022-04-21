/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-21 15:11:35                                                  *
 * @LastModifiedDate: 2022-04-21 15:21:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个由一些 闭区间 组成的列表，firstList 和 secondList ，
// 其中 firstList[i] = [starti, endi] 而 secondList[j] = [startj, endj] 。
// 每个区间列表都是成对 不相交 的，并且 已经排序 。

// 返回这 两个区间列表的交集 。

// 形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b 。

// 两个闭区间的 交集 是一组实数，要么为空集，要么为闭区间。例如，[1, 3] 和 [2, 4] 的交集为 [2, 3] 。
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  // 双指针
  const ans = [];
  let p1 = 0;
  let p2 = 0;
  const len1 = firstList.length;
  const len2 = secondList.length;
  while (p1 < len1 && p2 < len2) {
    // 判断是否有交集
    if (firstList[p1][1] < secondList[p2][0]) {
      // 没有交集，p1完全在p2之前
      p1++;
      continue;
    }
    if (firstList[p1][0] > secondList[p2][1]) {
      // 没有交集，p2完全在p1之前
      p2++;
      continue;
    }
    // 剩下的情况就是有交集的情况
    // 左边界取大值，右边界取小值
    ans.push([
      Math.max(firstList[p1][0], secondList[p2][0]),
      Math.min(firstList[p1][1], secondList[p2][1]),
    ]);
    if (firstList[p1][1] > secondList[p2][1]) {
      // 右边界大小决定p1和p2谁增加
      p2++;
    } else if (firstList[p1][1] == secondList[p2][1]) {
      p1++;
      p2++;
    } else {
      // p2的区间右边界大
      p1++;
    }
  }
  return ans;
};
