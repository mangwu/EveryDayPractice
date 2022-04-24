/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-24 21:09:12                                                  *
 * @LastModifiedDate: 2022-04-24 21:41:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，citations 已经按照 升序排列 。计算并返回该研究者的 h 指数。

// h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。且其余的 n - h 篇论文每篇被引用次数 不超过 h 次。

// 提示：如果 h 有多种可能的值，h 指数 是其中最大的那个。

// 请你设计并实现对数时间复杂度的算法解决此问题。

/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function (citations) {
  // CITATIONS已经排好序，使用二分查找即可
  const n = citations.length;
  let left = 0;
  let right = n;
  // [left, right)
  while (left < right) {
    let mid = (left + right) >> 1;
    if (citations[mid] >= n - mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return n - left;
};
