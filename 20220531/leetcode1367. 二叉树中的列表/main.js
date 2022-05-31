/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-31 15:28:43                                                  *
 * @LastModifiedDate: 2022-05-31 15:46:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。

// 如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，
// 那么请你返回 True ，否则返回 False 。

// 一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  const hasPath = (head, node) => {
    if (!head) {
      return true;
    }
    if (head && !node) {
      return false;
    }
    if (head.val !== node.val) {
      return false;
    }
    return hasPath(head.next, node.left) || hasPath(head.next, node.right);
  };
  const dfs = (node) => {
    if (!node) {
      return false;
    }
    if (node && node.val == head.val) {
      // 从node开始查找是否具有路径
      if (hasPath(head, node)) {
        return true;
      }
    }
    return dfs(node.left) || dfs(node.right);
  };
  return dfs(root);
};
