/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-04-02 11:03:06                                                  *
 * @LastModifiedDate: 2024-04-02 11:22:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，请你找出所有可能含 n 个节点的 真二叉树 ，并以列表形式返回。答案中每棵树的每个节点都必须符合 Node.val == 0 。

// 答案的每个元素都是一棵真二叉树的根节点。你可以按 任意顺序 返回最终的真二叉树列表。

// 真二叉树 是一类二叉树，树中每个节点恰好有 0 或 2 个子节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  if (n % 2 === 0) return []; // 不存在偶数个节点的真二叉树
  const dfs = (num) => {
    const node = new TreeNode(0);
    if (num === 1) return [node];
    const ans = [];
    num--; // 当前子树根节点已经计算
    for (let i = 1; i < num; i += 2) {
      const leftArr = dfs(i);
      const rightArr = dfs(num - i);
      for (const leftNode of leftArr) {
        for (const rightNode of rightArr) {
          ans.push(new TreeNode(0, leftNode, rightNode));
        }
      }
    }
    return ans;
  };
  return dfs(n);
};
