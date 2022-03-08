/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-07 18:59:12                                                  *
 * @LastModifiedDate: 2022-03-08 19:52:19                                      *
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
  for (let i = 2; i <= 10; i++) {
    hash.set(i.toString(), i);
  }
  const hash2 = new Map([
    [14, "A"],
    [13, "K"],
    [12, "Q"],
    [11, "J"],
  ]);
  // rank
  const rank = new Array(15).fill(0);
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
      const a = rank[10];
      if (a) {
        rank[10] = a.push(poker[2]);
      } else {
        rank[10] = [poker[2]];
      }
    }
  }
  // 遍历rank, 查看是否具有同花顺
  let isflush = false;
  let isTrueFlush = false;
  let i1 = 14;
  for (j = 2; i1 < 15 && j > 0 && i1 >= 2; i1--) {
    if (rank[i1] !== 0) {
      if (
        i1 - 4 >= 2 &&
        rank[i1 - 1] &&
        rank[i1 - 2] &&
        rank[i1 - 3] &&
        rank[i1 - 4]
      ) {
        isflush = true;
        if (rank[i1].length == 1) {
          const f = rank[i1][0];
          isTrueFlush =
            rank[i1 - 1].includes(f) &&
            rank[i1 - 2].includes(f) &&
            rank[i1 - 3].includes(f) &&
            rank[i1 - 4].includes(f);
        } else if (rank[i1 - 1].length == 1) {
          isTrueFlush =
            rank[i1 - 1].includes(f) &&
            rank[i1 - 2].includes(f) &&
            rank[i1 - 3].includes(f) &&
            rank[i1 - 4].includes(f);
        } else if (rank[i1 - 2].length == 1) {
          isTrueFlush =
            rank[i1 - 1].includes(f) &&
            rank[i1 - 2].includes(f) &&
            rank[i1 - 3].includes(f) &&
            rank[i1 - 4].includes(f);
        }
      }
      j--;
    }
    // 判断是否时同花顺
    if (isTrueFlush && isflush) {
      let ranks = [];
      for (let i = 0; i < 5; i++) {
        if (i1 - i > 10) {
          ranks.push(hash2.get(i1 + i));
        } else {
          ranks.push((i1 - i).toString());
        }
      }
      return { type: "straight-flush", ranks };
    } else if (isflush) {
      // 是伪同花顺
      let ranks = [];
      for (let i = 0; i < 5; i++) {
        if (i1 - i > 10) {
          ranks.push(hash2.get(i1 + i));
        } else {
          ranks.push((i1 - i).toString());
        }
      }
      return { type: "flush", ranks };
    }
  }
  // 四同阶牌,满屋，三张
  let isFourKind = false;
  let four;
  let last;
  let isFullhouse = false;
  let three1;
  let pair;
  let isThreeKind = false;
  let three2;
  let rest = [];
  let i2 = 14;
  let j;
  for (; i2 < 15 && i2 >= 2; i2--) {
    if (rank[i2] !== 0) {
      // 寻找last
      if (rank[i2].length !== 4 && !last) {
        last = i2;
      }
      if (rank[i2].length == 4) {
        isFourKind = true;
        four = i2;
        break;
      }
      // 寻找三个
      if (rank[i2].length == 2 && !pair) {
        pair == i2;
      }
      if (rank[i2].length == 3 && !isThreeKind) {
        isThreeKind = true;
        three2 = i2;
        three1 = i2;
      }
      // 寻找rest
      if ((rank[i2].length !== 3 || isFullhouse) && rest.length <= 2) {
        rest.push(i2);
      }
      // 判断满屋
      if (pair && isThreeKind) {
        isFullhouse = true;
      }
    }
  }
  if (isFourKind) {
    let ranks = [];
    if (four > 10) {
      ranks.push(hash2.get(four));
    } else {
      ranks.push(four.toString());
    }
    if (last > 10) {
      ranks.push(hash2.get(last));
    } else {
      ranks.push(last.toString());
    }
    return { type: "four-of-a-kind", ranks };
  } else if (isFullhouse) {
    let ranks = [
      three1 > 10 ? hash2.get(three1) : three1.toString(),
      pair > 10 ? hash2.get(pair) : pair.toString(),
    ];
    return { type: "full house", ranks };
  } else if (isThreeKind) {
    let ranks = [three2 > 10 ? hash2.get(three2) : three2.toString()];
    rest.map((v) => ranks.push(v > 10 ? hash2.get(v) : v.toString()));
  }
  // 直线
  // 两对，一对
  // return { type: "TODO", ranks: [] };
}
