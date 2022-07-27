/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-27 17:12:06                                                  *
 * @LastModifiedDate: 2022-07-27 20:54:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

// B是A的子结构， 即 A中有出现和B相同的结构和节点值。

// 例如:
// 给定的树 A:

//      3
//     / \
//    4   5
//   / \
//  1   2
// 给定的树 B：

//    4
//   /
//  1
// 返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!B || !A) {
    return false;
  }
  const initalVal = B.val;
  let ans = false;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    if (node.val == initalVal) {
      // 开始对比A，B
      ans = ans || dfsb(node, B);
    }
    dfs(node.left);
    dfs(node.right);
  };
  const dfsb = (node1, node2) => {
    if (!node2) {
      return true;
    }
    if (node1 && node2 && node1.val == node2.val) {
      return dfsb(node1.left, node2.left) && dfsb(node1.right, node2.right);
    }
    return false;
  };
  dfs(A);
  return ans;
};
