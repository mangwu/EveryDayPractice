/*
 * @Author: mangwu                                                             *
 * @File: main3.js                                                             *
 * @Date: 2022-04-16 15:36:34                                                  *
 * @LastModifiedDate: 2022-04-16 16:35:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 欢迎各位勇者来到力扣城，本次试炼主题为「二叉搜索树染色」。

// 每位勇士面前设有一个二叉搜索树的模型，模型的根节点为 root，树上的各个节点值均不重复。初始时，所有节点均为蓝色。现在按顺序对这棵二叉树进行若干次操作， ops[i] = [type, x, y] 表示第 i 次操作为：

// type 等于 0 时，将节点值范围在 [x, y] 的节点均染蓝
// type 等于 1 时，将节点值范围在 [x, y] 的节点均染红
// 请返回完成所有染色后，该二叉树中红色节点的数量。

// 注意：

// 题目保证对于每个操作的 x、y 值定出现在二叉搜索树节点中

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[][]} ops
 * @return {number}
 */
var getNumber = function (root, ops) {
  // 先序遍历root获取数组
  const arr = [];
  const dfs = (root) => {
    if (!root) {
      return;
    }
    if (root.left) {
      dfs(root.left);
    }
    arr.push(root.val);
    if (root.right) {
      dfs(root.right);
    }
  };
  dfs(root);
  const hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    hash.set(arr[i], i + 1);
  }
  const red = [];
  // 计算出染红的区间
  for (const op of ops) {
    // 染红
    if (op[0] == 0) {
      if (red.length == 0) {
        red.push([op[1], op[2]]);
      } else {
        // 遍历red
        for (let i = 0; i < red.length; i++) {
          if (red[i][1] < op[1]) {
            if (i == red.length - 1) {
              red.push([op[1], op[2]]);
              break;
            }
            continue;
          }
          if (red[i][0] > op[2]) {
            // 在i前面添加
            red.splice(i, 0, [op[1], op[2]]);
            break;
          }
          if (op[1] >= red[i][0] && op[1] <= red[i][1]) {
            // 找到一个
            if (
              op[2] > red[i][1] &&
              (i == red.length - 1 || red[i + 1][0] > op[2])
            ) {
              red[i][1] = op[2];
              break;
            } else if (op[2] > red[i][1] && red[i + 1][0] <= op[2]) {
              red[i][1] = red[i + 1][1];
              red.splice(i + 1, 1);
              break;
            }
            break;
          }
          if (op[2] >= red[i][0] && op[1] <= red[i][1]) {
            // 找到一个
            red[i][0] = op[1];
            break;
          }
        }
      }
    } else {
      // 染蓝
      if (red.length == 0) {
        continue;
      } else {
        // 遍历red
        for (let i = 0; i < red.length; i++) {
          if (red[i][1] < op[1]) {
            continue;
          }
          if (red[i][0] > op[2]) {
            // 在i前面添加
            break;
          }
          if (op[1] >= red[i][0] && op[1] <= red[i][1]) {
            // 找到一个
            if (
              op[2] > red[i][1] &&
              (i == red.length - 1 || red[i + 1][0] > op[2])
            ) {
              red[i][1] = op[2];
              break;
            } else if (op[2] > red[i][1] && red[i + 1][0] <= op[2]) {
              red[i][1] = red[i + 1][1];
              red.splice(i + 1, 1);
              break;
            }
            break;
          }
          if (op[2] >= red[i][0] && op[1] <= red[i][1]) {
            // 找到一个
            red[i][0] = op[1];
            break;
          }
        }
      }
    }
  }
};
