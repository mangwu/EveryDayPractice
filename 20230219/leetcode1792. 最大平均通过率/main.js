/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-19 17:23:03                                                  *
 * @LastModifiedDate: 2023-02-20 00:04:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一所学校里有一些班级，每个班级里有一些学生，现在每个班都会进行一场期末考试。给你一个二维数组 classes ，其中 classes[i] = [passi, totali] ，表示你提前知道了第 i 个班级总共有 totali 个学生，其中只有 passi 个学生可以通过考试。

// 给你一个整数 extraStudents ，表示额外有 extraStudents 个聪明的学生，他们 一定 能通过任何班级的期末考。你需要给这 extraStudents 个学生每人都安排一个班级，使得 所有 班级的 平均 通过率 最大 。

// 一个班级的 通过率 等于这个班级通过考试的学生人数除以这个班级的总人数。平均通过率 是所有班级的通过率之和除以班级数目。

// 请你返回在安排这 extraStudents 个学生去对应班级后的 最大 平均通过率。与标准答案误差范围在 10-5 以内的结果都会视为正确结果。
/*
 **
 * @class PQ 优先队列
 */
class PQ {
  // 默认小根堆
  constructor(compare = (a, b) => a - b, data = []) {
    this.data = data;
    this.size = data.length;
    this.compare = compare;
  }
  // 返回队尾元素
  tail() {
    return this.size > 0 ? this.data[this.size - 1] : null;
  }
  // 返回队首元素
  head() {
    return this.size > 0 ? this.data[0] : null;
  }
  // 出队
  pop() {
    if (this.size > 0) {
      this.size--;
      return this.data.pop();
    }
  }
  // 入队
  push(val) {
    // 二分插入
    this.binaryInsert(this.size++, val);
  }
  binaryInsert(idx, val) {
    // 查找范围 [0, size)
    let left = 0;
    let right = idx;
    // 循环查找
    while (left < right) {
      // 中间索引
      let mid = Math.floor((left + right) / 2);
      // 找到比val大的增长率然后插入
      if (this.compare(this.data[mid], val) < 0) {
        // mid 比 val小 取右边 [mid + 1, right)
        left = mid + 1;
      } else {
        // mid 比 val 大 取左边 [left, mid)
        right = mid;
      }
      // 直到left === right ;
    }
    // 插入到left前
    this.data.splice(left, 0, val);
  }
}
/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
  // 增长率大的放后面
  const compare = (a, b) =>
    (a[0] + 1) / (a[1] + 1) -
    a[0] / a[1] -
    ((b[0] + 1) / (b[1] + 1) - b[0] / b[1]);
  classes.sort(compare);
  const pq = new PQ(compare, classes);
  while (extraStudents) {
    const item = pq.pop(); // 当前大的增长率
    item[0]++;
    item[1]++;
    pq.push(item); // 重新放进去
    extraStudents--;
  }
  let res = 0;
  for (const item of pq.data) {
    res += item[0] / item[1];
  }
  return res / pq.size;
};

// x1 / y1 + x2 / y2
