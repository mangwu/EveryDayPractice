/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-23 17:09:53                                                  *
 * @LastModifiedDate: 2023-08-23 17:32:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
class Q {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }
  enqueue(...eles) {
    for (const ele of eles) {
      this.items[this.lowestCount + this.count] = ele;
      this.count++;
    }
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const removeValue = this.items[this.lowestCount++];
    delete this.items[this.lowestCount - 1];
    this.count--;
    return removeValue;
  }
}
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const left = root.left;
  const right = root.right;
  const lQ = new Q();
  const rQ = new Q();
  if (left) lQ.enqueue(left);
  if (right) rQ.enqueue(right);
  while (!lQ.isEmpty() || !rQ.isEmpty()) {
    const curL = lQ.dequeue();
    const curR = rQ.dequeue();
    if (curL && curR) {
      if (curL.val !== curR.val) return false;
      if (curL.left) lQ.enqueue(curL.left);
      else lQ.enqueue(null);
      if (curL.right) lQ.enqueue(curL.right);
      else lQ.enqueue(null);
      if (curR.right) rQ.enqueue(curR.right);
      else rQ.enqueue(null);
      if (curR.left) rQ.enqueue(curR.left);
      else rQ.enqueue(null);
    } else if (!curL && !curR) continue;
    else return false;
  }
  return true;
};

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const dfs = (node1, node2) => {
    if (!node1 && !node2) return true;
    else if (!node1 || !node2) return false;
    else {
      if (node1.val !== node2.val) return false;
      return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
    }
  };
  return dfs(root.left, root.right);
};
