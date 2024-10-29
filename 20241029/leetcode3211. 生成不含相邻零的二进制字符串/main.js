/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-29 10:42:06                                                  *
 * @LastModifiedDate: 2024-10-29 11:18:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n。

// 如果一个二进制字符串 x 的所有长度为 2 的
// 子字符串
// 中包含 至少 一个 "1"，则称 x 是一个 有效 字符串。

// 返回所有长度为 n 的 有效 字符串，可以以任意顺序排列。

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
  // 长度为n的二进制字符串中不含有连续的0
  // 广度优先搜索
  let queue = ["0", "1"];
  let level = 1;
  while (level < n) {
    const nxt = [];
    for (const q of queue) {
      if (q[level - 1] === "0") {
        nxt.push(q + "1");
      } else {
        nxt.push(q + "0");
        nxt.push(q + "1");
      }
    }
    level++;
    queue = nxt;
  }
  return queue;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
  // 长度为n的二进制字符串中不含有连续的0
  // 广度优先搜索
  let queue = [0, 1];
  let level = 1;
  while (level < n) {
    const nxt = [];
    for (const q of queue) {
      if ((q & 1) === 0) {
        nxt.push((q << 1) + 1);
      } else {
        nxt.push(q << 1);
        nxt.push((q << 1) + 1);
      }
    }
    level++;
    queue = nxt;
  }
  return queue.map((v) => v.toString(2).padStart(n, 0));
};
