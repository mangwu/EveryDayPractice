/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-23 15:21:10                                                  *
 * @LastModifiedDate: 2023-08-23 15:41:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

class Q {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0; // 追踪第一个元素
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  enqueue(...eles) {
    for (const ele of eles) {
      this.items[this.count + this.lowestCount] = ele;
      this.count++;
    }
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const pQueue = new Q();
  const qQueue = new Q();
  pQueue.enqueue(p);
  qQueue.enqueue(q);
  while (!pQueue.isEmpty() || !qQueue.isEmpty()) {
    const curP = pQueue.dequeue();
    const curQ = qQueue.dequeue();
    if (curP && curQ) {
      if (curP.val !== curQ.val) return false;
      if (curP.left) pQueue.enqueue(curP.left);
      else pQueue.enqueue(null);
      if (curP.right) pQueue.enqueue(curP.right);
      else pQueue.enqueue(null);
      if (curQ.left) qQueue.enqueue(curQ.left);
      else qQueue.enqueue(null);
      if (curQ.right) qQueue.enqueue(curQ.right);
      else qQueue.enqueue(null);
    } else if (!curP && !curQ) continue;
    else return false;
  }
  return true;
};
