/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-23 22:31:03                                                  *
 * @LastModifiedDate: 2022-07-23 22:38:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 ranks 和一个字符数组 suit 。
// 你有 5 张扑克牌，第 i 张牌大小为 ranks[i] ，花色为 suits[i] 。

// 下述是从好到坏你可能持有的 手牌类型 ：

// "Flush"：同花，五张相同花色的扑克牌。
// "Three of a Kind"：三条，有 3 张大小相同的扑克牌。
// "Pair"：对子，两张大小一样的扑克牌。
// "High Card"：高牌，五张大小互不相同的扑克牌。
// 请你返回一个字符串，表示给定的 5 张牌中，你能组成的 最好手牌类型 。

// 注意：返回的字符串 大小写 需与题目描述相同。

/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (isFlush(suits)) {
    return "Flush";
  }
  return whatRes(ranks);
};

var isFlush = (suits) => {
  let same = suits[0];
  for (let i = 1; i < 5; i++) {
    if (same !== suits[i]) {
      return false;
    }
  }
  return true;
};
var whatRes = (ranks) => {
  ranks.sort((a, b) => a - b);
  let max = 1;
  let cur = 1;
  for (let i = 1; i < 5; i++) {
    if (ranks[i] == ranks[i - 1]) {
      cur++;
      max = Math.max(cur, max);
    } else {
      cur = 1;
    }
  }
  if (max >= 3) {
    return "Three of a Kind";
  }
  if (max == 2) {
    return "Pair";
  }
  return "High Card";
};
