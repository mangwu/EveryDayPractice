/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-20 01:46:49                                                  *
 * @LastModifiedDate: 2022-03-20 03:17:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 左中右的节点顺序
  if (!root) {
    return [];
  }
  return inorderTraversal(root.left)
    .concat(root.val)
    .concat(inorderTraversal(root.right));
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 迭代法
  if (!root) {
    return [];
  }
  const stack = [root];
  const set = new Set();
  const set2 = new Set();
  set.add(root);
  const ans = [];
  let isPush = false;
  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    isPush = false;
    if (top.left && !set.has(top.left)) {
      stack.push(top.left);
      set.add(top.left);
      isPush = true;
    } else if (top.right && !set.has(top.right)) {
      stack.push(top.right);
      set.add(top.right);
      isPush = true;
      // 这个时候push 的是中间节点
      ans.push(top.val);
      set2.add(top);
    }
    if (!isPush) {
      // 没有push，回溯
      if (!set2.has(top)) {
        ans.push(top.val);
      }
      stack.pop();
    }
  }
  return ans;
};

// 不使用访问记录的迭代
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 迭代法
  if (!root) {
    return [];
  }
  const stack = [];
  const ans = [];
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const top = stack[stack.length - 1];
    ans.push(top.val);
    stack.pop();
    root = top.right;
  }
};
