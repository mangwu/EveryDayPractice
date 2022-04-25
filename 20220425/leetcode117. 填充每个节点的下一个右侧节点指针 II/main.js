/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-25 11:24:42                                                  *
 * @LastModifiedDate: 2022-04-25 13:48:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二叉树

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

// 初始状态下，所有 next 指针都被设置为 NULL。

//

// 进阶：

// 你只能使用常量级额外空间。
// 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return root;
  }
  // 层序遍历
  let queue = [root];
  while (queue.length > 0) {
    const nxt = [];
    for (let i = 0; i < queue.length; i++) {
      queue[i].next = i + 1 < queue.length ? queue[i + 1] : null;
      if (queue[i].left) {
        nxt.push(queue[i].left);
      }
      if (queue[i].right) {
        nxt.push(queue[i].right);
      }
    }
    queue = nxt;
  }
  return root;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return root;
  }
  // 不耗费额外空间的层序遍历
  // 通过本层构建下一层的连接情况
  let cur = root;
  while (cur) {
    let next = null;
    let pre = null;
    while (cur) {
      if (cur.left) {
        if (pre == null) {
          pre = cur.left;
          next = cur.left;
        } else {
          pre.next = cur.left;
          pre = pre.next;
        }
      }
      if (cur.right) {
        if (pre == null) {
          pre = cur.right;
          next = cur.right;
        } else {
          pre.next = cur.right;
          pre = pre.next;
        }
      }
      cur = cur.next;
    }
    cur = next;
  }
  return root;
};
