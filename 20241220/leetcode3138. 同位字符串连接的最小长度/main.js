/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-20 09:05:21                                                  *
 * @LastModifiedDate: 2024-12-20 11:25:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，它由某个字符串 t 和若干 t  的 同位字符串 连接而成。

// 请你返回字符串 t 的 最小 可能长度。

// 同位字符串 指的是重新排列一个单词得到的另外一个字符串，原来字符串中的每个字符在新字符串中都恰好只使用一次。

/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function (s) {
  const aCode = "a".charCodeAt();
  const n = s.length;
  // 1. 计算n的因子
  const factors = getFactor(n);
  // 2. 记录s的前缀字符情况
  const preffix = [new Array(26).fill(0)];
  for (const ch of s) {
    const copy = preffix[preffix.length - 1].slice();
    copy[ch.charCodeAt() - aCode]++;
    preffix.push(copy);
  }
  // 3. 从小到大遍历因子，判断是否能使用因子的大小长度的同位字符串进行
  outer: for (const factor of factors) {
    const whole = preffix[preffix.length - 1];
    const target = [];
    for (const num of whole) {
      // 子字符串长度为factor，需要分成 n / factor份的子字符串
      if (num % (n / factor) !== 0) continue outer;
      target.push(num / (n / factor));
    }
    // 判断是否能满足条件
    for (let i = factor; i <= n; i += factor) {
      const pre = preffix[i - factor];
      const cur = preffix[i];
      for (let i = 0; i < 26; i++) {
        if (cur[i] - pre[i] !== target[i]) continue outer;
      }
    }
    return factor;
  }
  return n;
};

function getFactor(num) {
  const sqrt = Math.sqrt(num);
  const res = [1];
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      const other = num / i;
      res.push(i);
      if (other !== i) res.push(other);
    }
  }
  return res.sort((a, b) => a - b);
}

/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function (s) {
  // 不使用前缀减少空间复杂度，直接通过临时字母表判断
  const n = s.length;
  const factors = getFactor(n);
  const aCode = "a".charCodeAt();
  const check = (m) => {
    // m为子字符串长度
    let preCnt = new Array(26).fill(0);
    for (let i = 0; i < n; i += m) {
      const curCnt = new Array(26).fill(0);
      for (let j = i; j < i + m; j++) {
        curCnt[s[j].charCodeAt() - aCode]++;
      }
      // 存在一个相连子字符串不是同位字符串就返回false
      if (i > 0 && curCnt.some((v, idx) => preCnt[idx] !== v)) return false;
      preCnt = curCnt.slice();
    }
    return true;
  };
  for (const factor of factors) {
    // 子字符串长度为factor
    if (check(factor)) return factor;
  }
  return n;
};
