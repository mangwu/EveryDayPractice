/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-24 16:08:00                                                  *
 * @LastModifiedDate: 2023-08-25 10:05:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Dota2 的世界里有两个阵营：Radiant（天辉）和 Dire（夜魇）

// Dota2 参议院由来自两派的参议员组成。现在参议院希望对一个 Dota2 游戏里的改变作出决定。他们以一个基于轮为过程的投票进行。在每一轮中，每一位参议员都可以行使两项权利中的 一 项：

// 禁止一名参议员的权利：参议员可以让另一位参议员在这一轮和随后的几轮中丧失 所有的权利 。
// 宣布胜利：如果参议员发现有权利投票的参议员都是 同一个阵营的 ，他可以宣布胜利并决定在游戏中的有关变化。
// 给你一个字符串 senate 代表每个参议员的阵营。字母 'R' 和 'D'分别代表了 Radiant（天辉）和 Dire（夜魇）。然后，如果有 n 个参议员，给定字符串的大小将是 n。

// 以轮为基础的过程从给定顺序的第一个参议员开始到最后一个参议员结束。这一过程将持续到投票结束。所有失去权利的参议员将在过程中被跳过。

// 假设每一位参议员都足够聪明，会为自己的政党做出最好的策略，你需要预测哪一方最终会宣布胜利并在 Dota2 游戏中决定改变。输出应该是 "Radiant" 或 "Dire" 。

class Q {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  enqueue(...eles) {
    for (const ele of eles) {
      this.items[this.lowestCount + this.count] = ele;
      this.count++;
    }
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const removeValue = this.items[this.lowestCount++];
    delete this.items[this.lowestCount - 1];
    this.count--;
    return removeValue;
  }
}

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  // 记录字符串中R和D的数量
  let R = 0;
  let D = 0;
  const q = new Q();
  for (const ch of senate) {
    if (ch === "R") R++;
    if (ch === "D") D++;
    q.enqueue(ch);
  }
  let preR = 0;
  let preD = 0;
  while (R && D) {
    const cur = q.dequeue();
    if (cur === "R") {
      // 判断当前R是否被禁止投票
      if (preD) {
        preD--;
        R--;
      } else {
        q.enqueue(cur);
        preR++;
      }
    } else if (cur === "D") {
      // 判断当前D是否被禁止投票
      if (preR) {
        preR--;
        D--;
      } else {
        q.enqueue(cur);
        preD++;
      }
    }
  }
  return D ? "Dire" : "Radiant";
};

// RRDDRDRRDDDDD
// RRDDD
// RD
// R

// DRRDRRDDDRRRRRDDRDRDRRD

// RRRRD
