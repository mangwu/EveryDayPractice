/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-11 19:52:34                                                  *
 * @LastModifiedDate: 2023-06-11 20:46:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。

// 删除完毕后，请你返回最终结果链表的头节点。

//

// 你可以返回任何满足题目要求的答案。

// （注意，下面示例中的所有序列，都是对 ListNode 对象序列化的表示。

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
var removeZeroSumSublists = function (head) {
  const header = new ListNode(0, head);
  const arr = [header];

  const preffix = [0];
  while (head) {
    arr.push(head);
    preffix.push(preffix[preffix.length - 1] + head.val);
    head = head.next;
  }
  const n = arr.length;
  while (true) {
    // 检查差值为0的两个值
    const hash = new Map();
    let flag = true;
    for (let i = 0; i < n; i++) {
      if (preffix[i] !== "-") {
        if (hash.has(preffix[i])) {
          // 进行删除
          let pre = hash.get(preffix[i]);
          for (let j = pre + 1; j <= i; j++) {
            preffix[j] = "-";
          }
          arr[pre].next = arr[i].next;
          arr[i].next = null;
          flag = false
          break;
        } else {
          hash.set(preffix[i], i);
        }
      }
    }
    if(flag) break;
  }
  return header.next
};

// 1 2 3 -2 4 -3 -4 2 -2 1
