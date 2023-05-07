/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-07 11:07:56                                                  *
 * @LastModifiedDate: 2023-05-07 11:18:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你设计并实现一个能够对其中的值进行跟踪的数据结构，并支持对频率相关查询进行应答。

// 实现 FrequencyTracker 类：

// FrequencyTracker()：使用一个空数组初始化 FrequencyTracker 对象。
// void add(int number)：添加一个 number 到数据结构中。
// void deleteOne(int number)：从数据结构中删除一个 number 。数据结构 可能不包含 number ，在这种情况下不删除任何内容。
// bool hasFrequency(int frequency): 如果数据结构中存在出现 frequency 次的数字，则返回 true，否则返回 false。

var FrequencyTracker = function () {
  this.hash = new Map();
  this.frequencyHash = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function (number) {
  const num = this.hash.get(number);
  if (num) {
    this.hash.set(number, num + 1);
    const freqNum = this.frequencyHash.get(num);
    if (freqNum === 1) {
      this.frequencyHash.delete(num);
    } else {
      this.frequencyHash.set(num, freqNum - 1);
    }
    this.frequencyHash.has(num + 1)
      ? this.frequencyHash.set(num + 1, this.frequencyHash.get(num + 1) + 1)
      : this.frequencyHash.set(num + 1, 1);
  } else {
    this.hash.set(number, 1);
    this.frequencyHash.has(1)
      ? this.frequencyHash.set(1, this.frequencyHash.get(1) + 1)
      : this.frequencyHash.set(1, 1);
  }
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function (number) {
  const num = this.hash.get(number);
  const freqNum = this.frequencyHash.get(num);
  if (num === 1) {
    this.hash.delete(number);
  } else {
    this.hash.set(number, num - 1);
    this.frequencyHash.has(num - 1)
      ? this.frequencyHash.set(num - 1, this.frequencyHash.get(num - 1) + 1)
      : this.frequencyHash.set(num - 1, 1);
  }
  if (freqNum === 1) {
    this.frequencyHash.delete(num);
  } else {
    this.frequencyHash.set(num, freqNum - 1);
  }
};

/**
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function (frequency) {
  return this.frequencyHash.has(frequency);
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
