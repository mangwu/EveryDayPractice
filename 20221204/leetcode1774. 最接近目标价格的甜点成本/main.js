/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-04 21:17:44                                                  *
 * @LastModifiedDate: 2022-12-04 22:08:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你打算做甜点，现在需要购买配料。目前共有 n 种冰激凌基料和 m 种配料可供选购。而制作甜点需要遵循以下几条规则：

// 必须选择 一种 冰激凌基料。
// 可以添加 一种或多种 配料，也可以不添加任何配料。
// 每种类型的配料 最多两份 。
// 给你以下三个输入：

// baseCosts ，一个长度为 n 的整数数组，其中每个 baseCosts[i] 表示第 i 种冰激凌基料的价格。
// toppingCosts，一个长度为 m 的整数数组，其中每个 toppingCosts[i] 表示 一份 第 i 种冰激凌配料的价格。
// target ，一个整数，表示你制作甜点的目标价格。
// 你希望自己做的甜点总成本尽可能接近目标价格 target 。

// 返回最接近 target 的甜点成本。如果有多种方案，返回 成本相对较低 的一种。

/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  if (baseCosts.indexOf(target) !== -1) {
    return target;
  }
  baseCosts = [...new Set(baseCosts)];
  toppingCosts = toppingCosts.filter((v) => v < 2 * target);
  toppingCosts.sort((a, b) => a - b);
  const n = toppingCosts.length;
  let ans = baseCosts[0];
  const dfs = (sum, i) => {
    const cur = Math.abs(sum - target);
    const pre = Math.abs(target - ans);
    if (sum > target && cur >= pre) {
      return;
    }
    if (cur < pre) {
      ans = sum;
    } else if (cur == pre) {
      ans = Math.min(ans, sum);
    }
    if (i === n) {
      return;
    }
    dfs(sum, i + 1);
    dfs(sum + toppingCosts[i], i + 1);
    dfs(sum + 2 * toppingCosts[i], i + 1);
  };
  for (const c of baseCosts) {
    dfs(c, 0);
    if (ans === target) {
      return target;
    }
  }
  return ans;
};
