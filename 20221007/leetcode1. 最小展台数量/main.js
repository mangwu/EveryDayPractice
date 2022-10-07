/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-07 15:00:31                                                  *
 * @LastModifiedDate: 2022-10-07 15:05:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 力扣嘉年华将举办一系列展览活动，后勤部将负责为每场展览提供所需要的展台。
// 已知后勤部得到了一份需求清单，记录了近期展览所需要的展台类型，
// demand[i][j] 表示第 i 天展览时第 j 个展台的类型。
// 在满足每一天展台需求的基础上，请返回后勤部需要准备的 最小 展台数量。

// 注意：

// 同一展台在不同天中可以重复使用。

/**
 * @param {string[]} demand
 * @return {number}
 */
var minNumBooths = function (demand) {
  let ans = 0;
  const hash = new Map();
  for (const d of demand) {
    const curHash = new Map();
    for (const ch of d) {
      curHash.has(ch)
        ? curHash.set(ch, curHash.get(ch) + 1)
        : curHash.set(ch, 1);
    }
    for (const [key, value] of curHash) {
      if (hash.has(key) && hash.get(key) >= value) {
        continue;
      } else {
        hash.set(key, value);
      }
    }
  }
  for (const [_key, value] of hash) {
    ans += value;
  }
  return ans;
};
