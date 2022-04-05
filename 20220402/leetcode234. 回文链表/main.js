/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-02 17:21:27                                                  *
 * @LastModifiedDate: 2022-04-02 22:29:32                                      *
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 将链表中的值保存再数组中，判断数组是否回文即可
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const len = arr.length;
  let i = 0;
  while (i < len / 2) {
    if (arr[i] !== arr[len - i - 1]) {
      return false;
    }
    i++;
  }
  return true;
};
// 时间复杂度O(n),空间复杂度O(n)

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 翻转后半部分的节点，然后将前半部分和后半部分进行对比即可
  // 使用快慢指针可以找到前半部分的链表的尾部节点和后半部分的头节点
  // 然后翻转后半部分的链表
  // 判断回文，恢复链表
  if (head == null) {
    return true;
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // slow就是后半部分的链表
  let prev = null;
  while (slow) {
    let nextTemp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextTemp;
  }
  // 判断是否是回文
  let ans = true;
  let p1 = head;
  let p2 = prev;
  while (p2 !== null && p1 !== null) {
    if (p1.val !== p2.val) {
      ans = false;
      break;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  // 还原
  let end = prev;
  prev = null;
  while (end) {
    let nextTemp = end.next;
    end.next = prev;
    prev = end;
    end = nextTemp;
  }
  return ans;
};
