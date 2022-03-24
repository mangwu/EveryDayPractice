/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-24 09:12:50                                                  *
 * @LastModifiedDate: 2022-03-24 10:16:40                                      *
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
  // 左节点的值更小，右节点的值更大，左子树的所有值都比当前节点值小，右子树所有值都比当前节点大

  // 二叉搜索树的特性是，中序遍历得到的序列是递增的
  const stack = [];
  let ans = [0 - Number.MAX_SAFE_INTEGER];
  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 出栈
    const top = stack.pop();
    if (top.val <= ans[ans.length - 1]) {
      return false;
    }
    ans.push(top.val);
    root = top.right;
  }
  return true;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 递归法
  if (!root) {
    return true;
  }
  let ans = true;
  if (root.left) {
    if (root.left.val >= root.val) {
      return false;
    }
  }
  if (root.right) {
    if (root.right.val <= root.val) {
      return false;
    }
  }
  return ans && isValidBST(root.left) && isValidBST(root.right);
};
// 上述方式错误，未考虑总体判断

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 递归法
  return helper(root, -Infinity, Infinity);
};
const helper = (root, lower, upper) => {
  // 给出当前节点的上界和下界
  // 要保证左子树的所有值小于上界，右子树的所有值大于下界
  if (!root) {
    return true;
  }
  // 当前值要大于下界小于上界，否则返回false
  if (root.val <= lower || root.val >= upper) {
    return false;
  }
  return (
    helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
  );
};
