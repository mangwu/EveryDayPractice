// 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。

// 实现 MovingAverage 类：

// MovingAverage(int size) 用窗口大小 size 初始化对象。
// double next(int val) 成员函数 next 每次调用的时候都会往滑动窗口增加一个整数，
// 请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.curSize = 0;
  this.size = size;
  this.data = [];
  this.sum = 0;
  this.header = 0;
  this.tailer = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.curSize < this.size) {
    this.data.push(val);
    this.sum += val;
    this.curSize++;
    this.header++;
    this.header = this.header % this.size;
    return this.sum / this.curSize;
  } else {
    this.sum -= this.data[this.tailer];
    this.tailer++;
    this.tailer = this.tailer % this.size;
    this.sum += val;
    this.data[this.header] = val;
    this.header++;
    this.header = this.header % this.size;
    return this.sum / this.size;
  }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
