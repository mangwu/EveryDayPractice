/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-21 14:04:08                                                  *
 * @LastModifiedDate: 2025-02-21 14:24:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 编写一个算法来判断一个数 n 是不是快乐数。

// 「快乐数」 定义为：

// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set([n]);
  while (n !== 1) {
    const nextNum = getNextNum(n);
    if (nextNum === 1) break;
    if (set.has(nextNum)) return false;
    set.add(nextNum);
    n = nextNum;
  }
  return true;
};

function getNextNum(n) {
  let sum = 0;
  while (n) {
    const a = n % 10;
    sum += a * a;
    n = Math.floor(n / 10);
  }
  return sum;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow = n;
  let fast = getNextNum(n);
  while (fast !== 1) {
    slow = getNextNum(slow);
    fast = getNextNum(getNextNum(fast));
    if (slow === fast) return false;
  }
  return true;
};

// 快慢指针
