// 请你设计一个队列，支持在前，中，后三个位置的 push 和 pop 操作。

// 请你完成 FrontMiddleBack 类：

// FrontMiddleBack() 初始化队列。
// void pushFront(int val) 将 val 添加到队列的 最前面 。
// void pushMiddle(int val) 将 val 添加到队列的 正中间 。
// void pushBack(int val) 将 val 添加到队里的 最后面 。
// int popFront() 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// int popMiddle() 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// int popBack() 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// 请注意当有 两个 中间位置的时候，选择靠前面的位置进行操作。比方说：

// 将 6 添加到 [1, 2, 3, 4, 5] 的中间位置，结果数组为 [1, 2, 6, 3, 4, 5] 。
// 从 [1, 2, 3, 4, 5, 6] 的中间位置弹出元素，返回 3 ，数组变为 [1, 2, 4, 5, 6] 。

class Dqueue {
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
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  enqueueFront(value) {
    if (value == null) return false;
    this.items[this.lowest--] = value;
    return true;
  }
  enqueueBack(value) {
    if (value == null) return false;
    this.items[this.highest++] = value;
    return true;
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

var FrontMiddleBackQueue = function () {
  // 保证frontQ的数量最多比backQ多1
  this.frontQ = new Dqueue();
  this.backQ = new Dqueue();
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  if (this.frontQ.size() > this.backQ.size()) {
    this.backQ.enqueueFront(this.frontQ.dequeueBack());
  }
  this.frontQ.enqueueFront(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (this.frontQ.size() > this.backQ.size()) {
    this.backQ.enqueueFront(this.frontQ.dequeueBack());
    this.frontQ.enqueueBack(val);
  } else this.frontQ.enqueueBack(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  if (this.frontQ.size() > this.backQ.size()) {
    this.backQ.enqueueBack(val);
  } else if (this.frontQ.isEmpty()) {
    this.frontQ.enqueueBack(val);
  } else {
    this.frontQ.enqueueBack(this.backQ.dequeueFront());
    this.backQ.enqueueBack(val);
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.frontQ.size() > this.backQ.size()) {
    return this.frontQ.dequeueFront();
  } else if (this.frontQ.isEmpty()) {
    return -1;
  } else {
    this.frontQ.enqueueBack(this.backQ.dequeueFront());
    return this.frontQ.dequeueFront();
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.frontQ.size() > this.backQ.size()) {
    return this.frontQ.dequeueBack();
  } else if (this.frontQ.isEmpty()) {
    return -1;
  } else {
    const res = this.frontQ.dequeueBack();
    this.frontQ.enqueueBack(this.backQ.dequeueFront());
    return res;
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.frontQ.size() > this.backQ.size()) {
    this.backQ.enqueueFront(this.frontQ.dequeueBack());
    return this.backQ.dequeueBack();
  } else if (this.frontQ.isEmpty()) {
    return -1;
  } else {
    return this.backQ.dequeueBack();
  }
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
