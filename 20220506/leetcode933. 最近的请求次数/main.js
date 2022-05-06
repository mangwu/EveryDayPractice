/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-06 08:41:25                                                  *
 * @LastModifiedDate: 2022-05-06 09:04:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 写一个 RecentCounter 类来计算特定时间范围内最近的请求。

// 请你实现 RecentCounter 类：

// RecentCounter() 初始化计数器，请求数为 0 。
// int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，
// 并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
// 保证 每次对 ping 的调用都使用比之前更大的 t 值。
var RecentCounter = function () {
  // 需要一个保持之前ping数据的数据结构
  this.data = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.data.push(t);
  const len = this.data.length;
  // 二分查找到第一个大于等于t - 3000 的值或者第一个比t-3000小的值
  // [0,len)
  let left = 0;
  let right = len;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (this.data[mid] >= t - 3000) {
      // 左区域
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return len - left;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var RecentCounter = function () {
  // 需要一个保持之前ping数据的数据结构
  // 使用队列
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  // 均摊的时间复杂度为O(1),n次ping最多移除n-1次队列，均摊下来每次ping的时间复杂度就是O(1)
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
