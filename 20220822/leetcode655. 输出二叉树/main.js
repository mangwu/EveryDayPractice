/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-22 08:50:58                                                  *
 * @LastModifiedDate: 2022-08-22 09:52:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一棵二叉树的根节点 root ，请你构造一个下标从 0 开始、大小为 m x n 的字符串矩阵 res ，
// 用以表示树的 格式化布局 。构造此格式化布局矩阵需要遵循以下规则：

// 树的 高度 为 height ，矩阵的行数 m 应该等于 height + 1 。
// 矩阵的列数 n 应该等于 2height+1 - 1 。
// 根节点 需要放置在 顶行 的 正中间 ，对应位置为 res[0][(n-1)/2] 。
// 对于放置在矩阵中的每个节点，设对应位置为 res[r][c] ，将其左子节点放置在 res[r+1][c-2height-r-1] ，
// 右子节点放置在 res[r+1][c+2height-r-1] 。
// 继续这一过程，直到树中的所有节点都妥善放置。
// 任意空单元格都应该包含空字符串 "" 。
// 返回构造得到的矩阵 res 。

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
 * @return {string[][]}
 */
var printTree = function (root) {
  const getHeight = (node) => {
    if (!node) {
      return 0;
    }
    const leftHeight = getHeight(node.left) + 1;
    const rightHeight = getHeight(node.right) + 1;
    return Math.max(leftHeight, rightHeight);
  };
  let height = getHeight(root);
  const ans = new Array(height)
    .fill(0)
    .map((_v) => new Array(Math.pow(2, height) - 1).fill(""));
  // bfs
  let queue = [[root, [0, Math.pow(2, height - 1) - 1]]];
  while (queue.length > 0) {
    const nxt = [];
    for (const [node, idxs] of queue) {
      ans[idxs[0]][idxs[1]] = node.val.toString();
      if (node.left) {
        nxt.push([
          node.left,
          [idxs[0] + 1, idxs[1] - Math.pow(2, height - idxs[0] - 2)],
        ]);
      }
      if (node.right) {
        nxt.push([
          node.right,
          [idxs[0] + 1, idxs[1] + Math.pow(2, height - idxs[0] - 2)],
        ]);
      }
    }
    queue = nxt;
  }
  return ans;
};
