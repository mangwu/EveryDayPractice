/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-19 16:49:34                                                  *
 * @LastModifiedDate: 2024-12-19 17:42:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 initialCurrency，表示初始货币类型，并且你一开始拥有 1.0 单位的 initialCurrency。

// 另给你四个数组，分别表示货币对（字符串）和汇率（实数）：

// pairs1[i] = [startCurrencyi, targetCurrencyi] 表示在 第 1 天，可以按照汇率 rates1[i] 将 startCurrencyi 转换为 targetCurrencyi。
// pairs2[i] = [startCurrencyi, targetCurrencyi] 表示在 第 2 天，可以按照汇率 rates2[i] 将 startCurrencyi 转换为 targetCurrencyi。
// 此外，每种 targetCurrency 都可以以汇率 1 / rate 转换回对应的 startCurrency。
// 你可以在 第 1 天 使用 rates1 进行任意次数的兑换（包括 0 次），然后在 第 2 天 使用 rates2 再进行任意次数的兑换（包括 0 次）。

// 返回在两天兑换后，最大可能拥有的 initialCurrency 的数量。

// 注意：汇率是有效的，并且第 1 天和第 2 天的汇率之间相互独立，不会产生矛盾。

/**
 * @param {string} initialCurrency
 * @param {string[][]} pairs1
 * @param {number[]} rates1
 * @param {string[][]} pairs2
 * @param {number[]} rates2
 * @return {number}
 */
var maxAmount = function (initialCurrency, pairs1, rates1, pairs2, rates2) {
  // 没有循环，两天的转换都是树结构
  const n = pairs1.length;
  const m = pairs2.length;
  // 构建第一天的树结构hash
  const hash1 = new Map();
  for (let i = 0; i < n; i++) {
    const [start, end] = pairs1[i];
    const startArr = hash1.get(start) || [];
    const endArr = hash1.get(end) || [];
    startArr.push([end, rates1[i]]);
    endArr.push([start, 1 / rates1[i]]);
    hash1.set(start, startArr);
    hash1.set(end, endArr);
  }
  // 构造第二天的树结构hash
  const hash2 = new Map();
  for (let i = 0; i < m; i++) {
    const [start, end] = pairs2[i];
    const startArr = hash2.get(start) || [];
    const endArr = hash2.get(end) || [];
    startArr.push([end, rates2[i]]);
    endArr.push([start, 1 / rates2[i]]);
    hash2.set(start, startArr);
    hash2.set(end, endArr);
  }
  // 第一天从initialCurency出发到各个的汇率
  const des = new Map();
  const dfs = (cur, pre, currency) => {
    const nxts = hash1.get(cur) || [];
    des.set(cur, currency);
    for (const [nxtNode, rate] of nxts) {
      if (nxtNode !== pre) dfs(nxtNode, cur, currency * rate);
    }
  };
  dfs(initialCurrency, "", 1);
  console.log(des);
  // 第二天遍历每个节点，回到initialCurrency，取汇率的最大值
  const bfs = (start, target, currency) => {
    if (start === target) return currency;
    let queue = [[start, currency]];
    const visited = new Set();
    visited.add(start);
    while (queue.length) {
      const nxt = [];
      for (const [node, curCurrency] of queue) {
        const nxts = hash2.get(node) || [];
        for (const [nxtNode, rate] of nxts) {
          if (visited.has(nxtNode)) continue;
          else {
            visited.add(nxtNode);
            if (nxtNode === target) return curCurrency * rate;
            nxt.push([nxtNode, curCurrency * rate]);
          }
        }
      }
      queue = nxt;
    }
    // 不能回到初始单位
    return -1;
  };
  let res = 0;
  for (const [node, currency] of des) {
    res = Math.max(res, bfs(node, initialCurrency, currency));
  }
  return res;
};

// target: EUR
// [["EUR","USD"],["USD","JPY"],["CHN","EUR"]]
// [2.0,3.0,8.0]

// CHN -> EUR -> USD -> JPY

// [["JPY","USD"],["USD","CHF"],["CHF","EUR"],["CHN","KSG"],["KSG","JPY"]]
// [4.0,5.0,6.0,10.0,10.0]

// CHN -> KSG -> JPY -> USD -> CHF -> EUR
//        MGH
