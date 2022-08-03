/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-26 09:07:57                                                  *
 * @LastModifiedDate: 2022-08-03 21:23:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

var Skiplist = function () {
  this.hash = new Map();
};

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {
  return this.hash.has(target);
};

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
  if (this.hash.has(num)) {
    const k = this.hash.get(num);
    this.hash.set(num, k + 1);
  } else {
    this.hash.set(num, 1);
  }
};

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
  if (this.hash.has(num)) {
    const k = this.hash.get(num);
    if (k == 1) {
      this.hash.delete(num);
      return true;
    }
    this.hash.set(num, k - 1);
    return true;
  }
  return false;
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */

const MAX_LEVEL = 32;
const P_FACTOR = 0.5;

class SkiplistNode {
  constructor(val, maxLevel) {
    this.val = val;
    this.forwards = new Array(maxLevel).fill(0);
  }
}

var Skiplist = function () {
  this.head = new SkiplistNode(-1, MAX_LEVEL);
  this.level = -1; // 表示当前的最高层 因为初始时没有任何节点，最高层为-1
};

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {
  // 从头节点的最顶层开始查找
  let curr = this.head;
  for (let i = this.level; i >= 0; i--) {
    // 在当前层查找，找到最接近target 的元素
    while (curr.forwards[i] && curr.forwards[i].val < target) {
      curr = curr.forwards[i];
    }
  }
  curr = curr.forwards[0];
  // 检查当前元素是否等于target
  if (curr && curr.val == target) {
    return true;
  }
  return false;
};
/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
  // 创建更新每层链表的前后节点
  const update = new Array(MAX_LEVEL).fill(this.head);
  // 开始从当前最高层遍历找到每层最接近num的节点
  let curr = this.head;
  for (let i = this.level; i >= 0; i--) {
    while (curr.forwards[i] && curr.forwards[i].val < num) {
      // 遍历到当层最接近num的
      curr = curr.forwards[i];
    }
    // 更新update，当前节点后就是节点在当前需要插入的位置
    update[i] = curr;
  }
  // 随机获取当前的节点
  let lv = randomLevel();
  // 更新最高层节点
  this.level = Math.max(this.level, lv);
  // 新建节点和它拥有的层数
  const newNode = new SkiplistNode(num, lv + 1);
  for (let i = 0; i <= lv; i++) {
    // 对第0-lv层的链表进行更新，update[i]就是最接近新节点节点
    newNode.forwards[i] = update[i].forwards[i];
    update[i].forwards[i] = newNode;
  }
};

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
  const update = new Array(MAX_LEVEL).fill(0);
  let curr = this.head;
  for (let i = this.level; i >= 0; i--) {
    // 找到每层最接近num的节点
    while (curr.forwards[i] && curr.forwards[i].val < num) {
      curr = curr.forwards[i];
    }
    update[i] = curr;
  }
  curr = curr.forwards[0];
  // 判断是否存在删除值
  if (!curr || curr.val !== num) {
    return false;
  }
  // 删除节点，更新链表
  for (let i = 0; i <= this.level; i++) {
    // 从第0层开始删除
    if (update[i].forwards[i] !== curr) {
      break;
    }
    // 指向下一个节点
    update[i].forwards[i] = curr.forwards[i];
  }
  // 更新最大层数
  while (this.level > 0 && !this.head.forwards[this.level]) {
    // 头节点后是空说明此层没有节点，不是最大层数了
    this.level--;
  }
  return true;
};

/**
 * @description 生成随机层数
 * @returns {number}
 */
var randomLevel = () => {
  let lv = 0;
  while (Math.random() < P_FACTOR && lv < MAX_LEVEL - 1) {
    lv++;
  }
  return lv;
};

// 0 - 31
