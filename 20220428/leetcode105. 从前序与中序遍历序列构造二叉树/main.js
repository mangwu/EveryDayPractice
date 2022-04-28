/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-28 15:23:47                                                  *
 * @LastModifiedDate: 2022-04-28 16:40:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历，
//  inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

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
  // preorder的第一个节点必是根节点
  const n = preorder.length;
  if (n == 0) {
    return null;
  }
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.set(inorder[i], i);
  }
  let root = new TreeNode(preorder[0]);
  let idx = hash.get(preorder[0]);
  if (idx > 0) {
    root.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx));
  }
  if (idx !== n - 1) {
    root.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1));
  }
  return root;
};

// [3,9,11,13,12,20,15,7]
// [13,11,9,12,3,15,20,7]

// 第一个3 3前有节点，说明下一个9为左节点
// 遍历9，9前也有节点，说明下一个11为9的左节点
// 遍历11, 11前也有节点，说明下一个13为11的左节点
// 遍历13, 13 前没有节点了，说明13没有子节点
// 遍历12，12前的节点是

// [3,9,20,11,12,15,7,13]

//         3
//     9     20
//  11   12 15  7
// 13
