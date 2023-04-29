/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-29 21:47:33                                                  *
 * @LastModifiedDate: 2023-04-29 22:30:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 word ，字符串只包含小写英文字母。你需要选择
//  一个 下标并 删除 下标处的字符，使得 word 中剩余每个字母出现 频率 相同。

// 如果删除一个字母后，word 中剩余所有字母的出现频率都相同，那么返回 true ，
// 否则返回 false 。

// 注意：

// 字母 x 的 频率 是这个字母在字符串中出现的次数。
// 你 必须 恰好删除一个字母，不能一个字母都不删除。

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const hash = new Map();
  for (const ch of word) {
    hash.has(ch) ? hash.set(ch, hash.get(ch) + 1) : hash.set(ch, 1);
  }
  const n = word.length;
  const size = hash.size; // 有 size 个不同的字符
  if (size === 1) return true;
  // 删除一个保证频率相同只有两种情况
  // 1. 删除的那一个是只有1个的字符，其他字符都相等
  // 2. 删除的那一个是比其他字符数量多一个的字符，其他字符都相等

  if ((n - 1) % (size - 1) === 0) {
    // 第一种情况
    const first = hash.get(word[0]);
    let isConform = true;
    if (first === 1) {
      // 可以删掉，判断其他字符情况
      const second = hash.get(word[1]);
      for (const [key, value] of hash) {
        if (key == word[0]) continue;
        if (value !== second) {
          // 不符合情况
          isConform = false;
          break;
        }
      }
    } else {
      // first就是相等的数量
      let diff = 0;
      for (const [_key, value] of hash) {
        if (value === 1) {
          diff++;
          continue;
        }
        if (value !== first) {
          // 不符合情况
          isConform = false;
          break;
        }
      }
      if (diff !== 1) isConform = false;
    }
    console.log("---1:", first, isConform);
    if (isConform) return true;
  } 
  if ((n - 1) % size === 0) { // 两种情况不是互斥的
    // 第二种情况
    let first = 0;
    let nums = [];
    let second = 0;
    let isConform = true;
    for (const [key, value] of hash) {
      if (first === 0) {
        first = value;
        nums[0] = 1;
        continue;
      }
      if (value === first) {
        nums[0]++;
        continue;
      }
      if (second === 0) {
        second = value;
        nums[1] = 1;
        continue;
      }
      if (value === second) {
        nums[1]++;
        continue;
      }
      isConform = false;
      break;
    }
    console.log("---2:", first, second, nums, isConform);
    if (
      isConform &&
      Math.abs(first - second) === 1 &&
      (nums[0] === 1 || nums[1] === 1)
    ) {
      return true;
    }
  }
  return false;
};
