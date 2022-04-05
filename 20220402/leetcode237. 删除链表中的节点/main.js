/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-02 23:11:16                                                  *
 * @LastModifiedDate: 2022-04-02 23:14:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，
// 你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。

// 题目数据保证需要删除的节点 不是末尾节点 。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 把下一个节点复制到本节点，然后跳过下一个节点即可

  node.val = node.next.val;
  node.next = node.next.next;
};
