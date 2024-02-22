/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-22 20:37:41                                                  *
 * @LastModifiedDate: 2024-02-22 21:07:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个整数数组，preorder 和 postorder ，其中 preorder 是一个具有 无重复 值的二叉树的前序遍历，postorder 是同一棵树的后序遍历，重构并返回二叉树。

// 如果存在多个答案，您可以返回其中 任何 一个。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const n = postorder.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.set(postorder[i], i);
  }
  const dfs = (preLeft, preRight, postLeft, postRight) => {
    if (preLeft > preRight) return null;
    const root = new TreeNode(preorder[preLeft]);
    if (preLeft === preRight) return root;
    let leftRootIdx = hash.get(preorder[preLeft + 1]);
    const leftNodeNum = leftRootIdx - postLeft + 1;
    root.left = dfs(preLeft + 1, preLeft + leftNodeNum, postLeft, leftRootIdx);
    root.right = dfs(
      preLeft + leftNodeNum + 1,
      preRight,
      leftRootIdx + 1,
      postRight - 1
    );
    return root;
  };
  return dfs(0, n - 1, 0, n - 1);
};
