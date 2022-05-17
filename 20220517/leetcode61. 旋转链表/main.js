/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-17 14:25:29                                                  *
 * @LastModifiedDate: 2022-05-17 15:25:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // 耗费空间的做法
  if (!head) {
    return null;
  }
  const res = [];
  let idx = 0;
  while (head) {
    res[idx] = head;
    head = head.next;
    idx++;
  }
  const n = res.length;
  res[n - 1].next = res[0];
  res[n - (k % n) - 1].next = null;
  // 百分比n的原因在于可能得到res[n],此时结构就是res[0]
  return res[(n - (k % n)) % n];
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // 因为不确定head的长度，所以无法确定需要移动到头节点前的节点个数
  // 为了避免使用额外空间，可以先遍历一遍head，得出长度时顺便将其构造成一个环形列表
  // 移动k，就是在k mod n 个的节点被移动到前面，所以，需要在n - (k mod n)处将链表断开
  // k mod n 等于0，恰好移动整数圈，可以不必构造环形列表，直接返回head即可
  if (!head || !head.next || k == 0) {
    return head;
  }
  let n = 1;
  let cur = head;
  while (cur.next) {
    n++;
    cur = cur.next;
  }
  let d = k % n;
  if (d == 0) {
    return head;
  }
  cur.next = head;
  while (n - d - 1 > 0) {
    head = head.next;
    d++;
  }
  let ans = head.next;
  head.next = null;
  return ans;
};
