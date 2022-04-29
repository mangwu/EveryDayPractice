/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-29 14:48:58                                                  *
 * @LastModifiedDate: 2022-04-29 15:13:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，

// 请你构造并返回这颗 二叉树 。
// inorder 和 postorder 都由 不同 的值组成
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // postorder的最后一个根节点
  const len = inorder.length;
  if (len == 0) {
    return 0;
  }
  if (len == 1) {
    return new TreeNode(inorder[0]);
  }
  let idx = 0;
  for (; idx < len; i++) {
    if (inorder[i] == postorder[len - 1]) {
      break;
    }
  }
  const root = new TreeNode(postorder[len - 1]);
  root.right = buildTree(inorder.slice(idx + 1), postorder.slice(idx, len - 1));
  root.left = buildTree(inorder.slice(0, idx), postorder.slice(0, idx));
  return root;
};

// 左中右
// 左右中
