/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-11 09:02:34                                                  *
 * @LastModifiedDate: 2022-05-11 10:14:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  if (root == null) {
    return "";
  }
  // 层序遍历
  const ans = [];
  let queue = [root];
  while (queue.length > 0) {
    let nxt = [];
    for (const q of queue) {
      if (q) {
        ans.push(q.val);
      } else {
        ans.push(null);
        continue;
      }
      nxt.push(q.left);
      nxt.push(q.right);
    }
    queue = nxt;
  }
  console.log(ans);
  return ans.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data == "") {
    return null;
  }
  const nodeVals = data.split(",");
  let len = nodeVals.length;
  const root = new TreeNode(parseInt(nodeVals[0]));
  let pre = [root];
  let idx = 1;
  while (idx < len) {
    const nxt = [];
    for (const r of pre) {
      if (nodeVals[idx]) {
        r.left = new TreeNode(parseInt(nodeVals[idx]));
        nxt.push(r.left);
      }
      idx++;
      if (nodeVals[idx]) {
        r.right = new TreeNode(parseInt(nodeVals[idx]));
        nxt.push(r.right);
      }
      idx++;
    }
    pre = nxt;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// 上述解答未利用搜索树的特性，对所有树都有效，且未对最后一层下一层多出的null进行处理

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let ROOT = null;
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  ROOT = root;
  return "";
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  return ROOT;
};
