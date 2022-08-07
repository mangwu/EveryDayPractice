/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-07 15:50:47                                                  *
 * @LastModifiedDate: 2022-08-07 16:31:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 前序 中左右
  // 中序 左中右
  const n = preorder.length;
  if (n == 0) {
    return null;
  }
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.set(inorder[i], i);
  }
  const root = new TreeNode(preorder[0]);
  const dfs = (node, start, end, idx) => {
    if (start == end) {
      node.val = preorder[start];
      return;
    }
    const mid = hash.get(preorder[idx]);
    if (mid - 1 >= start) {
      node.left = new TreeNode();
      dfs(node.left, start, mid - 1, idx + 1);
    }
    if (mid + 1 <= end) {
      node.right = new TreeNode();
      dfs(node.right, mid + 1, end, idx + mid - start + 1);
    }
  };
  dfs(root, 0, n - 1, 0);
  return root;
};
