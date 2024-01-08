/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-08 14:08:21                                                  *
 * @LastModifiedDate: 2024-01-08 14:42:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 共有 n 名小伙伴一起做游戏。小伙伴们围成一圈，按 顺时针顺序 从 1 到 n 编号。确切地说，从第 i 名小伙伴顺时针移动一位会到达第 (i+1) 名小伙伴的位置，其中 1 <= i < n ，从第 n 名小伙伴顺时针移动一位会回到第 1 名小伙伴的位置。

// 游戏遵循如下规则：

// 从第 1 名小伙伴所在位置 开始 。
// 沿着顺时针方向数 k 名小伙伴，计数时需要 包含 起始时的那位小伙伴。逐个绕圈进行计数，一些小伙伴可能会被数过不止一次。
// 你数到的最后一名小伙伴需要离开圈子，并视作输掉游戏。
// 如果圈子中仍然有不止一名小伙伴，从刚刚输掉的小伙伴的 顺时针下一位 小伙伴 开始，回到步骤 2 继续执行。
// 否则，圈子中最后一名小伙伴赢得游戏。
// 给你参与游戏的小伙伴总数 n ，和一个整数 k ，返回游戏的获胜者。

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
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  // 解法之一，队列
  const q = new Q();
  for (let i = 1; i <= n; i++) {
    q.enqueue(i);
  }
  while (q.size() > 1) {
    for (let i = 0; i < k - 1; i++) {
      q.enqueue(q.dequeue());
    }
    q.dequeue();
  }
  return q.peek();
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  // 数学倒推，已知最后一次删除后，胜利的玩家的索引为0
  // 那么它在上一轮的索引就是右k位后取上一轮长度的模
  // cur = (cur + k)  % (i + 1)
  let cur = 0;
  for (let i = 1; i < n; i++) {
    cur = (cur + k) % (i + 1);
  }
  return cur + 1; // cur是最终胜利玩家的索引
};

// 1 2 3 4 5
//     3 4 5 1
//         5 1 3
//             3 5
//                 3
