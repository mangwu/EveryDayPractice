/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-20 21:46:57                                                  *
 * @LastModifiedDate: 2023-05-21 00:21:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵以 root 为根的 二叉树 ，请你返回 任意 二叉搜索子树的最大键值和。

// 二叉搜索树的定义如下：

// 任意节点的左子树中的键值都 小于 此节点的键值。
// 任意节点的右子树中的键值都 大于 此节点的键值。
// 任意节点的左子树和右子树都是二叉搜索树。

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
 * @return {number}
 */
var maxSumBST = function (root) {
  let res = 0;
  const dfs = (node) => {
    if (!node) return [true, 0];
    const { left, right } = node;
    if (!left && !right) {
      res = Math.max(res, node.val);
      return [true, node.val];
    }
    if (!left) {
      const resRight = dfs(node.right);
      console.log(resRight);
      res = Math.max(res, resRight[1]);
      if (node.val < node.right.val && resRight[0]) {
        res = Math.max(res, resRight[1] + node.val);
        return [true, resRight[1] + node.val];
      }
      return resRight;
    }
    if (!right) {
      const resLeft = dfs(node.left);
      console.log(resLeft);
      res = Math.max(res, resLeft[1]);
      if (node.val > node.left.val && resLeft[0]) {
        res = Math.max(res, resLeft[1] + node.val);
        return [true, resLeft[1] + node.val];
      }
      return resLeft;
    }
    const resLeft = dfs(node.left);
    const resRight = dfs(node.right);
    res = Math.max(res, resRight[1], resLeft[1]);
    console.log(resLeft, resRight);
    if (
      node.val > node.left.val &&
      node.val < node.right.val &&
      resLeft[0] &&
      resRight[0]
    ) {
      res = Math.max(res, resLeft[0] + resRight[0] + node.val);
      return [true, resLeft[1] + resRight[1] + node.val];
    }
    return [false, Math.max(resLeft[1], resRight[1])];
  };
  const ans = dfs(root);
  console.log(ans, res);
  return Math.max(res, 0, ans[1]);
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
 * @return {number}
 */
var maxSumBST = function (root) {
  let res = 0;
  const dfs = (node, min, max) => {
    if (!node) return [true, 0];
    const { left, right } = node;
    if (!left && !right) {
      res = Math.max(res, node.val);
      return [node.val > min && node.val < max, node.val];
    }
    if (!left) {
      const resRight = dfs(node.right, Math.max(min, node.val), max);
      console.log(resRight, node);
      res = Math.max(res, resRight[1]);
      if (node.val < node.right.val && resRight[0]) {
        res = Math.max(res, resRight[1] + node.val);
        return [true, resRight[1] + node.val];
      }
      return resRight;
    }
    if (!right) {
      const resLeft = dfs(node.left, min, Math.min(max, node.val));
      console.log(resLeft, node);
      res = Math.max(res, resLeft[1]);
      if (node.val > node.left.val && resLeft[0]) {
        res = Math.max(res, resLeft[1] + node.val);
        return [true, resLeft[1] + node.val];
      }
      return resLeft;
    }
    const resLeft = dfs(node.left, min, Math.min(max, node.val));
    const resRight = dfs(node.right, Math.max(min, node.val), max);
    res = Math.max(res, resRight[1], resLeft[1]);
    console.log(resLeft, resRight, node);
    if (
      node.val > node.left.val &&
      node.val < node.right.val &&
      resLeft[0] &&
      resRight[0]
    ) {
      console.log("---");
      res = Math.max(res, resLeft[0] + resRight[0] + node.val);
      return [true, resLeft[1] + resRight[1] + node.val];
    }
    return [false, Math.max(resLeft[1], resRight[1])];
  };
  const ans = dfs(root, -Infinity, Infinity);
  console.log(ans, res);
  return Math.max(res, 0, ans[1]);
};
