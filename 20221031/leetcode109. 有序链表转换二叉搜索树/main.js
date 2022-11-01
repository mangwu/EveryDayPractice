/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-31 10:33:27                                                  *
 * @LastModifiedDate: 2022-11-01 22:03:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。

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
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  // 先获得数组
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  // 递归
  const dfs = (start, end) => {
    if (start === end) {
      return new TreeNode(arr[start]);
    }
    if (start > end) {
      return null;
    }
    let mid = (start + end) >> 1;
    const node = new TreeNode(arr[mid]);
    node.left = dfs(start, mid - 1);
    node.right = dfs(mid + 1, end);
    return node;
  };
  return dfs(0, arr.length - 1);
};


// [10,0,13,-10,5,11,15,null,-3,null,9,null,12,14,16]

//       10
//     0      13
//  -10  5  11     15
//   -3   9   12 14 16