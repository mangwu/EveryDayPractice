/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-01 15:23:22                                                  *
 * @LastModifiedDate: 2022-06-01 15:43:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有一个带有四个圆形拨轮的转盘锁。
// 每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
// 每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

// 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

// 列表 deadends 包含了一组死亡数字，
// 一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

// 字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。

// 0-1-2-3-4-5-6-7-8-9-0

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  if (target == "0000") {
    return 0;
  }
  // 0 - 9 构成的图是一个圆环；
  // 构造一个表用于判断是否遇到死亡密码
  const set = new Set(deadends);
  if (set.has("0000")) {
    return -1;
  }
  // 使用bfs，遍历所有可能
  let pathLen = 1;
  let queue = ["0000"];
  set.add("0000");
  while (queue.length > 0) {
    const nxt = new Set();
    for (const q of queue) {
      for (let i = 0; i < 4; i++) {
        let newNum1 = (Number(q[i]) + 10 + 1) % 10;
        let newNum2 = (Number(q[i]) + 10 - 1) % 10;
        let newS1 = q.substring(0, i) + newNum1 + q.substring(i + 1, 4);
        let newS2 = q.substring(0, i) + newNum2 + q.substring(i + 1, 4);
        if (newS1 == target || newS2 == target) {
          return pathLen;
        }
        if (!set.has(newS1)) {
          nxt.add(newS1);
          set.add(newS1);
        }
        if (!set.has(newS2)) {
          nxt.add(newS2);
          set.add(newS2);
        }
      }
    }
    pathLen++;
    queue = [...nxt];
  }
  return -1;
};
