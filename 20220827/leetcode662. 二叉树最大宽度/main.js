/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-27 19:00:29                                                  *
 * @LastModifiedDate: 2022-08-27 19:23:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵二叉树的根节点 root ，返回树的 最大宽度 。

// 树的 最大宽度 是所有层中最大的 宽度 。

// 每一层的 宽度 被定义为该层最左和最右的非空节点（即，两个端点）之间的长度。将这个二叉树视作与满二叉树结构相同，两端点间会出现一些延伸到这一层的 null 节点，这些 null 节点也计入长度。

// 题目数据保证答案将会在  32 位 带符号整数范围内。

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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  // bfs
  let ans = 1;
  let queue = [root];
  while (queue.length) {
    const nxt = [];
    console.log(queue);
    let cur = 0;
    for (const q of queue) {
      if (typeof q == "number") {
        // 数字
        cur += q;
        nxt.push(q * 2);
      } else {
        cur++;
        if (q.left) {
          nxt.push(q.left);
        } else {
          nxt.push(1);
        }
        if (q.right) {
          nxt.push(q.right);
        } else {
          nxt.push(1);
        }
      }
    }
    ans = Math.max(ans, cur);
    let left = 0;
    let right = nxt.length - 1;
    while (typeof nxt[left] == "number") {
      left++;
    }
    while (typeof nxt[right] == "number") {
      right--;
    }
    queue = nxt.slice(left, right + 1);
  }
  return ans;
};
