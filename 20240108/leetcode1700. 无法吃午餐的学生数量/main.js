/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-08 13:51:47                                                  *
 * @LastModifiedDate: 2024-01-08 14:04:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 学校的自助午餐提供圆形和方形的三明治，分别用数字 0 和 1 表示。所有学生站在一个队列里，每个学生要么喜欢圆形的要么喜欢方形的。
// 餐厅里三明治的数量与学生的数量相同。所有三明治都放在一个 栈 里，每一轮：

// 如果队列最前面的学生 喜欢 栈顶的三明治，那么会 拿走它 并离开队列。
// 否则，这名学生会 放弃这个三明治 并回到队列的尾部。
// 这个过程会一直持续到队列里所有学生都不喜欢栈顶的三明治为止。

// 给你两个整数数组 students 和 sandwiches ，其中 sandwiches[i] 是栈里面第 i​​​​​​ 个三明治的类型（i = 0 是栈的顶部）， students[j] 是初始队列里第 j​​​​​​ 名学生对三明治的喜好（j = 0 是队列的最开始位置）。请你返回无法吃午餐的学生数量。

class Q {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.count = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest];
  }
  enqueue(value) {
    this.items[this.lowest + this.count++] = value;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const res = this.items[this.lowest++];
    delete this.items[this.lowest - 1];
    this.count--;
    return res;
  }
}

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const studentQ = new Q();
  for (const student of students) studentQ.enqueue(student);
  let kirai = 0;
  sandwiches.reverse();
  while (!studentQ.isEmpty()) {
    if (studentQ.peek() !== sandwiches[sandwiches.length - 1]) {
      kirai++;
      studentQ.enqueue(studentQ.dequeue());
      if (kirai === studentQ.size()) return kirai;
    } else {
      studentQ.dequeue();
      sandwiches.pop();
      kirai = 0;
    }
  }
  return 0;
};
