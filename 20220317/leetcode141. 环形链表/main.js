/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-17 18:12:30                                                  *
 * @LastModifiedDate: 2022-03-17 18:52:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//  给你一个链表的头节点 head ，判断链表中是否有环。

//  如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
//  为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
//  注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

//  如果链表中存在环 ，则返回 true 。 否则，返回 false 。

//

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 使用一个hash保存遍历过的节点，当遍历到相同节点时说明有换，否则无环
  const hash = new Set();
  while (head) {
    if (hash.has(head)) {
      return true;
    }
    hash.add(head);
    head = head.next;
  }
  return false;
};

// 上述算法耗费额外的O(n)空间，可以通过修改原始节点中的值为同一个，如果有链表循环，会遇到修改过的节点，这时候返回true即可

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  while (head) {
    if (head.val == "a") {
      return true;
    } else {
      head.val = "a";
    }
    head = head.next;
  }
  return false;
};

// 快慢指针法：如果有环，那么慢指针一定能追上快指针

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let fast = head.next;
  while (fast) {
    if (head == fast) {
      return true;
    }
    head = head.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    }
  }
  return false;
};
