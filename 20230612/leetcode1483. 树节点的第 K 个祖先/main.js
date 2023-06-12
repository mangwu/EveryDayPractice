/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-12 08:56:51                                                  *
 * @LastModifiedDate: 2023-06-12 09:28:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵树，树上有 n 个节点，按从 0 到 n-1 编号。树以父节点数组的形式给出，其中 parent[i] 是节点 i 的父节点。树的根节点是编号为 0 的节点。

// 树节点的第 k 个祖先节点是从该节点到根节点路径上的第 k 个节点。

// 实现 TreeAncestor 类：

// TreeAncestor（int n， int[] parent） 对树和父数组中的节点数初始化对象。
// getKthAncestor(int node, int k) 返回节点 node 的第 k 个祖先节点。如果不存在这样的祖先节点，返回 -1 。

/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
  // 将每个节点的父亲节点进行保存
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.has(parent[i])
      ? hash.get(parent[i]).push(i)
      : hash.set(parent[i], [i]);
  }
  const hashMap = new Map();
  const dfs = (node, pre) => {
    hashMap.set(node, pre);
    const next = hash.get(node);
    if (next) {
      for (const item of next) {
        const newArr = pre.slice();
        newArr.push(node);
        dfs(item, newArr);
      }
    }
  };
  dfs(-1, []);
  this.hashMap = hashMap;
};

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  const parents = this.hashMap.get(node);
  const n = parents.length;
  if (k > n) return -1;
  return parents[n - k];
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */

// [-1,2,0,1,1,2,2]


/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
  // 将每个节点的父亲节点进行保存
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.has(parent[i])
      ? hash.get(parent[i]).push(i)
      : hash.set(parent[i], [i]);
  }
  const hashMap = new Map();
  const dfs = (node, pre) => {
    hashMap.set(node, pre);
    const next = hash.get(node);
    if (next) {
      for (const item of next) {
        const newArr = pre.slice();
        newArr.push(node);
        dfs(item, newArr);
      }
    }
  };
  dfs(-1, []);
  this.hashMap = hashMap;
};

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  const parents = this.hashMap.get(node);
  const n = parents.length;
  if (k > n) return -1;
  return parents[n - k];
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */