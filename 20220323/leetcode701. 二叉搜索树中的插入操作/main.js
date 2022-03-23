/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-23 20:57:20                                                  *
 * @LastModifiedDate: 2022-03-23 21:19:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定二叉搜索树（BST）的根节点 root 和要插入树中的值 value ，将值插入二叉搜索树。
// 返回插入后二叉搜索树的根节点。 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。

// 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。
// 你可以返回 任意有效的结果 。

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  let node = root;
  let pre = null;
  while (node) {
    if (node.val > val) {
      pre = node;
      node = node.left;
    } else {
      pre = node;
      node = node.right;
    }
  }
  if (pre.val > val) {
    pre.left = new TreeNode(val);
  } else {
    pre.right = new TreeNode(val);
  }
  return root;
};
// 可以不用pre保存上一个记录，直接判断left或者right是否为空
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  let node = root;
  while (node) {
    if (node.val > val) {
      if (node.left) {
        node = node.left;
      } else {
        node.left = new TreeNode(val);
        break;
      }
    } else {
      if (node.right) {
        node = node.right;
      } else {
        node.right = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};
