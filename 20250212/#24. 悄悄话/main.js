/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 11:10:26                                                  *
 * @LastModifiedDate: 2025-02-12 15:26:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 给定一个二叉树，每个节点上站一个人，节点数字表示父节点到该节点传递悄悄话需要花费的时间。 初始时，根节点所在位置的人有一个悄悄话想要传递给其他人，求二叉树所有节点上的人都接收到悄悄话花费的时间。

// 输入描述
// 给定二叉树

// 0 9 20 -1 -1 15 7 -1 -1 -1 -1 3 2

// 注：-1

// 表示空节点

// 输出描述

// 二叉树所有节点上的人都接收到悄悄话花费的时间：38

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

class Node {
  constructor(val = 0, left = undefined, right = undefined) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(" ").map((v) => parseInt(v));
  // 构造二叉树
  let queue = [new Node(arr[0])];
  const root = queue[0];
  let idx = 1;
  while (idx < arr.length) {
    const nxt = [];
    for (const q of queue) {
      if (q) {
        if (arr[idx] == -1 || arr[idx] == undefined) {
          nxt.push(null);
        } else {
          q.left = new Node(arr[idx]);
          nxt.push(q.left);
        }
        idx++;
        if (arr[idx] == -1 || arr[idx] == undefined) {
          nxt.push(null);
        } else {
          q.right = new Node(arr[idx]);
          nxt.push(q.right);
        }
        idx++;
      } else {
        idx += 2;
      }
    }
    queue = nxt;
  }
  const dfs = (node) => {
    if (!node) return 0;
    return node.val + Math.max(dfs(node.left), dfs(node.right));
  };
  const res = dfs(root);
  console.log(res);
}
solution();

// Node {
//   val: 0,
//   left: Node {
//     val: 9,
//     left: Node { val: 20, left: undefined, right: [Node] },
//     right: undefined
//   },
//   right: Node { val: 20, left: undefined, right: undefined }
// }
