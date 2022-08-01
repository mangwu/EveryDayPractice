/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-01 15:54:59                                                  *
 * @LastModifiedDate: 2022-08-01 17:34:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n == 0) {
    return tasks.length;
  }
  // 遍历tasks，获取任务和任务种类
  const hash = new Map();
  for (const task of tasks) {
    const num = hash.get(task) == undefined ? 0 : hash.get(task);
    hash.set(task, num + 1);
  }
  const len = tasks.length;
  const data = [...hash];
  data.sort(compare);
  console.log(data);
  const pq = new PiriorQueue(data, compare);
  let count = 0;
  const queue = new Array(n + 1).fill(0);
  let ans = 0;
  // 要执行完毕
  while (count !== len) {
    console.log(count);
    console.log(pq.data);
    // 是否有元素已经间隔成功需要输出
    const val = queue.shift();
    if (val !== 0 && hash.has(val)) {
      const target = [val, hash.get(val)];
      pq.addVal(target);
    }
    // 获取最大元素
    const res = pq.getMaxAndDelete();
    console.log(res);
    // 成功获取
    if (res !== -1) {
      count++;
      // 获取数量
      const num = hash.get(res[0]);
      if (num == 1) {
        hash.delete(res[0]);
        queue.push(0);
      } else {
        hash.set(res[0], num - 1);
        queue.push(res[0]);
      }
    } else {
      // 待命
      queue.push(0);
    }
    ans++;
    console.log(pq.data);
  }
  return ans;
};
// 按照数量和字母顺序比较 如[[B,5],[A, 4],[C, 4]]
var compare = (a, b) => {
  if (a[1] - b[1] !== 0) {
    return b[1] - a[1];
  }
  return b[0].charCodeAt() - a[0].charCodeAt();
};
class PiriorQueue {
  constructor(data = [], compare = (a, b) => a - b) {
    // 排好序的数据
    this.data = data;
    this.compare = compare;
  }
  binarySearch(target) {
    // 二分查找
    let left = 0;
    let right = this.data.length;
    // [left,right]
    // 找到第一个大于target的索引
    while (left < right) {
      let mid = (left + right) >> 1;
      const res = this.compare(this.data[mid], target);
      if (res == 0) {
        return mid;
      } else if (res < 0) {
        // mid 在target前面,target在后面
        left = mid + 1;
      } else {
        // mid 在target后面。target在前面, mid可能是第一个大于target的索引
        right = mid;
      }
    }
    return right;
  }
  // 添加元素
  addVal(target) {
    // 查找值
    let idx = this.binarySearch(target);
    this.data.splice(idx, 0, target);
  }
  // 删除元素
  deleteVal(target) {
    // 删除元素
    let idx = this.binarySearch(target);
    this.data.splice(idx, 1);
  }
  // 获取最大元素并删除
  getMaxAndDelete() {
    if (this.data.length > 0) {
      return this.data.splice(this.data.length - 1, 1)[0];
    } else {
      return -1;
    }
  }
}
