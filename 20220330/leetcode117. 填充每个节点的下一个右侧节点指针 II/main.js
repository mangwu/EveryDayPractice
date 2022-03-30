/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-30 17:09:22                                                  *
 * @LastModifiedDate: 2022-03-30 17:33:46                                      *
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
          if (father.next.left) {
            son.next = father.next.left;
            break;
          }
          if (father.next.right) {
            son.next = father.next.right;
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
        if (father.next.left) {
          son.next = father.next.left;
        } else if (father.next.right) {
          son.next = father.next.right;
        } else {
          son.next = null;
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
  if (root.left) {
    connectToRight(root, root.left);
  }
  if (root.right) {
    connectToRight(root, root.right);
  }
  return root;
};

// 上述解法错误，值考虑了下一个节点只跨越一个一个分支的情况，下面的例子就不能通过了
//         1
//     2     3
//   4   5     6
// 7             8

// 7 要连接8，而上面的例子会连接空，因为父节点的next为5，只跨越了一层分支，未跨越到6上
