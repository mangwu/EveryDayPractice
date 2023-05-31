/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-31 08:51:18                                                  *
 * @LastModifiedDate: 2023-05-31 09:32:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 arr，考虑所有满足以下条件的二叉树：

// 每个节点都有 0 个或是 2 个子节点。
// 数组 arr 中的值与树的中序遍历中每个叶节点的值一一对应。
// 每个非叶节点的值等于其左子树和右子树中叶节点的最大值的乘积。
// 在所有这样的二叉树中，返回每个非叶节点的值的最小可能总和。这个和的值是一个 32 位整数。

// 如果一个节点有 0 个子节点，那么该节点为叶节点。

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  const n = arr.length;
  // 0 1 2 3 4 5
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0).map(() => new Array(n).fill(-1)));
  const dfs = (start, end) => {
    if (end - start === 1) {
      return 0;
    }
    let res = Infinity;
    for (let i = start + 1; i < end; i++) {
      if (dp[start][end][i] !== -1) {
        res = Math.min(res, dp[start][end][i]);
      } else {
        let left = Math.max.apply(null, arr.slice(start, i));
        let right = Math.max.apply(null, arr.slice(i, end));
        const curRes = left * right + dfs(start, i) + dfs(i, end);
        dp[start][end][i] = curRes;
        res = Math.min(res, curRes);
      }
    }
    return res;
  };
  return dfs(0, n);
};
//  0  1 2 3 4  5
//   [6,2,4,3,5]
//       30
//     6    20
//        8     15
//       2 4   3   5
