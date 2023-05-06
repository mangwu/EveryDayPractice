/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-06 08:37:51                                                  *
 * @LastModifiedDate: 2023-05-06 09:38:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 croakOfFrogs，它表示不同青蛙发出的蛙鸣声（字符串 "croak" ）的组合。
// 由于同一时间可以有多只青蛙呱呱作响，所以 croakOfFrogs 中会混合多个 “croak” 。

// 请你返回模拟字符串中所有蛙鸣所需不同青蛙的最少数目。

// 要想发出蛙鸣 "croak"，青蛙必须 依序 输出 ‘c’, ’r’, ’o’, ’a’, ’k’ 这 5 个字母。
// 如果没有输出全部五个字母，那么它就不会发出声音。如果字符串 croakOfFrogs 不是由若干有效的 "croak" 字符混合而成，请返回 -1 。

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  const n = croakOfFrogs.length;
  if (n % 5 !== 0) return -1;
  let res = -1;
  let curC = 0;
  const stack = [];
  for (const ch of croakOfFrogs) {
    stack.push(ch);
    if (ch === "c") {
      curC++;
      res = Math.max(curC, res);
    } else if (ch === "k") {
      const curLen = stack.length;
      if (
        curLen >= 5 &&
        stack[curLen - 2] === "a" &&
        stack[curLen - 3] === "o" &&
        stack[curLen - 4] === "r" &&
        stack[curLen - 5] === "c"
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        curC--;
      }
    }
  }
  return stack.length === 0 ? res : -1;
};

// 上面解法错误，因为croakOfFrogs并不符合栈结构

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  const n = croakOfFrogs.length;
  if (n % 5 !== 0) return -1;
  const m = new Array(4).fill(0);
  let curC = 0;
  let res = 0;
  for (const ch of croakOfFrogs) {
    if (ch === "c") {
      m[0]++;
      curC++;
      res = Math.max(res, curC);
    } else if (ch === "r") {
      if (m[0] > 0) {
        m[0]--;
        m[1]++;
      } else return -1;
    } else if (ch === "o") {
      if (m[1] > 0) {
        m[1]--;
        m[2]++;
      } else return -1;
    } else if (ch === "a") {
      if (m[2] > 0) {
        m[2]--;
        m[3]++;
      } else return -1;
    } else {
      m[3]--;
      curC--;
    }
  }
  if (m.reduce((pre, cur) => pre + cur) > 0) return -1;
  return res;
};

// crcoraocrocroakakcroacrcroakoakkckraoakk
