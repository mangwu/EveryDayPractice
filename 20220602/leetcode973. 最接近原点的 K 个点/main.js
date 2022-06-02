/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-02 13:58:30                                                  *
 * @LastModifiedDate: 2022-06-02 15:19:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点，并且是一个整数 k ，返回离原点 (0,0) 最近的 k 个点。

// 这里，平面上两点之间的距离是 欧几里德距离（ √(x1 - x2)2 + (y1 - y2)2 ）。

// 你可以按 任何顺序 返回答案。除了点坐标的顺序之外，答案 确保 是 唯一 的。

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - b[0] ** 2 - b[1] ** 2);
  return points.slice(0, k);
};

// 3 3 => 9 + 9 => 18
// 1 4 => 1 + 16 => 17  显然1 4更接近
// 0 5 => 0 + 25 => 25 没有3 3 接近

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // 可以使用快速选择排序，只排序需要的k个点
  // 随机快排如下
  const quickSort = (start, end) => {
    if (start >= end) {
      // 不需要排序
      return;
    }
    let left = start;
    let right = end;
    let random = Math.floor(Math.random() * (end - start + 1)) + start;
    // 随机值交换到第一位，作为被排序值
    [points[random], points[left]] = [points[left], points[random]];
    while (left < right) {
      // 找到第一个比points[start]大的值
      while (
        points[left][0] ** 2 + [points[left]][1] ** 2 <=
        points[start][0] ** 2 + [points[start]][1] ** 2
      ) {
        left++;
      }
      while (
        points[right][0] ** 2 + [points[right]][1] ** 2 >=
        points[start][0] ** 2 + [points[start]][1] ** 2
      ) {
        // 着地第一个比point[start]小的值
        right--;
      }
      if (
        points[right][0] ** 2 + [points[right]][1] ** 2 <
          points[left][0] ** 2 + [points[left]][1] ** 2 &&
        left < right
      ) {
        // 交换
        [points[left], points[right]] = [points[right], points[left]];
      }
    }
    // 交换到指定位置
    [points[start], points[left]] = [points[left], points[start]];
    quickSort(start, left - 1);
    quickSort(left + 1, end);
  };
  quickSort(0, points.length - 1);
  return points.slice(0, k);
};
