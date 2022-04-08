/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-08 14:44:46                                                  *
 * @LastModifiedDate: 2022-04-08 17:27:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
// （例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 进阶：

// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。
// 在这种情况下，你会怎样改变代码？

// 致谢：

// 特别感谢 @pbrother 添加此问题并且创建所有测试用例。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // 特性：子序列的顺序
  const lens = s.length;
  const len = t.length;
  if (lens > len) {
    return false;
  }
  if (lens == len) {
    if (s == t) {
      return true;
    } else {
      return false;
    }
  }
  if (lens == 0) {
    return true;
  }
  // 构建t的alpha表
  const alpha = new Array(26).fill(0).map((_v) => []);
  for (let i = 0; i < len; i++) {
    alpha[t[i].charCodeAt() - "a".charCodeAt()].push(i);
  }
  let pre = alpha[s[0].charCodeAt() - "a".charCodeAt()];
  if (pre.length == 0) {
    return false;
  }
  pre = pre[0];
  for (let i = 1; i < lens; i++) {
    let cur = alpha[s[i].charCodeAt() - "a".charCodeAt()];
    if (cur.length == 0) {
      return false;
    }
    let j = 0;
    for (; j < cur.length; j++) {
      if (cur[j] > pre) {
        // 第一个比pre大的数
        pre = cur[j];
        break;
      }
    }
    if (j == cur.length) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const lens = s.length;
  const lent = t.length;
  if (lens > lent) {
    return false;
  }
  if (lens == lent) {
    if (s == t) {
      return true;
    } else {
      return false;
    }
  }
  if (lens == 0) {
    return true;
  }
  // 双指针，不使用额外空间
  let low = 0; // 指向s中的字符
  let fast = 0; // 指向t中的字符
  while (low < lens && fast < lent) {
    if (s[low] == t[fast]) {
      low++;
      fast++;
    } else {
      fast++;
    }
  }
  return low == lens;
};

// 使用双指针看起来时间复杂度未O(m)(t的长度),实际上对于在t固定的情况下判断很多个s是否是t的子序列反而更不适用
// 在t固定的情况下，使用第一种方式反而更好，但是其时间复杂度具有不确定性，最坏的情况下是O(m*n);
// 本题还有动态规划解法，避免双指针做大量无意义的字符匹配，动态规划能保存匹配过一次后的状态，避免下次继续做无意义匹配

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // 使用动态规划记录字符串t的每个字符位置往后每一个字符（26个）出现的位置
  // 如果该位置的字符就是要找的字符，那么dp[i][j] = i
  // 否则dp[i][j] = d[i+1][j];
  // 对于边界状态dp[m - 1][...]，可以将dp[m][..]置为m
  // 这样如果dp[i][j]==m则表示该位置后没有j字符
  // 再判断s是否是子序列时，遍历s，通过dp跳转，遇到值为m则表示没有后序字符，不是子序列
  // 能成功遍历完成就是子序列
  const lens = s.length;
  const lent = t.length;
  if (lens > lent) {
    return false;
  }
  if (lens == lent) {
    if (s == t) {
      return true;
    } else {
      return false;
    }
  }
  if (lens == 0) {
    return true;
  }
  const dp = new Array(lent + 1).fill(0).map((_v) => new Array(26).fill(0));
  // 边界值填充lent长度
  for (let i = 0; i < 26; i++) {
    dp[lent][i] = lent;
  }
  // 开始从后向前遍历
  for (let i = lent - 1; i >= 0; i--) {
    const chcode = t[i].charCodeAt() - "a".charCodeAt();
    for (let j = 0; j < 26; j++) {
      if (chcode == j) {
        dp[i][j] = i;
      } else {
        //
        dp[i][j] = dp[i + 1][j];
      }
    }
  }
  // 开始遍历s
  let pre = 0; // 记录字符位置
  for (let i = 0; i < lens; i++) {
    const idx = s[i].charCodeAt() - "a".charCodeAt();
    // 从第一个开始找起，第一个字符往后的和s[i]相同的字符
    if (dp[pre][idx] == lent) {
      // 后面没有该字符
      return false;
    }
    // 找到了字符s[i]所在的索引dp[pre][idx]，从下一个开始
    pre = dp[pre][idx] + 1;
  }
  return true;
};
