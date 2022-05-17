/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-16 17:18:04                                                  *
 * @LastModifiedDate: 2022-05-17 09:19:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵二叉搜索树的 root ，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，
// 并且每个节点没有左子节点，只有一个右子节点。

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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  // 递归中序遍历
  const header = new TreeNode();
  let pre = header;
  const dfs = (root) => {
    if (!root) {
      return null;
    }
    dfs(root.left);
    // 结合后续节点
    pre.right = root;
    pre = root;
    pre.left = null;
    dfs(root.right);
  };
  dfs(root);
  return header.right;
};
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const stack = [];
  // 迭代
  let ans = null;
  let pre = null;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();
    if (pre) {
      pre.right = node;
      pre = node;
    } else {
      pre = node;
      ans = node;
    }
    root = node.right;
    node.left = null;
  }
  return ans;
};
