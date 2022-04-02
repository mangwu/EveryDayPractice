/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-02 17:21:27                                                  *
 * @LastModifiedDate: 2022-04-02 17:30:56                                      *
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

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 翻转链表
  
};
