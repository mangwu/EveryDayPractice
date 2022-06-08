/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-08 09:21:00                                                  *
 * @LastModifiedDate: 2022-06-08 09:39:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，
// 该指针可以指向链表中的任何节点或空节点。

// 构造这个链表的 深拷贝。
// 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。
// 新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，
// 并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。

// 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。
// 那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

// 返回复制链表的头节点。

// 用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：

// val：一个表示 Node.val 的整数。
// random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
// 你的代码 只 接受原链表的头节点 head 作为传入参数。
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
  let node = head;
  // 声明一个数组保存所有的新节点
  const nodes = [];
  // 保存nodes的位置
  const hash = new Map();
  // 声明一个random数组保存原始数组中的random索引
  let randoms = [];
  let idx = 0;
  while (node) {
    nodes.push(new Node(node.val, null));
    hash.set(node, idx);
    randoms.push(node.random);
    idx++;
    node = node.next;
  }
  randoms = randoms.map((v) => {
    if (v) {
      return hash.get(v);
    }
    return null;
  });
  let header = new Node();
  pre = header;
  for (let i = 0; i < nodes.length; i++) {
    pre.next = nodes[i];
    if (randoms[i] !== null) {
      nodes[i].random = nodes[randoms[i]];
    }
    pre = nodes[i];
  }
  return header.next;
};
