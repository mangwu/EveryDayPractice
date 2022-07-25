/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-25 09:46:33                                                  *
 * @LastModifiedDate: 2022-07-25 15:40:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 完全二叉树 是每一层（除最后一层外）都是完全填充（即，节点数达到最大）的，并且所有的节点都尽可能地集中在左侧。

// 设计一种算法，将一个新节点插入到一个完整的二叉树中，并在插入后保持其完整。

// 实现 CBTInserter 类:

// CBTInserter(TreeNode root) 使用头节点为 root 的给定树初始化该数据结构；
// CBTInserter.insert(int v)  向树中插入一个值为 Node.val == val的新节点 TreeNode。
// 使树保持完全二叉树的状态，并返回插入节点 TreeNode 的父节点的值；
// CBTInserter.get_root() 将返回树的头节点。

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
 */
var CBTInserter = function (root) {
  this.root = root;
  this.cur = [root];
  this.next = [];
  this.idx = 0;
  // 层序遍历
  let queue = [root];
  let idx = 1;
  while (queue.length > 0) {
    const nxt = [];
    for (const q of queue) {
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    if (nxt.length > 0 && nxt.length == Math.pow(2, idx)) {
      this.cur = nxt;
    }
    if (nxt.length > 0 && nxt.length !== Math.pow(2, idx)) {
      this.next = nxt;
    }
    idx++;
    queue = nxt;
  }
  // 遍历cur，建立curIdx的正确值
  while (this.idx < this.cur.length) {
    if (this.cur[this.idx].left && this.cur[this.idx].right) {
      this.idx++;
    } else {
      break;
    }
  }
  console.log(this.cur);
  console.log(this.next);
  console.log(this.idx);
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  if (!this.cur[this.idx].left) {
    this.cur[this.idx].left = new TreeNode(val);
    this.next.push(this.cur[this.idx].left);
    return this.cur[this.idx].val;
  } else if (!this.cur[this.idx].right) {
    this.cur[this.idx].right = new TreeNode(val);
    this.next.push(this.cur[this.idx].right);
    let ans = this.cur[this.idx].val;
    this.idx++;
    // cur遍历完毕
    if (this.idx == this.cur.length) {
      this.cur = this.next;
      this.next = [];
      this.idx = 0;
    }
    return ans;
  }
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */

// 1
// 23
// 4 5 6 7
// 89 2

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
 */
var CBTInserter = function (root) {
  this.root = root;
  // 二进制
  this.cnt = 0;
  let queue = [root];
  while (queue.length > 0) {
    const nxt = [];
    for (const q of queue) {
      this.cnt++;
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    queue = nxt;
  }
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  // 插入新节点，编号加1
  this.cnt++; // 新节点编号
  // 创建新节点
  const newNode = new TreeNode(val);
  // 通过新节点编号计算出父节点位置
  let node = this.root;
  // 长度代表了当前节点所在的层数
  const hightBit = this.cnt.toString(2).length;
  // 从第二位开始，遍历hightBit - 2次就找到了父节点
  for (let i = hightBit - 2; i >= 1; i--) {
    // 计算第i位的（从0开始），节点值
    if ((this.cnt & (1 << i)) == 0) {
      // 0 在左节点
      node = node.left;
    } else {
      // 1 在右节点
      node = node.right;
    }
  }
  // 父节点就是node
  if ((this.cnt & 1) == 0) {
    // 放在左边
    node.left = newNode;
  } else {
    node.right = newNode;
  }
  return node.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};

// 1 1
// 3 11 2 10
// 4 100
//
// 5 101
// 6 110
// 7 111
