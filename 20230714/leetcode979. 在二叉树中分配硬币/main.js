/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-14 09:00:56                                                  *
 * @LastModifiedDate: 2023-07-14 11:03:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个有 N 个结点的二叉树的根结点 root，树中的每个结点上都对应有 node.val 枚硬币，并且总共有 N 枚硬币。

// 在一次移动中，我们可以选择两个相邻的结点，然后将一枚硬币从其中一个结点移动到另一个结点。(移动可以是从父结点到子结点，或者从子结点移动到父结点。)。

// 返回使每个结点上只有一枚硬币所需的移动次数。

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
var distributeCoins = function (root) {
  // dfs(node) 表示以node为根节点的子树，需要从父节点拿取数字的数量
  // 如果dfs(node) > 0:则从父节点需要拿取dfs(node)个，与父节点之间有dfs(node)次移动
  // 如果dfs(node) < 0:则需要给父节点|dfs(node)|个，与父节点之间有|dfs(node)|移动
  // 一个节点的左右子节点的dfs(left)和dfs(right)表示分别拿去或给予的个数
  let move = 0;
  const dfs = (node) => {
    let moveLeft = 0;
    let moveRight = 0;
    if (!node) return 0; // 不需要拿去或给予
    if (node.left) moveLeft = dfs(node.left);
    if (node.right) moveRight = dfs(node.right);
    move += Math.abs(moveLeft) + Math.abs(moveRight);
    // 如果moveLeft/Right为正数，则需要给予它们
    // 如果moveLeft/Right为负数，则子节点会反哺
    // 所以节点最终个数为 cur = node.val - moveLeft - moveRight
    // 因为节点需要保留一个，如果cur为正数，则可以反哺父节点cur-1个，体现在结果是就是-(cur-1)
    // 如果cur为负数，则可以从父节点拿取 -(cur - 1)个
    return 1 - node.val + moveLeft + moveRight;
  };
  dfs(root);
  return move
};
