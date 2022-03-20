/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-19 00:52:12                                                  *
 * @LastModifiedDate: 2022-03-19 20:43:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。

// 空节点则用一对空括号 "()" 表示。
// 而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。

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
 * @return {string}
 */
var tree2str = function (root) {
  // 递归解法
  if (root == null) {
    return "";
  }
  let ans =
    root.val +
    "(" +
    tree2str(root.left) +
    ")" +
    "(" +
    tree2str(root.right) +
    ")";
  return ans.replace("()", "");
};
// 上述写法错误，左右括号的有无取决于左右节点的有无

// 如果有左节点，没有右节点，则可以省略右节点，而如果没有左节点，有右节点则不可省略
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
  // 递归解法
  if (root == null) {
    return "";
  }
  if (root.left == null && root.right) {
    return root.val + "()" + "(" + tree2str(root.right) + ")";
  }
  if (root.left && root.right == null) {
    return root.val + "(" + tree2str(root.left) + ")";
  }
  if (root.left == null && root.right == null) {
    return root.val;
  }
  return (
    root.val +
    "(" +
    tree2str(root.left) +
    ")" +
    "(" +
    tree2str(root.right) +
    ")"
  );
};

/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
  if (root == null) {
    return "";
  }
};
