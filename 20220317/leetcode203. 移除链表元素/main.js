/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-17 18:55:54                                                  *
 * @LastModifiedDate: 2022-03-17 19:22:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 注意要返回新的头节点
  // 使用一个遍历保存头节点，如果删除的就是头节点就替换为下一个节点
  // 设置一个值表明头节点不会变了
  let ans = head;
  let pre = null; // 上一个节点
  let isHead = true;
  while (head) {
    if (head.val == val) {
      if (isHead) {
        // 头节点就是当前节点
        ans = head.next;
        head.next = null;
        head = ans;
      } else {
        // 头节点不是当前节点
        pre.next = head.next;
        head.next = null;
        head = pre.next;
      }
    } else {
      // 跳过了，头节点不可能时当前节点
      isHead = false;
      pre = head;
      head = head.next;
    }
  }
  return ans;
};

// 上述方法需要的判断条件过多，使用一个哨兵节点作为头节点，让它始终指向链表的第一个节点即可
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let ans = new ListNode();
  ans.val = -1;
  ans.next = head;
  let pre = ans; // 上一个节点
  while (head) {
    if (head.val == val) {
      // 删除节点
      pre.next = head.next;
      head.next = null;
      head = pre.next;
    } else {
      // 跳过了，头节点不可能时当前节点
      pre = head;
      head = head.next;
    }
  }
  return ans.next;
};

// 递归法
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head == null) {
    return null;
  }
  if (head.val == val) {
    return removeElements(head.next, val);
  } else {
    head.next = removeElements(head.next, val);
    return head;
  }
};
