/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-02 10:58:09                                                  *
 * @LastModifiedDate: 2022-11-02 11:27:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const nodes = [];
  const dfs = (node) => {
    if (!node) {
      return;
    }
    nodes.push(node);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  const n = nodes.length;
  for (let i = 0; i < n; i++) {
    nodes[i].right = nodes[i + 1] ? nodes[i + 1] : null;
    nodes[i].left = null;
  }
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // 迭代方式前序遍历使用栈
  const stack = [];
  // 保存每个节点
  const res = [];
  let node = root;
  while (node || stack.length) {
    while (node) {
      res.push(node);
      stack.push(node);
      node = node.left;
    }
    // 回溯
    node = stack.pop();
    node = node.right;
  }
  const n = res.length;
  for (let i = 0; i < n - 1; i++) {
    res[i].right = res[i + 1];
    res[i].left = null;
  }
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  
};
