/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-06 08:43:10                                                  *
 * @LastModifiedDate: 2023-09-06 09:07:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个有根节点 root 的二叉树，返回它 最深的叶节点的最近公共祖先 。

// 回想一下：

// 叶节点 是二叉树中没有子节点的节点
// 树的根节点的 深度 为 0，如果某一节点的深度为 d，那它的子节点的深度就是 d+1
// 如果我们假定 A 是一组节点 S 的 最近公共祖先，S 中的每个节点都在以 A 为根节点的子树中，且 A 的深度达到此条件下可能的最大值。

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
var lcaDeepestLeaves = function (root) {
  const dfs = (node) => {
    if (!node) return [0, null];
    const resLeft = dfs(node.left);
    const resRight = dfs(node.right);
    if (resLeft[0] === resRight[0]) return [resLeft[0] + 1, node];
    else if (resLeft[0] > resRight[0]) return [resLeft[0] + 1, resLeft[1]];
    else return [resRight[0] + 1, resRight[1]];
  };
  return dfs(root)[1];
};
