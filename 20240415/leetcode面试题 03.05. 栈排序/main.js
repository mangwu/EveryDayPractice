// 栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.items = [];
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  insert(val) {
    if (val == null) return false;
    this.items.push(val);
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
  peek() {
    if (this.isEmpty()) return;
    return this.items[0];
  }
  poll() {
    if (this.isEmpty()) return;
    const size = this.size();
    if (size === 1) return this.items.pop();
    this.swap(0, size - 1);
    const res = this.items.pop();
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
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (temp !== idx) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

var SortedStack = function () {
  this.items = [];
  this.pq = new PQ();
  this.delayDelete = new Map();
};

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  while (
    !this.isEmpty() &&
    this.delayDelete.has(this.items[this.items.length - 1])
  ) {
    const pop = this.items.pop();
    this.delayDelete.set(pop, this.delayDelete.get(pop) - 1);
    if (this.delayDelete.get(pop) === 0) this.delayDelete.delete(pop);
  }
  this.items.push(val);
  this.pq.insert(val);
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  const res = this.pq.poll();
  this.delayDelete.set(res, (this.delayDelete.get(res) | 0) + 1);
  return res;
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  if (this.isEmpty()) return -1;
  return this.pq.peek();
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.pq.isEmpty();
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */

var SortedStack = function () {
  this.pq = new PQ();
};

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  this.pq.insert(val);
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  this.pq.poll();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  if (this.isEmpty()) return -1;
  return this.pq.peek();
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.pq.isEmpty();
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */

var SortedStack = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  // 用stack1存储递减的元素
  while (!this.isEmpty() && this.peek() < val) {
    this.stack2.push(this.pop());
  }
  this.stack1.push(val);
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  return this.stack1.pop();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  if (this.isEmpty()) return -1;
  return this.stack1[this.stack1.length - 1];
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.stack1.length === 0;
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
