/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-18 08:40:07                                                  *
 * @LastModifiedDate: 2023-04-19 08:36:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定二叉树的根节点 root，找出存在于 不同 节点 A 和 B 之间的最大值 V，其中 V = |A.val - B.val|，且 A 是 B 的祖先。

// （如果 A 的任何子节点之一为 B，或者 A 的任何子节点是 B 的祖先，那么我们认为 A 是 B 的祖先）

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
var maxAncestorDiff = function (root) {
  // 也就是计算任意路径的最大值和最小值之差
  // 因为节点个数最多为5000，也就是说最多大约有2048 + 452条路径
  // 计算每条完整路径的最大和最小值
  const path = [root.val];
  let res = 0;
  const dfs = (node) => {
    if (!node.left && !node.right) {
      const max = Math.max.apply(null, path);
      const min = Math.min.apply(null, path);
      res = Math.max(max - min, res);
      return;
    }
    if (node.left) {
      path.push(node.left.val);
      dfs(node.left);
      path.pop(node.left.val);
    }
    if (node.right) {
      path.push(node.right.val);
      dfs(node.right);
      path.pop(node.right.val);
    }
  };
  dfs(root);
  return res;
};

const { randomArr } = require("../../publicFunc/random/random");

const rArr = randomArr(5000, 1, 5000);
console.log(rArr);

