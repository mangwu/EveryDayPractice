/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-16 09:53:15                                                  *
 * @LastModifiedDate: 2022-05-16 13:38:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。

// 如果指定节点没有对应的“下一个”节点，则返回null

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  // 中序遍历下一个节点
  const res = [];
  const dfs = (root) => {
    if (!root) {
      return null;
    }
    dfs(root.left);
    res.push(root);
    dfs(root.right);
  };
  dfs(root);
  for (let i = 0; i < res.length; i++) {
    if (res[i] == p) {
      return res[i + 1] ? res[i + 1] : null;
    }
  }
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  // 迭代法 也需要一个栈来保存，不过可以在遍历中通过比较获得结果
  const stack = [];
  let node = root;
  let hasP = false; // 是否找到了p
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    // 当前的中序遍历结果节点就是node
    node = stack.pop();
    if (hasP) {
      return node;
    } else if (p == node) {
      hasP = true;
    }
    node = node.right;
  }
  // 最后一个节点不会被遍历到
  return null;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  // 利用二叉搜索数的特性判断p的位置
  // 二叉搜索树的中序遍历结果就是根据大小排序后的结果
  let next = null;
  while (root) {
    if (p.val < root.val) {
      next = root;
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return next;
};
