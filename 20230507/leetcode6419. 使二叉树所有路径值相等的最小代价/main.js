/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-07 11:32:59                                                  *
 * @LastModifiedDate: 2023-05-07 12:43:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个整数 n 表示一棵 满二叉树 里面节点的数目，节点编号从 1 到 n 。根节点编号为 1 ，树中每个非叶子节点 i 都有两个孩子，分别是左孩子 2 * i 和右孩子 2 * i + 1 。

// 树中每个节点都有一个值，用下标从 0 开始、长度为 n 的整数数组 cost 表示，其中 cost[i] 是第 i + 1 个节点的值。每次操作，你可以将树中 任意 节点的值 增加 1 。你可以执行操作 任意 次。

// 你的目标是让根到每一个 叶子结点 的路径值相等。请你返回 最少 需要执行增加操作多少次。

// 注意：

// 满二叉树 指的是一棵树，它满足树中除了叶子节点外每个节点都恰好有 2 个节点，且所有叶子节点距离根节点距离相同。
// 路径值 指的是路径上所有节点的值之和。

/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function (n, cost) {
  let cur = 2;
  let idx = 1;
  let ans = 0;
  while (idx < n) {
    let curMax = cost[idx];
    let curSum = 0;
    for (let i = idx; i < idx + cur; i++) {
      curMax = Math.max(curMax, cost[i]);
      curSum += cost[i];
    }
    ans += curMax * cur - curSum;
    idx = idx + cur;
    cur *= 2;
  }
  // 并不是每层值相同才成立
  return ans;
};

// 15
// [764,1460,2664,764,2725,4556,5305,8829,5064,5929,7660,6321,4830,7055,3761]

// 764
// 1460 2664
// 764  2725 4556 5305
// 8829 5064 5929 7660 6321 4830 7055 37611

