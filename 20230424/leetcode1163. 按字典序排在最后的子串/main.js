/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-24 08:52:55                                                  *
 * @LastModifiedDate: 2023-04-24 14:24:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，找出它的所有子串并按字典序排列，返回排在最后的那个子串。

/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function (s) {
  const hash = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    hash.has(s[i]) ? hash.get(s[i]).push(i) : hash.set(s[i], [i]);
  }
  let arr = [];
  const A = "a".charCodeAt();
  for (let i = 26; i >= 0; i--) {
    // 从z-a遍历
    const char = String.fromCharCode(A + i);
    if (hash.has(char)) {
      arr = hash.get(char).slice();
      break;
    }
  }
  // 处理arr中的连续字符
  let maxLen = 1;
  const m = arr.length;
  let newArr = [];
  for (let i = 0; i < m; i++) {
    let cur = 1;
    let start = i;
    while (i + 1 < m && arr[i] + 1 === arr[i + 1]) {
      i++;
      cur++;
    }
    if (cur > maxLen) {
      maxLen = cur;
      newArr = [arr[start]];
    } else if (cur === maxLen) {
      newArr.push(arr[start]);
    }
  }
  while (newArr.length !== 1) {
    let add = maxLen;
    let maxChar = "a";
    let nxtArr = [];
    for (const item of newArr) {
      const idx = item + add;
      if (idx >= n) continue;
      if (s[idx] === maxChar) {
        nxtArr.push(item);
      } else if (s[idx] > maxChar) {
        maxChar = s[idx];
        nxtArr = [item];
      }
    }
    maxLen++;
    newArr = nxtArr;
  }
  return s.substring(newArr[0]);
};

/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function (s) {
  const n = s.length;
  let res = "";
  let cur = "";
  for (let i = n - 1; i >= 0; i--) {
    cur = s[i] + cur;
    if (cur > res) {
      // 比较这一方法会因为字符串变长而变慢
      res = cur;
    }
  }
  return res;
};

/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function (s) {
  // 最大字典序字符串一定是后缀字符串
  // 如果结果不是后缀字符串，那么一定找得到以改结果开头的后最字符串比改结果字典序大
  // 如果s的长度为n，那么后缀字符串就有n个，现在问题转换成了从这n个后缀字符串中寻找字典序最大的字符串
  // 暴力方法可能行不通，因为使用比较>符号比较的时间复杂度会因为比较双方的字符串长度而升高
  // 是否有能力去除一些重复比较=>使用双指针
  // 假设i是我们最终要确定的后缀字符串的首字符在s中的索引
  // 现在有一个j，它是另一个后缀字符串的首字符在s中的索引
  // 按照顺序将二者进行比较，从第一个字符开始，假设比较到第k位时，二者不相等，则会出现以下情况
  // s[i+k] < s[j+k]
  //    说明s[i]-s[i+k]之间的后缀字符串都不能作为结果，因为对应的s[j]-s[j+k]的后缀字符串比它字典序大
  //    此时更新i为i+k+1,j为i+1(因为前面的后缀字符串都不满足条件了)
  // s[i+k] > s[j+k]
  //    说明s[j]-s[j+k]之间的后缀字符串都不能作为结果，因为对应的s[i]-s[i+k]的后缀字符串都比它字典序大
  //    此时更新j为j+k+1，i不变，重新比较
  let left = 0;
  let right = 1;
  const n = s.length;
  while (right < n) {
    let k = 0;
    while (right + k < n && s[left + k] === s[right + k]) {
      k++;
    }
    if (right + k === n) break;
    if (s[left + k] < s[right + k]) {
      // 舍弃left-left+k
      left = left + k + 1;
      right = left + 1;
    } else {
      // 设置right - right+k
      right = right + k + 1;
    }
  }
  return s.substring(left);
};
