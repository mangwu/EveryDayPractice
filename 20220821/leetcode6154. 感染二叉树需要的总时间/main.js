/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-21 11:00:04                                                  *
 * @LastModifiedDate: 2022-08-21 11:09:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵二叉树的根节点 root ，二叉树中节点的值 互不相同 。另给你一个整数 start 。在第 0 分钟，感染 将会从值为 start 的节点开始爆发。

// 每分钟，如果节点满足以下全部条件，就会被感染：

// 节点此前还没有感染。
// 节点与一个已感染节点相邻。
// 返回感染整棵树需要的分钟数。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  // 遍历一遍获取 节点连接关系
  const set = new Set();
  const hash = new Map();
  const dfs = (node) => {
    if (!node) {
      return;
    }
    set.add(node.val);
    if (node.left) {
      const arr = hash.get(node.val) ? hash.get(node.val) : [];
      arr.push(node.left.val);
      hash.set(node.val, arr);
      const arr2 = hash.get(node.left.val) ? hash.get(node.left.val) : [];
      arr2.push(node.val);
      hash.set(node.left.val, arr2);
    }
    if (node.right) {
      const arr = hash.get(node.val) ? hash.get(node.val) : [];
      arr.push(node.right.val);
      hash.set(node.val, arr);
      const arr2 = hash.get(node.right.val) ? hash.get(node.right.val) : [];
      arr2.push(node.val);
      hash.set(node.right.val, arr2);
    }
    dfs(node.left);
    dfs(node.right);
  };
  set.delete(start);
  let queue = [start];
  let ans = 0;
  while (queue.length > 0) {
    const nxt = [];
    for (const q of queue) {
      const arr = hash.get(q);
      if (arr) {
        for (const item of arr) {
          if (set.has(item)) {
            set.delete(item);
            nxt.push(item);
          }
        }
      }
    }
    queue = nxt;
    ans++;
  }
  return ans;
};
