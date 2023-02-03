/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-03 08:56:43                                                  *
 * @LastModifiedDate: 2023-02-03 10:07:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有两位极客玩家参与了一场「二叉树着色」的游戏。游戏中，给出二叉树的根节点 root，树上总共有 n 个节点，且 n 为奇数，其中每个节点上的值从 1 到 n 各不相同。

// 最开始时：

// 「一号」玩家从 [1, n] 中取一个值 x（1 <= x <= n）；
// 「二号」玩家也从 [1, n] 中取一个值 y（1 <= y <= n）且 y != x。
// 「一号」玩家给值为 x 的节点染上红色，而「二号」玩家给值为 y 的节点染上蓝色。

// 之后两位玩家轮流进行操作，「一号」玩家先手。每一回合，玩家选择一个被他染过色的节点，将所选节点一个 未着色 的邻节点（即左右子节点、或父节点）进行染色（「一号」玩家染红色，「二号」玩家染蓝色）。

// 如果（且仅在此种情况下）当前玩家无法找到这样的节点来染色时，其回合就会被跳过。

// 若两个玩家都没有可以染色的节点时，游戏结束。着色节点最多的那位玩家获得胜利 ✌️。

// 现在，假设你是「二号」玩家，根据所给出的输入，假如存在一个 y 值可以确保你赢得这场游戏，则返回 true ；若无法获胜，就请返回 false 。

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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
  // x可以将树分为三个部分：左节点部分，右节点部分，父节点部分
  // 而玩家2只能选择其中一个部分 着色节点最多的那位玩家获得胜利
  // 如果x没有父节点（x是根节点），二号节点就选择左右子树和大的哪一方
  /**
   * @description 深度遍历求和
   * @param {TreeNode} node 节点
   * @returns {number}
   */
  const dfs = (node) => {
    if (!node) return 0;
    let res = 1 + dfs(node.left) + dfs(node.right);
    return res;
  };
  // 选择x的父节点
  let xNode = null;
  const dfs2 = (node) => {
    if (!node) return;
    if (node.val === x) {
      xNode = node;
      return;
    }
    dfs2(node.left);
    dfs2(node.right);
  };
  dfs2(root); // 找到x选择的节点
  let leftNum = dfs(xNode.left);
  let rightNum = dfs(xNode.right);
  let parentNum = n - leftNum - rightNum - 1;
  if (
    parentNum > n - parentNum ||
    leftNum > n - leftNum ||
    rightNum > n - rightNum
  )
    return true;
  return false;
};
