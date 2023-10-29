/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-29 22:28:09                                                  *
 * @LastModifiedDate: 2023-10-29 23:07:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。

// 根据维基百科上 h 指数的定义：h 代表“高引用次数” ，一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，并且每篇论文 至少 被引用 h 次。如果 h 有多种可能的值，h 指数 是其中最大的那个。

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let res = 0;
  citations.sort((a, b) => a - b);
  const n = citations.length;
  let j = n - 1;
  for (let i = n; i >= 1; i--) {
    // h指数是否是i，至少发表了i篇论文，且其中至少每篇至少被引用i次
    while (j >= 0 && citations[j] >= i) {
      j--;
    }
    // 有 n - j - 1个论文是被至少引用i次的
    if (n - j - 1 >= i) return i;
  }
  return res;
};
