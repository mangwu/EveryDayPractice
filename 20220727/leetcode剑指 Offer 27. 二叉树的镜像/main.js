/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-27 15:28:40                                                  *
 * @LastModifiedDate: 2022-07-27 15:30:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

// 例如输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

  /**
   * Definition for a binary tree node.
   * function TreeNode(val) {
   *     this.val = val;
   *     this.left = this.right = null;
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  var mirrorTree = function (root) {
    // 就是翻转二叉树
    const dfs = (node) => {
      if (!node) {
        return;
      }
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      dfs(node.left);
      dfs(node.right);
    };
    dfs(root);
    return root;
  };
