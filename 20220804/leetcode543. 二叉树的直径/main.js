/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-04 09:12:42                                                  *
 * @LastModifiedDate: 2022-08-04 09:17:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

//

// 示例 :
// 给定二叉树

//           1
//          / \
//         2   3
//        / \
//       4   5
// 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0;
  // 一个节点的左右两个子树高度之和
  const getHeight = (node) => {
    if (!node) {
      return 0;
    }
    const left = getHeight(node.left) + 1;
    const right = getHeight(node.right) + 1;
    ans = Math.max(left + right, ans);
    return Math.max(left, right);
  };
  getHeight(root);
  return ans;
};
