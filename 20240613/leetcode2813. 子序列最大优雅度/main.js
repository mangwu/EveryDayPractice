/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-13 09:37:57                                                  *
 * @LastModifiedDate: 2024-06-13 10:14:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的二维整数数组 items 和一个整数 k 。

// items[i] = [profiti, categoryi]，其中 profiti 和 categoryi 分别表示第 i 个项目的利润和类别。

// 现定义 items 的 子序列 的 优雅度 可以用 total_profit + distinct_categories2 计算，其中 total_profit 是子序列中所有项目的利润总和，distinct_categories 是所选子序列所含的所有类别中不同类别的数量。

// 你的任务是从 items 所有长度为 k 的子序列中，找出 最大优雅度 。

// 用整数形式表示并返回 items 中所有长度恰好为 k 的子序列的最大优雅度。

// 注意：数组的子序列是经由原数组删除一些元素（可能不删除）而产生的新数组，且删除不改变其余元素相对顺序。

/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function (items, k) {
  items.sort((a, b) => b[0] - a[0]);
  const n = items.length;
  let sum = 0;
  const hash = new Map();
  const stack = [];
  for (let i = 0; i < k; i++) {
    const [profit, category] = items[i];
    sum += profit;
    if (hash.has(category)) {
      hash.get(category).push(profit);
      stack.push(category); // 记录重复类别的递减利润
    } else {
      hash.set(category, [profit]);
    }
  }
  let ans = sum + Math.pow(hash.size, 2);
  for (let i = k; i < n; i++) {
    const [profit, category] = items[i];
    if (!hash.has(category) && stack.length) {
      // 新类别替换才有可能增大当前序列结果
      // 贪心：应该替换重复类别中，利润最小的
      // 如果没有重复类别，那么也不用替换，因为当前sum更大，但类别没增多
      const reCategory = stack.pop();
      const reProfit = hash.get(reCategory).pop();
      sum = sum + profit - reProfit;
      hash.set(category, [profit]);
      ans = Math.max(ans, sum + Math.pow(hash.size, 2));
    }
  }
  return ans;
};
