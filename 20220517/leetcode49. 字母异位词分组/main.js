/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-17 10:12:01                                                  *
 * @LastModifiedDate: 2022-05-17 10:56:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hash = new Map();
  for (const str of strs) {
    const aphla = new Array(26).fill(0);
    for (const ch of str) {
      aphla[ch.charCodeAt() - "a".charCodeAt()]++;
    }
    const aphlaStr = aphla.toString();
    console.log(aphlaStr);
    if (hash.has(aphlaStr)) {
      const arr = hash.get(aphlaStr);
      arr.push(str);
      hash.set(aphlaStr, arr);
    } else {
      hash.set(aphlaStr, [str]);
    }
  }
  let ans = [];
  for (const [_key, val] of hash) {
    ans.push(val);
  }
  return ans;
};

// 数组可以直接作为对象的属性，且对于不同数组对象，
// 只要他们的数组值和大小相同，再获取对象中的值时就可以统一使用

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const o = new Object();
  for (const str of strs) {
    const aphla = new Array(26).fill(0);
    for (const ch of str) {
      aphla[ch.charCodeAt() - "a".charCodeAt()]++;
    }
    o[aphla] ? o[aphla].push(str) : (o[aphla] = [str]);
  }
  return Object.values(o);
};
