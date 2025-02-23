/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-23 23:16:27                                                  *
 * @LastModifiedDate: 2025-02-23 23:33:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const n = preorder.length;
  const dfs = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd) return null;
    if (preStart === preEnd) {
      return new TreeNode(preorder[preStart]);
    }
    const val = preorder[preStart];
    const root = new TreeNode(val);
    const idx = inorder.indexOf(val, inStart);
    const leftLen = idx - inStart;
    root.left = dfs(preStart + 1, preStart + leftLen, inStart, idx - 1);
    root.right = dfs(preStart + leftLen + 1, preEnd, idx + 1, inEnd);
    return root;
  };
  return dfs(0, n - 1, 0, n - 1);
};
