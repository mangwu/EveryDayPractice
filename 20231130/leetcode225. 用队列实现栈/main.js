// 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

// 实现 MyStack 类：

// void push(int x) 将元素 x 压入栈顶。
// int pop() 移除并返回栈顶元素。
// int top() 返回栈顶元素。
// boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 

// 注意：

// 你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
// 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。

class MyQueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.length = 0;
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  enqueue(...eles) {
    for (const ele of eles) this.items[this.lowest + this.length++] = ele;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest];
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const res = this.items[this.lowest++];
    delete this.items[this.lowest - 1];
    this.length--;
    return res;
  }
}

// 只用一个队列实现栈
var MyStack = function () {
  this.queue = new MyQueue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  let n = this.queue.size();
  this.queue.enqueue(x);
  // 将queue栈中的元素全部出队然后重新入队到queue中
  while (n) {
    this.queue.enqueue(this.queue.dequeue());
    n--;
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // queue1始终是栈顶元素在首位的
  return this.queue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.isEmpty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
