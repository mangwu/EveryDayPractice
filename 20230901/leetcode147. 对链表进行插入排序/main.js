/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-01 11:27:50                                                  *
 * @LastModifiedDate: 2023-09-01 14:48:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定单个链表的头 head ，使用 插入排序 对链表进行排序，并返回 排序后链表的头 。

// 插入排序 算法的步骤:

// 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
// 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
// 重复直到所有输入数据插入完为止。
// 下面是插入排序算法的一个图形示例。部分排序的列表(黑色)最初只包含列表中的第一个元素。每次迭代时，从输入数据中删除一个元素(红色)，并就地插入已排序的列表中。

// 对链表进行插入排序。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  const header = new ListNode(undefined, head);
  let node = head.next;
  let pre = head;
  while (node) {
    const nxt = node.next;
    let preNode = header; // 被比较节点的上一个节点
    let curNode = header.next; // 被比较的当前节点
    while (curNode !== node) {
      if (node.val < curNode.val) {
        // 将node插入到curNode前
        pre.next = nxt;
        preNode.next = node;  
        node.next = curNode;
        node = pre;
        break;
      }
      preNode = curNode;
      curNode = curNode.next;
    }
    pre = node;
    node = nxt;
  }
  return header.next;
};
