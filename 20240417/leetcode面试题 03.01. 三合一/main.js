// 三合一。描述如何只用一个数组来实现三个栈。

// 你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。stackNum表示栈下标，value表示压入的值。

// 构造函数会传入一个stackSize参数，代表每个栈的大小。

/**
 * @param {number} stackSize
 */
var TripleInOne = function (stackSize) {
  this.stack = [];
  this.capacity = stackSize;
  this.curSizes = [0, 0, 0];
};
/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.sizeAt = function (stackNum) {
  return this.curSizes[stackNum];
};
/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function (stackNum, value) {
  if (this.sizeAt(stackNum) < this.capacity) {
    // 可以入栈
    const idx = this.curSizes[stackNum] * 3 + stackNum;
    this.stack[idx] = value;
    this.curSizes[stackNum]++;
  }
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function (stackNum) {
  if (!this.isEmpty(stackNum)) {
    // 有值可出栈
    const idx = --this.curSizes[stackNum] * 3 + stackNum;
    const res = this.stack[idx];
    delete this.stack[idx];
    return res;
  }
  return -1;
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function (stackNum) {
  if (!this.isEmpty(stackNum)) {
    const idx = (this.curSizes[stackNum] - 1) * 3 + stackNum;
    return this.stack[idx];
  }
  return -1;
};

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function (stackNum) {
  return this.sizeAt(stackNum) === 0;
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */

[0],
  [0],
  [1],
  [1],
  [2],
  [0],
  [0],
  [0],
  [1],
  [1],
  [2],
  [0],
  [0],
  [1],
  [1],
  [2],
  [1],
  [1],
  [0],
  [2],
  [1],
  [1],
  [0],
  [1],
  [2],
  [2],
  [2],
  [2],
  [0],
  [2],
  [0],
  [0];
[38, 59, 31, 6, 37, 25, 30, 28, 63, 35, -1, 48, 36, -1, 12, 55, -1, -1, 62];
