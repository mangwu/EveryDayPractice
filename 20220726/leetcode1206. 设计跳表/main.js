/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-26 09:07:57                                                  *
 * @LastModifiedDate: 2022-07-29 17:43:12                                      *
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
  this.level = 0;
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
 * @description 生成随机层数
 * @returns {number}
 */
const randomLevel = () => {
  let lv = 0;
  while (Math.random() < P_FACTOR && lv < MAX_LEVEL - 1) {
    lv++;
  }
  return lv;
};
