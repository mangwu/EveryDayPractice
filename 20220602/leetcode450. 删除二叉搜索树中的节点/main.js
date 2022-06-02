/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-02 08:59:24                                                  *
 * @LastModifiedDate: 2022-06-02 10:05:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，
// 并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：

// 首先找到需要删除的节点；
// 如果找到了，删除它。

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) {
    return null;
  }
  // 找到指定节点后，使用其左节点或者右节点替代它
  if (root.val == key) {
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }
    // 右节点的最左边节点替换头节点
    let node = root.right;
    if (!node.left) {
      node.left = root.left;
      root.left = null;
      root.right = null;
      return node;
    }
    let pre = root;
    while (node.left) {
      pre = node;
      node = node.left;
    }
    root.val = node.val;
    pre.left = node.right;
    return root;
  }
  // 进行二分查找
  let pre = root;
  let node = root;
  while (node) {
    if (node.val > key) {
      pre = node;
      node = node.left;
    } else if (node.val < key) {
      pre = node;
      node = node.right;
    } else {
      // 找到了
      if (!node.left) {
        if (pre.left == node) {
          pre.left = node.right;
          node.right = null;
        } else {
          pre.right = node.right;
          node.right = null;
        }
        return root;
      }
      if (!node.right) {
        if (pre.left == node) {
          pre.left = node.left;
          node.left = null;
        } else {
          pre.right = node.left;
          node.left = null;
        }
        return root;
      }
      // 右节点的最左边节点替换头节点
      let n = node.right;
      if (!n.left) {
        if (pre.left == node) {
          pre.left = n;
          n.left = node.left;
          node.left = null;
          node.right = null;
        } else {
          pre.right = n;
          n.left = node.left;
          node.left = null;
          node.right = null;
        }
        return root;
      }
      let p = node;
      while (n.left) {
        p = n;
        n = n.left;
      }
      node.val = n.val;
      p.left = n.right;
      return root;
    }
  }
  // 没有删除值，默认返回root
  return root;
};
