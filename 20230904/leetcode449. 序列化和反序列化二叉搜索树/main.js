/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-04 15:01:57                                                  *
 * @LastModifiedDate: 2023-09-04 20:10:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。

// 设计一个算法来序列化和反序列化 二叉搜索树 。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。

// 编码的字符串应尽可能紧凑。

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
  // 无视搜索树的特性，对所有二叉树都有效果的方法：
  if (!root) return "";
  let queue = [root];
  const res = [];
  while (queue.length) {
    const nxt = [];
    for (const item of queue) {
      res.push(item ? item.val : item);
      if (item) {
        nxt.push(item.left);
        nxt.push(item.right);
      }
    }
    queue = nxt;
  }
  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") return null;
  const dataArr = data.split(",");
  let idx = 1;
  const head = new TreeNode(parseInt(dataArr[0]));
  let queue = [head];
  while (queue.length) {
    const nxt = [];
    const m = queue.length;
    for (let i = 0; i < m; i++) {
      const item = queue[i];
      console.log(item);
      if (dataArr[idx] !== "") {
        item.left = new TreeNode(parseInt(dataArr[idx]));
        console.log(dataArr[idx]);
        nxt.push(item.left);
      }
      if (dataArr[idx + 1] !== "") {
        item.right = new TreeNode(parseInt(dataArr[idx + 1]));
        console.log(dataArr[idx + 1]);
        nxt.push(item.right);
      }
      idx += 2;
    }
    queue = nxt;
  }
  return head;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
