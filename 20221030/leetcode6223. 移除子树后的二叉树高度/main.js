/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-30 11:19:44                                                  *
 * @LastModifiedDate: 2022-11-01 23:32:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵 二叉树 的根节点 root ，树中有 n 个节点。每个节点都可以被分配一个从 1 到 n 且互不相同的值。另给你一个长度为 m 的数组 queries 。

// 你必须在树上执行 m 个 独立 的查询，其中第 i 个查询你需要执行以下操作：

// 从树中 移除 以 queries[i] 的值作为根节点的子树。题目所用测试用例保证 queries[i] 不 等于根节点的值。
// 返回一个长度为 m 的数组 answer ，其中 answer[i] 是执行第 i 个查询后树的高度。

// 注意：

// 查询之间是独立的，所以在每个查询执行后，树会回到其 初始 状态。
// 树的高度是从根到树中某个节点的 最长简单路径中的边数 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function (root, queries) {
  // 先求出所有节点的高度(root为)
  const hash = new Map();
  // 空节点默认为0
  hash.set(null, 0);
  const getHeight = (node) => {
    if (!node) {
      return 0;
    }
    hash.set(node, Math.max(getHeight(node.left), getHeight(node.right)) + 1);
    return hash.get(node);
  };
  getHeight(root);
  console.log(hash);
  // 树中的所有值 互不相同,所以可以使用一个数组记录每个节点值所在节点被删除后的树高度
  const res = [];
  const dfs = (node, depth, restHeight) => {
    // 在递归前其余部分的最大高度
    // depth是当前节点所在的深度
    if (!node) {
      return;
    }
    depth++;
    console.log(restHeight);
    res[node.val] = restHeight; // 删除当前节点后其余部分的最大高度
    dfs(node.left, depth, Math.max(restHeight, depth + hash.get(node.right)));
    dfs(node.right, depth, Math.max(restHeight, depth + hash.get(node.left)));
  };
  dfs(root, -1, 0);
  const n = queries.length;
  for (let i = 0; i < n; i++) {
    queries[i] = res[i];
  }
  return queries;
};
