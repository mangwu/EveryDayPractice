// 请你设计并实现一个能够对其中的值进行跟踪的数据结构，并支持对频率相关查询进行应答。

// 实现 FrequencyTracker 类：

// FrequencyTracker()：使用一个空数组初始化 FrequencyTracker 对象。
// void add(int number)：添加一个 number 到数据结构中。
// void deleteOne(int number)：从数据结构中删除一个 number 。数据结构 可能不包含 number ，在这种情况下不删除任何内容。
// bool hasFrequency(int frequency): 如果数据结构中存在出现 frequency 次的数字，则返回 true，否则返回 false。

var FrequencyTracker = function () {
  this.nums = new Map(); // key: number，value：frenq
  this.frenq = new Map(); // key: frenq， value：count
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function (number) {
  let cur = this.nums.get(number) | 0;
  this.nums.set(number, cur + 1);
  if (this.frenq.has(cur)) {
    this.frenq.get(cur) === 1
      ? this.frenq.delete(cur)
      : this.frenq.set(cur, this.frenq.get(cur) - 1);
  }
  cur++;
  this.frenq.set(cur, (this.frenq.get(cur) | 0) + 1);
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function (number) {
  if (!this.nums.has(number)) return;
  let cur = this.nums.get(number);
  if (cur === 1) this.nums.delete(number);
  else this.nums.set(number, cur - 1);
  this.frenq.get(cur) === 1
    ? this.frenq.delete(cur)
    : this.frenq.set(cur, this.frenq.get(cur) - 1);
  cur--;
  cur && this.frenq.set(cur, (this.frenq.get(cur) | 0) + 1);
};

/**
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function (frequency) {
  return this.frenq.has(frequency);
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
