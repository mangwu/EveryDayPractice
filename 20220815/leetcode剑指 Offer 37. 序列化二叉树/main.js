/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 19:55:19                                                  *
 * @LastModifiedDate: 2022-08-15 20:12:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请实现两个函数，分别用来序列化和反序列化二叉树。

// 你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，
// 你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

// 提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。
// 你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) {
    return "";
  }
  // 使用bfs
  const ans = [root.val];
  let queue = [root];
  while (queue.length > 0) {
    let nxt = [];
    for (const q of queue) {
      if (q.left) {
        nxt.push(q.left);
        ans.push(q.left.val);
      } else {
        ans.push(null);
      }
      if (q.right) {
        nxt.push(q.right);
        ans.push(q.right.val);
      } else {
        ans.push(null);
      }
    }
    queue = nxt;
  }
  console.log(ans.join(","));
  return ans.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) {
    return null;
  }
  console.log(data);
  const res = data.split(",");
  const root = new TreeNode(parseInt(res[0]));
  let queue = [root];
  let start = 1;
  console.log(res);
  while (start < res.length) {
    const nxt = [];
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let left = res[start + i * 2];
      let right = res[start + i * 2 + 1];
      console.log(left, right, start);
      if (left !== "") {
        queue[i].left = new TreeNode(parseInt(left));
        nxt.push(queue[i].left);
      }
      if (right !== "") {
        queue[i].right = new TreeNode(parseInt(right));
        nxt.push(queue[i].right);
      }
    }
    start = start + 2 * n;
    queue = nxt;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
