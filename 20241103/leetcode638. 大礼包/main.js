/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-03 22:48:18                                                  *
 * @LastModifiedDate: 2024-11-03 23:56:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在 LeetCode 商店中， 有 n 件在售的物品。每件物品都有对应的价格。然而，也有一些大礼包，每个大礼包以优惠的价格捆绑销售一组物品。

// 给你一个整数数组 price 表示物品价格，其中 price[i] 是第 i 件物品的价格。另有一个整数数组 needs 表示购物清单，其中 needs[i] 是需要购买第 i 件物品的数量。

// 还有一个数组 special 表示大礼包，special[i] 的长度为 n + 1 ，其中 special[i][j] 表示第 i 个大礼包中内含第 j 件物品的数量，且 special[i][n] （也就是数组中的最后一个整数）为第 i 个大礼包的价格。

// 返回 确切 满足购物清单所需花费的最低价格，你可以充分利用大礼包的优惠活动。你不能购买超出购物清单指定数量的物品，即使那样会降低整体价格。任意大礼包可无限次购买。

/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  const n = price.length;
  // 过滤掉不优惠的大礼包
  const goodSpecial = special.filter((v) => {
    let singlePrice = 0;
    let specialPrice = v[n];
    for (let i = 0; i < n; i++) singlePrice += v[i] * price[i];
    return specialPrice < singlePrice;
  });
  const memo = new Map();
  const dfs = (curNeeds) => {
    const key = curNeeds.join(",");
    if (memo.has(key)) return memo.get(key);
    let minPrice = 0;
    // 不使用大礼包当前的价格
    for (let i = 0; i < n; i++) minPrice += curNeeds[i] * price[i];
    // 购买大礼包
    for (const curSpecial of goodSpecial) {
      const specialPrice = curSpecial[n];
      const nxtNeeds = [];
      for (let i = 0; i < n; i++) {
        if (curSpecial[i] > curNeeds[i]) break; // 不能超额购买
        nxtNeeds.push(curNeeds[i] - curSpecial[i]);
      }
      if (nxtNeeds.length === n) {
        // 可以购买
        minPrice = Math.min(minPrice, dfs(nxtNeeds) + specialPrice);
      }
    }
    memo.set(key, minPrice);
    return minPrice;
  };
  return dfs(needs);
};
