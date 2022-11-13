/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-13 20:25:07                                                  *
 * @LastModifiedDate: 2022-11-13 21:22:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 值互不相同 的二叉树的根节点 root 。

// 在一步操作中，你可以选择 同一层 上任意两个节点，交换这两个节点的值。

// 返回每一层按 严格递增顺序 排序所需的最少操作数目。

// 节点的 层数 是该节点和根节点之间的路径的边数。

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
var minimumOperations = function (root) {
  let queue = [root];
  let ans = 0;
  while (queue.length) {
    const nxt = [];
    const arr = [];
    for (const q of queue) {
      arr.push(q.val);
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    queue = nxt;
    ans += getSortedNum(arr);
  }
  return ans;
};

var getSortedNum = function (arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const hash = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    hash.set(sorted[i], i);
  }

  let ans = 0;
  const visited = [];
  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    let start = arr[i];
    let idx = hash.get(start);
    while (idx !== i) {
      start = arr[idx];
      visited[idx] = true;
      idx = hash.get(start);
      ans++;
    }
  }
  return ans;
};
