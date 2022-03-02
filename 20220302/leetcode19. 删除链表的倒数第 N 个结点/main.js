/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-02 16:40:45                                                  *
 * @LastModifiedDate: 2022-03-02 17:07:28                                      *
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
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 数组长度未知,使用一个数组保存所有节点
  let nodes = [head];
  let node = head;
  while (node.next) {
    node = node.next;
    nodes.push(node);
  }
  const len = nodes.length;
  // 获得到数第n个节点
  let lastN = nodes[len - n];
  // 被删除节点的剩余节点
  const keep = lastN.next;
  //判断lastN是否有前置节点
  if (len - n - 1 >= 0) {
    // 有前置节点
    nodes[len - n - 1].next = keep;
  } else {
    // 无前置节点
    head = keep;
  }
  return head;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd2 = function (head, n) {
  // 同样可以使用快慢指针，只要让快指针先走n步，然后一起走
  // 最后慢指针在要被删除的节点处
  let slow = head,
    fast = head,
    pre = null;
  while (fast) {
    if (n > 0) {
      fast = fast.next;
      n--;
    } else {
      head = head.next;
      pre = slow;
      slow = slow.fast;
    }
  }
  // 如果pre为空，说明slow指向头指针，删除第一个节点，直接返回head.next即可
  if (pre) {
    // 删除slow
    pre.next = slow.next;
    return head;
  } else {
    return head.next;
  }
};
