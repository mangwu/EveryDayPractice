// 堆盘子。设想有一堆盘子，堆太高可能会倒下来。因此，在现实生活中，盘子堆到一定高度时，我们就会另外堆一堆盘子。请实现数据结构SetOfStacks，模拟这种行为。SetOfStacks应该由多个栈组成，并且在前一个栈填满时新建一个栈。此外，SetOfStacks.push()和SetOfStacks.pop()应该与普通栈的操作方法相同（也就是说，pop()返回的值，应该跟只有一个栈时的情况一样）。 进阶：实现一个popAt(int index)方法，根据指定的子栈，执行pop操作。

// 当某个栈为空时，应当删除该栈。当栈中没有元素或不存在该栈时，pop，popAt 应返回 -1.

/**
 * @param {number} cap
 */
var StackOfPlates = function (cap) {
  this.stacks = [];
  this.cap = cap;
};
/**
 * @return {number}
 */
StackOfPlates.prototype.size = function () {
  return this.stacks.length;
};
/**
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function (val) {
  const size = this.size();
  if (this.cap === 0) return;
  if (size === 0) this.stacks.push([val]);
  else if (this.stacks[size - 1].length < this.cap) {
    this.stacks[size - 1].push(val);
  } else this.stacks.push([val]);
};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function () {
  const size = this.size();
  if (size === 0) return -1;
  const top = this.stacks[size - 1];
  const res = top.pop();
  if (!top.length) this.stacks.pop();
  return res;
};

/**
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function (index) {
  const size = this.size();
  if (index >= size) return -1;
  const atStack = this.stacks[index];
  const res = atStack.pop();
  if (!atStack.length) this.stacks.splice(index, 1);
  return res;
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */

[
  "StackOfPlates",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
];
[
  [0],
  [2],
  [8],
  [56],
  [1],
  [39],
  [40],
  [44],
  [63],
  [11],
  [38],
  [20],
  [55],
  [25],
  [14],
  [11],
  [1],
  [20],
  [16],
  [6],
  [18],
  [3],
  [39],
  [45],
  [2],
  [22],
  [64],
  [6],
  [30],
  [39],
  [3],
  [19],
  [63],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
