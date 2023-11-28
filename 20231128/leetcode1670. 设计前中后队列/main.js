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

var FrontMiddleBackQueue = function () {
  // 分成两个部分
  this.frontItems = {};
  this.backItems = {};
  this.frontLength = 0;
  this.backLength = 0;
  this.frontIdx = 0; // 第一个位置
  this.backIdx = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.frontItems[this.frontIdx--] = val;
  this.frontLength++;
  if (this.frontLength > this.backLength)
    // 前半部分长度必须小于等于后半部分
    this.backUnshift(this.frontPop());
};
/**
 * @description 返回前半部分的尾部元素
 * @return {number}
 */
FrontMiddleBackQueue.prototype.frontPop = function () {
  if (!this.frontLength) return -1;
  const res = this.frontItems[this.frontIdx + this.frontLength--];
  delete this.frontItems[this.frontIdx + this.frontLength + 1];
  return res;
};
/**
 * @description 为前半部分的后面添加元素
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.frontPush = function (val) {
  this.frontItems[this.frontIdx + ++this.frontLength] = val;
};
/**
 * @description 返回后半部分的头部元素
 * @return {number}
 */
FrontMiddleBackQueue.prototype.backShift = function () {
  if (!this.backLength) return -1;
  const res = this.backItems[this.backIdx++ + 1];
  delete this.backItems[this.backIdx];
  this.backLength--;
  return res;
};
/**
 * @description 为后半部分的前面添加元素
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.backUnshift = function (val) {
  this.backItems[this.backIdx--] = val;
  this.backLength++;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  // 优先加入到后半部分
  if (this.backLength > this.frontLength) this.frontPush(val);
  else this.backUnshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.backItems[this.backIdx + ++this.backLength] = val;
  if (this.backLength > this.frontLength + 1)
    // 后半部分的长度与前半部分长度之差不能超过1
    this.frontPush(this.backShift());
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (!this.frontLength) {
    if (!this.backLength) return -1;
    return this.backShift();
  }
  const res = this.frontItems[++this.frontIdx];
  delete this.frontItems[this.frontIdx];
  this.frontLength--;
  if (this.backLength > this.frontLength + 1)
    // 后半部分的长度与前半部分长度之差不能超过1
    this.frontPush(this.backShift());
  return res;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.frontLength === this.backLength) return this.frontPop();
  return this.backShift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (!this.backLength) return -1;
  const res = this.backItems[this.backIdx + this.backLength--];
  delete this.backItems[this.backIdx + this.backLength + 1];
  if (this.backLength < this.frontLength)
    // 前半部分长度必须小于等于后半部分
    this.backUnshift(this.frontPop());
  return res;
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
