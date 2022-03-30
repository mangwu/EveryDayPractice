/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-30 17:09:22                                                  *
 * @LastModifiedDate: 2022-03-30 22:32:55                                      *
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
  // 递归解法
  if (!root) {
    return null;
  }
  root.next = null;
  const connectToRight = (father, son) => {
    // 判断是左节点还是右节点
    if (father.left == son) {
      // 左节点，
      if (father.right) {
        son.next = father.right;
      } else if (father.next) {
        // 找到第一个具有左右节点的next
        let node = father.next;
        while (node) {
          if (node.left) {
            son.next = node.left;
            break;
          }
          if (node.right) {
            son.next = node.right;
            break;
          }
          node = node.next;
        }
      } else {
        son.next = null;
      }
    } else {
      // 右节点
      if (father.next) {
        // 找到第一个具有左右节点的next
        let node = father.next;
        while (node) {
          if (node.left) {
            son.next = node.left;
            break;
          }
          if (node.right) {
            son.next = node.right;
            break;
          }
          node = node.next;
        }
      } else {
        son.next = null;
      }
    }
    if (son.right) {
      connectToRight(son, son.right);
    }
    if (son.left) {
      connectToRight(son, son.left);
    }
  };
  if (root.right) {
    connectToRight(root, root.right);
  }
  if (root.left) {
    connectToRight(root, root.left);
  }
  return root;
};

// 上述（原始）解法错误，值考虑了下一个节点只跨越一个一个分支的情况，下面的例子就不能通过了
//         1
//     2     3
//   4   5     6
// 7             8

// 7 要连接8，而上面的例子会连接空，因为父节点的next为5，只跨越了一层分支，未跨越到6上
// 修改next

// 层序遍历
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
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
let last = null; // 本层的最后一个节点（最终）
let nextStart = null; // 下一层的起始节点
// 层序遍历
const handle = (p) => {
  if (last !== null) {
    // 上一个节点的下一个就是p
    last.next = p;
  }
  if (nextStart == null) {
    // 第一个节点
    nextStart = p;
  }
  // 从左到右遍历下一层的last就是记录每个节点
  last = p;
};
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // 不占用空间的层序遍历，利用上一层已经建立的next指针进行本层的next指针链表建立
  if (!root) {
    return null;
  }
  // 位于第x层时为x+1层建立next指针
  let start = root;
  while (start !== null) {
    last = null;
    nextStart = null;
    for (let p = start; p !== null; p = p.next) {
      // 遍历本层
      if (p.left !== null) {
        // 封装的用于处理
        handle(p.left);
      }
      if (p.right !== null) {
        handle(p.right);
      }
    }
    start = nextStart;
  }
  return root;
};
