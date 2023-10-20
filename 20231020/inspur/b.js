/*
 * @Author: mangwu                                                             *
 * @File: b.js                                                                 *
 * @Date: 2023-10-20 09:13:56                                                  *
 * @LastModifiedDate: 2023-10-20 09:22:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小红拿到了一个链表。她准备删除一些节点，使得任意两个相邻节点的和都是奇数。
// 小红希望最终链表的长度尽可能大。请你返回最终得到的链表。如果答案不唯一，输出任意即可。
// 初始链表的长度不超过
// 2
// ⋅
// 1
// 0
// 5
// 2⋅10
// 5
//  。
// −
// 1
// 0
// 4
// ≤
// −10
// 4
//  ≤ 节点权值
// ≤
// 1
// 0
// 4
// ≤10
// 4

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return ListNode类
 */
function longestList(head) {
  // write code here
  // 奇数+奇数为偶数，所以奇数不能相邻，同理偶数也不能相邻
  // 最终的结果应该是 偶数 奇数 偶数 奇数 偶数 奇数
  // 要么偶数为首，要么奇数为首，第一个数确定是奇数还是偶数为首
  if (!head) return head;
  let preVal = Math.abs(head.val % 2); // 0为偶数，1为奇数
  let node = head.next;
  let pre = head;
  while (node) {
    let cur = Math.abs(node.val % 2);
    if (cur === preVal) {
      // 删除当前节点
      pre.next = node.next;
      node.next = null;
      node = pre.next;
    } else {
      preVal = cur;
      pre = node;
      node = node.next;
    }
  }
  return head;
}
module.exports = {
  longestList: longestList,
};
