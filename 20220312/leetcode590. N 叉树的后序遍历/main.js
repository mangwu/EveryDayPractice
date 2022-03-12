/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-12 13:30:18                                                  *
 * @LastModifiedDate: 2022-03-12 17:09:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 n 叉树的根节点 root ，返回 其节点值的 后序遍历 。

// n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  // bfs层序遍历保存之后翻转即可
  let ans = [];
  if (!root) {
    return ans;
  }
  let queue = [root];
  while (queue.length > 0) {
    let nxt = [];
    for (let i = queue.length - 1; i >= 0; i--) {
      ans.push(queue[i].val);
      const children = queue[i].children;
      // for (let j = children.length - 1; j >= 0; j--) {
      //   nxt.push(children[j]);
      // }
      for (const child of children) {
        nxt.push(child);
      }
    }
    queue = nxt;
  }
  return ans.reverse();
};

// 上述解答不是后续遍历,二树反向层序遍历

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const ans = [];
  // 使用dfs递归实现
  const dfs = (node) => {
    // 先遍历后push根节点的值
    if (node) {
      for (const child of node.children) {
        dfs(child);
      }
      ans.push(node.val);
    }
  };
  dfs(root);
  return ans;
};

// 迭代法的后序遍历
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  // dfs的递归本质上可以使用栈实现，所以可以将其转化为栈的迭代实现
  // 每次没有入栈就需要回退了
  // 因为是后序遍历，判断节点是否需要push入结果需要一个hash表记录
  if (!root) {
    return [];
  }
  const ans = []
  // 记录访问情况
  const hash = new Set();
  const stack = [root];
  while (stack.length) {
    // 栈顶元素
    const node = stack[stack.length - 1];
    // 查看当前节点是否为叶子节点或者子节点已经被全部遍历
    if (node.children.length == 0 || hash.has(node)) {
      // 出栈回退
      stack.pop();
      // 保留值
      ans.push(node.val);
      // 如果是已遍历就不用再遍历了
      continue;
    }
    // 利用先进后出的特性，先将右边的节点入栈，这样就能先遍历左边的节点
    for(let i = node.children.length - 1; i >= 0; --i) {
      // 入栈
      stack.push(node.children[i]);
    }
    // 表面栈顶元素已被访问（）
    hash.add(node);
  }
  return ans;
};
