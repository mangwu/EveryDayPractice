/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-16 08:37:16                                                  *
 * @LastModifiedDate: 2022-03-16 19:35:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你设计一个用于存储字符串计数的数据结构，并能够返回计数最小和最大的字符串。

// 实现 AllOne 类：

// AllOne() 初始化数据结构的对象。
// inc(String key) 字符串 key 的计数增加 1 。如果数据结构中尚不存在 key ，那么插入计数为 1 的 key 。
// dec(String key) 字符串 key 的计数减少 1 。如果 key 的计数在减少后为 0 ，那么需要将这个 key 从数据结构中删除。测试用例保证：在减少计数前，key 存在于数据结构中。
// getMaxKey() 返回任意一个计数最大的字符串。如果没有元素存在，返回一个空字符串 "" 。
// getMinKey() 返回任意一个计数最小的字符串。如果没有元素存在，返回一个空字符串 "" 。

// 此题关键在于将最大最小值求解时如何获取的问题
// 使用常规手段必定需要遍历保持数据的结构
// 保持数据的结构使用优先队列则inc的时间复杂度为O(nLogn)

/**
 * @class PriorityQueue 优先队列
 */
class PriorityQueue {
  // 默认小根堆
  constructor(compare = (a, b) => a - b < 0) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }
  // 返回队尾元素
  tail() {
    return this.size > 0 ? this.data[this.size - 1] : null;
  }
  // 返回队首元素
  head() {
    return this.size > 0 ? this.data[0] : null;
  }
  // 出队
  pop() {
    if (this.size > 0) {
      this.size--;
      return this.data.shift();
    }
  }
  // 入队
  push(val) {
    // 二分插入
    this.binaryInsert(this.size++, val);
  }
  binaryInsert(idx, val) {
    // 查找范围 [0, size)
    let left = 0;
    let right = idx;
    // 循环查找
    while (left < right) {
      // 中间索引
      let mid = Math.floor((left + right) / 2);

      if (this.compare(this.data[mid], val)) {
        // mid 比 val小 取右边 [mid + 1, right)
        left = mid + 1;
      } else {
        // mid 比 val 大 取左边 [left, mid)
        right = mid;
      }
      // 直到left === right ;
    }
    // 插入到left前
    this.data.splice(left, 0, val);
  }
}

// 使用优先队列不好操作，因为要排序数量元素是变化的，而不一定是插入新元素

var AllOne = function () {
  // 可以使用hash表保存每个字符和对应的数量
  // 然后维护一个双向链表，该链表的每个节点应该保存每个数量对应的字符串
  // 因为每次都是插入数量为1的字符串或者加或减去一个字符串数量，根据hash表可以很快找到节点位置
  // 而维护双向链表的顺序也是容易的
  // 如果加上一个新字符串，在头部节点（数量为1）加上即可
  // 加上或减去一个旧的字符串，在对应节点删掉该字符串，然后移动到相邻节点即可（因为链表是有序的）
  // 当相邻节点的数量不是对应的值时，创建一个新的即可
  // 根节点
  this.root = new Node();
  this.root.prev = this.root;
  this.root.next = this.root; // 不保留数据的初始化哨兵，如节点的Next为root则链表为空或者是尾节点
  // 字符串和节点对应
  this.nodes = new Map();
};
class Node {
  constructor(key, count) {
    this.count = count ? count : 0;
    // 保存相同数量的字符串
    this.keys = new Set();
    // 没有字符串存在时使用的空字符串替代
    key ? this.keys.add(key) : this.keys.add("");
  }
  // 在this后插入节点
  insert(node) {
    node.prev = this;
    node.next = this.next;
    node.prev.next = node;
    node.next.prev = node;
    return node;
  }
  // 移除后面的节点
  remove() {
    this.prev.next = this.next;
    this.next.prev = this.prev;
  }
}

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  // hash表中已经有了该字符串
  if (this.nodes.has(key)) {
    // 获取字符串对应节点
    const cur = this.nodes.get(key);
    // 相邻节点(下一个节点)
    const nxt = cur.next;
    if (nxt == this.root || nxt.count > cur.count + 1) {
      // 下一个相邻节点不能保存该节点的值，要么是尾节点，要么恰好没有中间值
      // 新建一个节点插入到cur后，并保存到hash表中
      this.nodes.set(key, cur.insert(new Node(key, cur.count + 1)));
    } else {
      // 节点的keys set新增字符串
      nxt.keys.add(key);
      // 更新hash
      this.nodes.set(key, nxt);
    }
    // 删除被移动到下一个节点的set表中的key
    cur.keys.delete(key);
    // 如果当前数量节点不存在字符串，就可以删除了
    if (cur.keys.size === 0) {
      cur.remove();
    }
  } else {
    // 没有相关节点（即数量为0的字符串，需要加入到根节点后）
    if (this.root.next == this.root || this.root.next.count > 1) {
      // 如果根节点后不存在数量为1的节点（空链表，或者没有node(1)）
      // 新建并插入到根节点后
      this.nodes.set(key, this.root.insert(new Node(key, 1)));
    } else {
      // 有就不需要创建
      this.root.next.keys.add(key);
      this.nodes.set(key, this.root.next);
    }
  }
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  // 删除的字符串必定存在，直接获取对应数量节点
  const cur = this.nodes.get(key);
  if (cur.count === 1) {
    // 数量为1，需要在hash中移除key
    this.nodes.delete(key);
  } else {
    // 获取相邻节点
    const pre = cur.prev;
    if (pre == this.root || pre.count < cur.count - 1) {
      // 前面为根节点或者不是数量为count - 1的节点，需要新建节点
      this.nodes.set(key, pre.insert(new Node(key, cur.count - 1)));
    } else {
      // 直接添加到前一个节点中
      pre.keys.add(key);
      this.nodes.set(key, pre);
    }
  }
  // 最后要把字符串在链表中的原位置节点的keys中删除
  cur.keys.delete(key);
  // 判断是否是最后一个
  if (cur.keys.size == 0) {
    cur.remove();
  }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  // 最大值的key就是尾节点值
  if (!this.root.next) {
    return "";
  }
  let maxKey = "";
  for (const key of this.root.prev.keys) {
    maxKey = key;
    // 返回第一个即可
    break;
  }
  return maxKey;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  if (!this.root.next) {
    return "";
  }
  let minKey = "";
  for (const key of this.root.next.keys) {
    minKey = key;
    // 返回第一个即可
    break;
  }
  return minKey;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
