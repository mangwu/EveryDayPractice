/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-08 14:49:45                                                  *
 * @LastModifiedDate: 2024-01-10 16:46:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 m 和 k ，以及数据流形式的若干整数。你需要实现一个数据结构，计算这个数据流的 MK 平均值 。

// MK 平均值 按照如下步骤计算：

// 如果数据流中的整数少于 m 个，MK 平均值 为 -1 ，否则将数据流中最后 m 个元素拷贝到一个独立的容器中。
// 从这个容器中删除最小的 k 个数和最大的 k 个数。
// 计算剩余元素的平均值，并 向下取整到最近的整数 。
// 请你实现 MKAverage 类：

// MKAverage(int m, int k) 用一个空的数据流和两个整数 m 和 k 初始化 MKAverage 对象。
// void addElement(int num) 往数据流中插入一个新的元素 num 。
// int calculateMKAverage() 对当前的数据流计算并返回 MK 平均数 ，结果需 向下取整到最近的整数 。

// 优点队列，延迟删除
class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  compare(a, b) {
    return this.compareFn(this.heap[a], this.heap[b]);
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  getParentIdx(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  insert(value) {
    if (value == null) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compare(idx, parentIdx) < 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.heap.pop();
    this.swap(0, size - 1);
    const res = this.heap.pop();
    this.shiftDown();
    return res;
  }
  shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) {
        idx = leftIdx;
      }
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) {
        idx = rightIdx;
      }
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function (m, k) {
  this.data = [];
  // 递增优先队列，队顶为最小值
  this.middleInc = new PQ((a, b) => {
    const res = this.data[a] - this.data[b];
    if (res !== 0) return res;
    return a - b; // 相等元素按照索引排序
  });
  this.delayDeleteInc = new Map();
  // 递减优先队列，队顶为最大值
  this.middleDec = new PQ((a, b) => {
    const res = this.data[b] - this.data[a];
    if (res !== 0) return res;
    return a - b; // 相等元素按照索引排序
  });
  this.delayDeleteDec = new Map();
  // 保存递增优先队列出队的值，大根堆
  this.minDec = new PQ((a, b) => {
    const res = this.data[b] - this.data[a];
    if (res !== 0) return res;
    return a - b; // 相等元素按照索引排序
  });
  // 保存递减优先队列出队的值，小根堆
  this.maxInc = new PQ((a, b) => {
    const res = this.data[a] - this.data[b];
    if (res !== 0) return res;
    return a - b; // 相等元素按照索引排序
  });
  this.windowSize = m;
  this.deleteNum = k;
  this.middleSum = 0;
};

/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
  this.data.push(num);
  if (this.data.length <= this.windowSize) {
    if (this.data.length === this.windowSize) {
      const indexArr = new Array(this.windowSize)
        .fill(0)
        .map((_v, i) => i)
        .sort((a, b) => {
          const res = this.data[a] - this.data[b];
          if (res !== 0) return res;
          return a - b;
        });
      // 本次进队后，数量正好相等
      for (let i = 0; i < indexArr.length; i++) {
        if (i < this.deleteNum) {
          this.minDec.insert(indexArr[i]);
        } else if (i >= indexArr.length - this.deleteNum) {
          this.maxInc.insert(indexArr[i]);
        } else {
          this.middleDec.insert(indexArr[i]);
          this.middleInc.insert(indexArr[i]);
          this.middleSum += this.data[indexArr[i]];
        }
      }
    }
  } else {
    // 窗口开始右移，需要移除一个，增加一个
    // 移除值：this.data[this.data.length - this.windowSize - 1]
    // 增加值：num this.data.length - 1
    // 移除和增加值时，要考虑三方面问题：
    //  1. 移除或增加的值属于哪个队列
    //  2. 移除或增加的值需要添加或延迟删除
    //  3. 本次移除和增加对middleSum的影响
    const removeNum = this.data[this.data.length - this.windowSize - 1];
    const middleMax = this.data[this.maxInc.peek()];
    const middleMin = this.data[this.minDec.peek()];
    this.deleteOperate();
    if (removeNum >= middleMax) {
      // 移除的值在maxInc中
      if (num >= middleMax) {
        // 增加的值也在maxInc中，无需移位其它元素
        this.maxInc.insert(this.data.length - 1);
        // 移除会通过deleteOperate进行操作
      } else if (num <= middleMin) {
        // 增加的值在minDec中，需要将进行整体右移操作
        // [minDec, middle, maxInc]
        this.minDec.insert(this.data.length - 1);
        const minRightShift = this.minDec.poll();
        this.middleDec.insert(minRightShift);
        this.middleInc.insert(minRightShift);
        this.middleSum += this.data[minRightShift];
        const middleRightShift = this.middleDec.poll();
        // 这里middleInc也要移除这个middleRightShift
        this.delayDeleteInc.set(
          middleRightShift,
          (this.delayDeleteInc.get(middleRightShift) | 0) + 1
        );
        this.maxInc.insert(middleRightShift);
        this.middleSum -= this.data[middleRightShift];
      } else {
        // 增加的值在middle中，需要部分右移
        this.middleDec.insert(this.data.length - 1);
        this.middleInc.insert(this.data.length - 1);
        this.middleSum += num;
        const middleRightShift = this.middleDec.poll();
        // 这里middleInc也要移除这个middleRightShift
        this.delayDeleteInc.set(
          middleRightShift,
          (this.delayDeleteInc.get(middleRightShift) | 0) + 1
        );
        this.maxInc.insert(middleRightShift);
        this.middleSum -= this.data[middleRightShift];
      }
    } else if (removeNum <= middleMin) {
      // 移除的值在minDec中
      if (num <= middleMin) {
        // 增加的值也在minDec中，无需移位其它元素
        this.minDec.insert(this.data.length - 1);
      } else if (num >= middleMax) {
        // 增加的值在maxInc中，需要整体左移
        this.maxInc.insert(this.data.length - 1);
        const maxLeftShift = this.maxInc.poll();
        this.middleDec.insert(maxLeftShift);
        this.middleInc.insert(maxLeftShift);
        this.middleSum += this.data[maxLeftShift];
        const middleLeftShift = this.middleInc.poll();
        // 这里middleDec也要移除这个middleLeftShift
        this.delayDeleteDec.set(
          middleLeftShift,
          (this.delayDeleteDec.get(middleLeftShift) | 0) + 1
        );
        this.minDec.insert(middleLeftShift);
        this.middleSum -= this.data[middleLeftShift];
      } else {
        // 增加的值在middle中，需要部分左移
        this.middleDec.insert(this.data.length - 1);
        this.middleInc.insert(this.data.length - 1);
        this.middleSum += num;
        const middleLeftShift = this.middleInc.poll();
        // 这里middleDec也要移除这个middleLeftShift
        this.delayDeleteDec.set(
          middleLeftShift,
          (this.delayDeleteDec.get(middleLeftShift) | 0) + 1
        );
        this.minDec.insert(middleLeftShift);
        this.middleSum -= this.data[middleLeftShift];
      }
    } else {
      // 移除的值在middle中
      if (num <= middleMin) {
        // 增加的值在minDec中，需要部分右移
        this.middleSum -= removeNum;
        this.minDec.insert(this.data.length - 1);
        // 这里middleDec middleInc会通过其它函数移除removeNum
        const minRightShift = this.minDec.poll();
        this.middleDec.insert(minRightShift);
        this.middleInc.insert(minRightShift);
        this.middleSum += this.data[minRightShift];
      } else if (num >= middleMax) {
        // 增加的值在maxInc中，需要部分左移
        this.middleSum -= removeNum;
        this.maxInc.insert(this.data.length - 1);
        // 这里middleDec middleInc会通过其它函数移除removeNum
        const maxLeftShift = this.maxInc.poll();
        this.middleDec.insert(maxLeftShift);
        this.middleInc.insert(maxLeftShift);
        this.middleSum += this.data[maxLeftShift];
      } else {
        // 增加的值也在middle中
        this.middleSum -= removeNum;
        this.middleSum += num;
        this.middleDec.insert(this.data.length - 1);
        this.middleInc.insert(this.data.length - 1);
        // 这里middleDec middleInc会通过其它函数移除removeNum
      }
    }
    // 移除值
    this.deleteOperate();
  }
};
/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.deleteOperate = function () {
  const pqs = [this.minDec, this.maxInc];
  for (const pq of pqs) {
    while (!pq.isEmpty() && pq.peek() < this.data.length - this.windowSize) {
      pq.poll();
    }
  }
  const pqs2 = [
    [this.middleInc, this.delayDeleteInc],
    [this.middleDec, this.delayDeleteDec],
  ];
  for (const [pq, delayDelete] of pqs2) {
    while (
      !pq.isEmpty() &&
      (pq.peek() < this.data.length - this.windowSize ||
        delayDelete.has(pq.peek()))
    ) {
      const idx = pq.poll();
      if (delayDelete.get(idx) === 1) {
        delayDelete.delete(idx);
      } else if (delayDelete.has(idx)) {
        delayDelete.set(idx, delayDelete.get(idx) - 1);
      }
    }
  }
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {
  if (this.data.length < this.windowSize) return -1;
  return Math.floor(this.middleSum / (this.windowSize - 2 * this.deleteNum));
};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */

// 上述方法错误，时间复杂度符合要求，细节处有错误
