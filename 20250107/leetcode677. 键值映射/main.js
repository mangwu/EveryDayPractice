/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-07 22:03:07                                                  *
 * @LastModifiedDate: 2025-01-07 22:38:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计一个 map ，满足以下几点:

// 字符串表示键，整数表示值
// 返回具有前缀等于给定字符串的键的值的总和
// 实现一个 MapSum 类：

// MapSum() 初始化 MapSum 对象
// void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键 key 已经存在，那么原来的键值对 key-value 将被替代成新的键值对。
// int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。

var MapSum = function () {
  this.children = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let node = this.children;
  for (const ch of key) {
    if (!node[ch]) node[ch] = {};
    node = node[ch];
  }
  node.isEnd = true;
  node.val = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  // 先找到前缀节点，在进行dfs搜索
  let node = this.children;
  for (const ch of prefix) {
    if (!node[ch]) return 0;
    node = node[ch];
  }
  let res = 0;
  const dfs = (node) => {
    if (node.isEnd) res += node.val;
    const keys = Object.keys(node);
    for (const key of keys) {
      if (key !== "isEnd" && key !== "val") dfs(node[key]);
    }
  };
  dfs(node);
  return res;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
