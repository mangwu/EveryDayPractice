/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 16:51:46                                                  *
 * @LastModifiedDate: 2022-08-15 17:30:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const pq = new PriorityQueue2();
  let start = 0;
  const n = nums.length;
  for (; start < k; start++) {
    pq.addVal(nums[start]);
  }
  let ans = [];
  ans.push(pq.getRear());
  for (; start < n; start++) {
    pq.deleteVal(nums[start - k]);
    pq.addVal(nums[start]);
    ans.push(pq.getRear());
  }
  return ans;
};

// 优先队列
class PriorityQueue2 {
  // 默认从小到大排序
  constructor(compare = (a, b) => a - b) {
    this.data = [];
    this.compare = compare;
  }
  // 二分搜索
  bianrySearch(target) {
    let left = 0;
    let right = this.data.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (target == this.data[mid]) {
        // 找到相同值
        return mid;
      } else if (this.compare(this.data[mid], target) > 0) {
        // 找到第一个比target大的数
        // mid比target大，target在前面
        right = mid;
      } else {
        // mid比target小，target在后面
        left = mid + 1;
      }
    }
    return right;
  }
  // 删除元素
  deleteVal(val) {
    let idx = this.bianrySearch(val);
    this.data.splice(idx, 1);
  }
  // 添加元素
  addVal(val) {
    let idx = this.bianrySearch(val);
    this.data.splice(idx, 0, val);
  }
  // 尾部元素
  getRear() {
    return this.data[this.data.length - 1];
  }
  // 头部元素
  getFront() {
    return this.data[0];
  }
}


// /**
//  * @class 滑动窗口
//  */
// class SlidingWindow {
//   constructor(k) {
//     this.data = new Array(k).fill(0);
//     this.max = new Array(k).fill(0);
//     this.idx = 0;
//     this.sum = 0;
//   }
//   push(val) {
//     let pre = this.data[this.idx];
//     this.data[this.idx] = val;
//     this.idx++;
//     this.idx = this.idx % this.data.length;
//     this.sum = this.sum + val - pre;
//   }
//   getCurSum() {
//     return this.sum;
//   }
// }

class PriorityQueue3 {
  constructor(compare = (a, b) => a < b) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }

  peek() {
    return this.size === 0 ? null : this.data[0];
  }

  offer(val) {
    this.data.push(val);
    this._shifUp(this.size++);
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    this._swap(0, --this.size);
    this._shifDown(0);
    return this.data.pop();
  }

  _parent(index) {
    return (index - 1) >> 1;
  }

  _child(index) {
    return (index << 1) + 1;
  }

  _shifDown(index) {
    while (this._child(index) < this.size) {
      let child = this._child(index);
      if (
        child + 1 < this.size &&
        this.compare(this.data[child + 1], this.data[child])
      ) {
        child = child + 1;
      }
      if (this.compare(this.data[index], this.data[child])) {
        break;
      }
      this._swap(index, child);
      index = child;
    }
  }

  _shifUp(index) {
    while (
      this._parent(index) >= 0 &&
      this.compare(this.data[index], this.data[this._parent(index)])
    ) {
      this._swap(index, this._parent(index));
      index = this._parent(index);
    }
  }

  _swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
}