/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-22 08:44:52                                                  *
 * @LastModifiedDate: 2023-05-22 09:11:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你二叉树的根节点 root 和一个整数 limit ，请你同时删除树中所有 不足节点 ，并返回最终二叉树的根节点。

// 假如通过节点 node 的每种可能的 “根-叶” 路径上值的总和全都小于给定的 limit，则该节点被称之为 不足节点 ，需要被删除。

// 叶子节点，就是没有子节点的节点。

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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
  const header = new TreeNode(0, root);
  const dfs = (node, pre, parent, type) => {
    if (!node) {
      return null;
    }
    if (!node.left && !node.right) {
      // 叶子节点
      let cur = pre + node.val;
      if (cur < limit) {
        parent[type] = null;
        return null;
      }
      return true;
    }
    const resLeft = dfs(node.left, pre + node.val, node, "left");
    const resRigth = dfs(node.right, pre + node.val, node, "right");
    if (resLeft || resRigth) return true;
    if (resLeft === null && resRigth === null) {
      // 不理解这一步
      parent[type] = null;
      return null;
    }
    if (pre + node.val < limit) {
      parent[type] = null;
      return null;
    }
    return true;
  };
  dfs(root, 0, header, "left");
  return header.left;
};
