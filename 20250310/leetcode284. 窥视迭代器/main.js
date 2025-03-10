// 请你在设计一个迭代器，在集成现有迭代器拥有的 hasNext 和 next 操作的基础上，还额外支持 peek 操作。

// 实现 PeekingIterator 类：

// PeekingIterator(Iterator<int> nums) 使用指定整数迭代器 nums 初始化迭代器。
// int next() 返回数组中的下一个元素，并将指针移动到下个元素处。
// bool hasNext() 如果数组中存在下一个元素，返回 true ；否则，返回 false 。
// int peek() 返回数组中的下一个元素，但 不 移动指针。
// 注意：每种语言可能有不同的构造函数和迭代器 Iterator，但均支持 int next() 和 boolean hasNext() 函数。

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.nums = [];
  this.p = 0;
  while (iterator.hasNext()) {
    this.nums.push(iterator.next());
  }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  return this.nums[this.p];
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  return this.nums[this.p++];
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.p < this.nums.length;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
