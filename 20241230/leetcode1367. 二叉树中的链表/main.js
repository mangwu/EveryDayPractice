/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-30 09:30:23                                                  *
 * @LastModifiedDate: 2024-12-30 15:20:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。

// 如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，那么请你返回 True ，否则返回 False 。

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
  const hasPath = (tree, list) => {
    if (!list) return true;
    if (!tree) return false;
    if (tree.val !== list.val) return false;
    return hasPath(tree.left, list.next) || hasPath(tree.right, list.next);
  };
  const dfs = (node) => {
    if (!node) return false;
    let res = false;
    if (node.val === head.val) {
      res = res || hasPath(node, head);
    }
    if (res) return res;
    res = res || dfs(node.left) || dfs(node.right);
    return res;
  };
  return dfs(root);
};
