/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-14 09:50:58                                                  *
 * @LastModifiedDate: 2022-06-14 09:55:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实现RandomizedSet 类：

// RandomizedSet() 初始化 RandomizedSet 对象
// bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
// bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
// int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。
// 每个元素应该有 相同的概率 被返回。
// 你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。

var RandomizedSet = function () {
  // set去重
  this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.set.has(val)) {
    this.set.add(val);
    return true;
  }
  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.set.has(val)) {
    this.set.delete(val);
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const romdom = Math.floor(Math.random() * this.set.size);
  return [...this.set][romdom];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
