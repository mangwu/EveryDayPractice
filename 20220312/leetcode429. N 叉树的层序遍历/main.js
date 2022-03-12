/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-12 15:30:04                                                  *
 * @LastModifiedDate: 2022-03-12 15:37:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 层序遍历
  const ans = [];
  if (!root) {
    return ans;
  }
  let queue = [root];
  while (queue.length > 0) {
    // 保存下一层节点
    let nxt = [];
    // 保存本层的数据
    const values = [];
    for (const node of queue) {
      values.push(node.val);
      nxt = nxt.concat(node.children);
    }
    queue = nxt;
    ans.push(values);
  }
  return ans;
};
