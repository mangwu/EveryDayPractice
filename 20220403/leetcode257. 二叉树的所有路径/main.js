/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-03 21:58:19                                                  *
 * @LastModifiedDate: 2022-04-03 22:29:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

// 叶子节点 是指没有子节点的节点。

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val.toString()];
  }
  const ans = [];
  const subAnsLeft = binaryTreePaths(root.left);
  const subAnsRight = binaryTreePaths(root.right);
  for (let i = 0; i < subAnsLeft.length; i++) {
    const arr = [root.val.toString()].concat(subAnsLeft[i].split("->"));
    ans.push(arr.join("->"));
  }
  for (let i = 0; i < subAnsRight.length; i++) {
    const arr = [root.val.toString()].concat(subAnsRight[i].split("->"));
    ans.push(arr.join("->"));
  }
  return ans;
};
