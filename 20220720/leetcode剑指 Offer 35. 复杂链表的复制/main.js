/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-20 10:47:53                                                  *
 * @LastModifiedDate: 2022-07-20 11:01:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  if (head && !head.next) {
    return new Node(head.val, null, null);
  }
  // 使用hash保存节点的位置
  const hash = new Map();
  const nodes = [];
  let idx = 0;
  let header = new Node();
  let pre = header;
  let cur = head;
  while (cur) {
    hash.set(cur, idx);
    idx++;
    const node = new Node(cur.val, null, null);
    nodes.push(node);
    pre.next = node;
    pre = node;
    cur = cur.next;
  }
  cur = head;
  idx = 0;
  while (cur) {
    const newIdx = hash.get(cur.random);
    if (newIdx !== undefined) {
      nodes[idx].random = nodes[newIdx];
    }
    cur = cur.next;
    idx++;
  }
  return header.next;
};
