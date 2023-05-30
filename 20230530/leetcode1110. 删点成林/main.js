/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-30 08:47:34                                                  *
 * @LastModifiedDate: 2023-05-30 09:09:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出二叉树的根节点 root，树上每个节点都有一个不同的值。

// 如果节点值在 to_delete 中出现，我们就把该节点从树上删去，最后得到一个森林（一些不相交的树构成的集合）。

// 返回森林中的每棵树。你可以按任意顺序组织答案。

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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const res = [];
  const set = new Set(to_delete);
  const dfs = (node, isRoot, parent = null) => {
    if (!node) {
      return;
    }
    // 要删除该节点
    if (set.has(node.val)) {
      if (parent) {
        if (parent.left === node) {
          parent.left = null;
        }
        if (parent.right === node) {
          parent.right = null;
        }
      }
      const { left, right } = node;
      node.left = null; // 删除
      node.right = null; // 删除
      dfs(left, true);
      dfs(right, true);
    } else {
      // 是需要记录的根节点
      if (isRoot) {
        res.push(node);
      }
      dfs(node.left, false, node);
      dfs(node.right, false, node);
    }
  };
  dfs(root, true);
  return res;
};
