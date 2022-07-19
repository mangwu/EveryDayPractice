/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-19 13:36:06                                                  *
 * @LastModifiedDate: 2022-07-19 13:49:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 包装左子树的值都小于root.val,右子树的值都大于root.val
  const dfs = (root, min, max) => {
    if (!root) {
      return true;
    }
    if (root.val >= max || root.val <= min) {
      return false;
    }
    return (
      dfs(root.left, min, Math.min(max, root.val)) &&
      dfs(root.right, Math.max(min, root.val), max)
    );
  };
  return dfs(root, -Infinity, Infinity);
};
