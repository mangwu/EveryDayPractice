/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-24 09:36:12                                                  *
 * @LastModifiedDate: 2025-02-24 11:16:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
// 实现 LRUCache 类：
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.hash = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.hash.has(key)) {
    const value = this.hash.get(key);
    this.hash.delete(key);
    this.hash.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.hash.has(key)) {
    this.hash.delete(key);
    this.hash.set(key, value);
  } else {
    if (this.hash.size === this.capacity) {
      // 移除第一个元素
      for (const [key, _value] of this.hash) {
        this.hash.delete(key);
        break;
      }
    }
    this.hash.set(key, value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// 双向链表
class DLinkedNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  // 插入到下一个节点
  insertNext(node) {
    const next = this.next;
    this.next = node;
    node.prev = this;
    node.next = next;
    next && (next.prev = node);
  }
  // 插入到上一个节点
  insertPrev(node) {
    const prev = this.prev;
    this.prev = node;
    node.next = this;
    node.prev = prev;
    prev && (prev.next = node);
  }
  // 移除当前节点
  remove() {
    const prev = this.prev;
    const next = this.next;
    this.prev = null;
    this.next = null;
    prev && (prev.next = next);
    next && (next.prev = prev);
    return this;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.hash = new Map(); // 记录[id,节点]
  this.capacity = capacity;
  this.header = new DLinkedNode(-1, -1); // 最新的缓存
  this.tail = new DLinkedNode(-1, -1); // 靠近尾部的是要优先移除的
  this.header.insertNext(this.tail);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.hash.has(key)) {
    const node = this.hash.get(key);
    const cur = node.remove();
    this.header.insertNext(cur);
    return node.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.hash.has(key)) {
    const node = this.hash.get(key);
    const cur = node.remove();
    this.header.insertNext(cur);
    cur.value = value;
  } else {
    if (this.hash.size === this.capacity) {
      // 移除尾部元素
      const tailPrev = this.tail.prev;
      tailPrev.remove();
      this.hash.delete(tailPrev.key);
    }
    this.header.insertNext(new DLinkedNode(key, value));
    this.hash.set(key, this.header.next);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
