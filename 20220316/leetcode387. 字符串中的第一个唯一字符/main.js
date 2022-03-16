/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-16 19:37:30                                                  *
 * @LastModifiedDate: 2022-03-16 20:04:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 需要遍历完才知道那一个是第一个不重复的字符
  // 使用一个set记录每个字符串
  // 使用另一个hash记录当前只有一个数量的字符和其索引
  const hash = new Map();
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      // 没有就需要记录到hash和set中
      hash.set(s[i], i);
      set.add(s[i]);
    } else {
      // 有就需要删除hash中的
      hash.delete(s[i]);
    }
  }
  let ans = -1;
  // 遍历hash
  for (const [_key, value] of hash) {
    // hash为空就不会遍历
    ans = value;
    break;
  }
  return ans;
};
