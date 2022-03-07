/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-07 18:59:12                                                  *
 * @LastModifiedDate: 2022-03-07 19:43:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// A最大，2最小
// A > K > Q > J > 10 ... > 2

// 假设J == 11 Q == 12 K == 13 A == 14就可以确定最大和最小牌
/**
 * @description 德州扑克，获取最佳手牌
 * @param {Array} holeCards 洞牌
 * @param {Array} communityCards 发牌
 * @returns {Object}
 */
function hand(holeCards, communityCards) {
  const hash = new Map([
    ["A", 14],
    ["K", 13],
    ["Q", 12],
    ["J", 11],
  ]);
  for (let i = 2; i < 10; i++) {
    hash.set(i.toString(), i);
  }
  // rank
  const rank = [];
  const all = holeCards.concat(communityCards);
  // 遍历all
  for (const poker of all) {
    if (poker.length == 2) {
      // 不是10
      const a = rank[hash.get(poker[0])];
      if (a) {
        rank[hash.get(poker[0])] = a.push(poker[1]);
      } else {
        rank[hash.get(poker[0])] = [poker[0]];
      }
    } else {
      // 是10
      const a = rank[hash.get(poker.substring(0, 2))];
      if (a) {
        rank[10] = a.push(poker[2]);
      } else {
        rank[10] = [poker[2]];
      }
    }
  }

  return { type: "TODO", ranks: [] };
}
