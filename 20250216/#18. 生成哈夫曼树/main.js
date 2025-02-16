/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-16 20:37:25                                                  *
 * @LastModifiedDate: 2025-02-16 21:02:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定长度为 n 的无序的数字数组，每个数字代表二叉树的叶子节点的权值，数字数组的值均大于等于1。

// 请完成一个函数，根据输入的数字数组，生成哈夫曼树，并将哈夫曼树按照中序遍历输出。

// 为了保证输出的二叉树中序遍历结果统一，增加限制：二叉树节点中，左节点权值小于右节点权值，根节点权值为左右节点权值之和。当左右节点权值相同时，左子树高度小于等于右子树高度。const rl = require("readline").createInterface({ input: process.stdin });
const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // 应该用优先队列，
  // 将每个叶子节点看作一棵独立的树，并将这些树放入一个优先队列（最小堆）中。
  // 优先队列用于每次选择权值最小的两个节点进行合并
  // 从优先队列中取出权值最小的两个节点，将它们作为新树的左右子树，
  // 并计算新树的权值为两棵子树权值之和。然后，将新树加入优先队列中
  class Node {
    constructor(val, left, right) {
      this.val = val;
      this.left = left || null;
      this.right = right || null;
      this.height = 1;
    }
  }
  const leafVals = inputs[1].split(" ").map((v) => new Node(parseInt(v)));
  leafVals.sort((a, b) =>
    b.val !== a.val ? b.val - a.val : b.height - a.height
  );
  while (leafVals.length >= 2) {
    const left = leafVals.pop();
    const right = leafVals.pop();
    const parentNode = new Node(left.val + right.val, left, right);
    parentNode.height = right.height + 1;
    leafVals.push(parentNode);
    leafVals.sort((a, b) =>
      b.val !== a.val ? b.val - a.val : b.height - a.height
    );
  }
  const root = leafVals[0];
  const path = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    path.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  console.log(path.join(" "));
}
solution();
