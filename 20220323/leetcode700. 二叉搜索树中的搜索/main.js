/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-23 20:43:17                                                  *
 * @LastModifiedDate: 2022-03-23 20:55:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。

// 你需要在 BST 中找到节点值等于 val 的节点。
// 返回以该节点为根的子树。 如果节点不存在，则返回 null 。

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  if (root.val == val) {
    return root;
  }
  return searchBST(root.left, val) || searchBST(root.right, val);
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  // 层序遍历
  let queue = [root];
  while (queue.length > 0) {
    const nxt = [];
    for (const q of queue) {
      if (q.val == val) {
        return q;
      }
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    queue = nxt;
  }
  return null;
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // 迭代不使用额外空间
  while (root) {
    if (val == root.val) {
      return root;
    }
    // 二叉搜索树的特性是左边的值比右边的值都小
    root = val < root.val ? root.left : root.right;
  }
  return null;
};
