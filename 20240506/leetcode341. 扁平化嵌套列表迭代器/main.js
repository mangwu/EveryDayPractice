// 给你一个嵌套的整数列表 nestedList 。每个元素要么是一个整数，要么是一个列表；该列表的元素也可能是整数或者是其他列表。请你实现一个迭代器将其扁平化，使之能够遍历这个列表中的所有整数。

// 实现扁平迭代器类 NestedIterator ：

// NestedIterator(List<NestedInteger> nestedList) 用嵌套列表 nestedList 初始化迭代器。
// int next() 返回嵌套列表的下一个整数。
// boolean hasNext() 如果仍然存在待迭代的整数，返回 true ；否则，返回 false 。
// 你的代码将会用下述伪代码检测：

// initialize iterator with nestedList
// res = []
// while iterator.hasNext()
//     append iterator.next() to the end of res
// return res
// 如果 res 与预期的扁平化列表匹配，那么你的代码将会被判为正确。

class DQueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  enqueueFront(val) {
    this.items[this.lowest--] = val;
  }
  enqueueBack(val) {
    this.items[this.highest++] = val;
  }
  dequeueFront() {
    if (this.isEmpty()) return;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
  peekFront() {
    if (this.isEmpty()) return;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return;
    return this.items[this.highest - 1];
  }
}

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  // 使用队列
  this.dqueue = new DQueue();
  for (const nested of nestedList) {
    this.dqueue.enqueueBack(nested);
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  while (!this.dqueue.isEmpty()) {
    const front = this.dqueue.dequeueFront();
    if (front.isInteger()) {
      this.dqueue.enqueueFront(front);
      return true; // 找到一个整数
    } else {
      const list = front.getList();
      while (list.length) this.dqueue.enqueueFront(list.pop());
    }
  }
  return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  if (this.hasNext()) return this.dqueue.dequeueFront().getInteger();
  return -1;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
