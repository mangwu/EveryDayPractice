/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-01 08:53:44                                                  *
 * @LastModifiedDate: 2024-08-01 15:32:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 「力扣挑战赛」心算项目的挑战比赛中，要求选手从 N 张卡牌中选出 cnt 张卡牌，若这 cnt 张卡牌数字总和为偶数，则选手成绩「有效」且得分为 cnt 张卡牌数字总和。 给定数组 cards 和 cnt，其中 cards[i] 表示第 i 张卡牌上的数字。 请帮参赛选手计算最大的有效得分。若不存在获取有效得分的卡牌方案，则返回 0。

/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function (cards, cnt) {
  // 将卡牌分离成奇数卡牌和偶数卡牌
  const odd = [0]; // 奇数前缀和
  const even = [0]; // 偶数前缀和
  cards.sort((a, b) => b - a);
  for (const card of cards) {
    if (card % 2 === 1) {
      odd.push(card + odd[odd.length - 1]);
    } else even.push(card + even[even.length - 1]);
  }
  let sum = 0;
  for (let i = 0; i < odd.length && i <= cnt; i += 2) {
    // i个奇数,cnt-i个偶数
    if (cnt - i < even.length) {
      sum = Math.max(sum, odd[i] + even[cnt - i]);
    }
  }
  return sum;
};

/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function (cards, cnt) {
  cards.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < cnt; i++) sum += cards[i];
  if (sum % 2 === 0) return sum;
  // 奇偶互换
  let res = 0;
  let lastOdd = cards.findLast((v, i) => i < cnt && v % 2 === 1);
  let firstEven = cards.find((v, i) => i >= cnt && v % 2 === 0);
  if (lastOdd !== undefined && firstEven !== undefined) {
    res = Math.max(res, sum + firstEven - lastOdd);
  }
  let lastEven = cards.findLast((v, i) => i < cnt && v % 2 === 0);
  let firstOdd = cards.find((v, i) => i >= cnt && v % 2 === 1);
  if (lastEven !== undefined && firstOdd !== undefined) {
    res = Math.max(res, sum + firstOdd - lastEven);
  }
  return res;
};
