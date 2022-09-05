/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-05 09:00:44                                                  *
 * @LastModifiedDate: 2022-09-05 10:05:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一棵二叉树 root，返回所有重复的子树。

// 对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

// 如果两棵树具有相同的结构和相同的结点值，则它们是重复的。

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const hash = new Map();
  const ans = [];
  const dfs = (node) => {
    if (!node) {
      // 表示空值
      return "";
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    const res = node.val + "," + left + "," + right;
    if (hash.has(res)) {
      const num = hash.get(res);
      if (num == 1) {
        ans.push(node);
      }
      hash.set(res, num + 1);
    } else {
      hash.set(res, 1);
    }
    return res;
  };
  dfs(root);
  console.log(hash);
  return ans;
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  // 序号
  const hash = new Map();
  let idx = 0;
  const ans = [];
  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    const res = node.val + "," + left + "," + right;
    if (hash.has(res)) {
      const same = hash.get(res);
      if (same[0] == 1) {
        ans.push(node);
      }
      same[0]++;
      return same[1];
    } else {
      const newTri = [1, ++idx];
      hash.set(res, newTri);
      return idx;
    }
  };
  dfs(root);
  return ans;
};
