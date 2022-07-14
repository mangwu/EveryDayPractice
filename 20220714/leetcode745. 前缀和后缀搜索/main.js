/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-14 09:15:25                                                  *
 * @LastModifiedDate: 2022-07-14 10:47:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。

// 实现 WordFilter 类：

// WordFilter(string[] words) 使用词典中的单词 words 初始化对象。
// f(string pref, string suff) 返回词典中具有前缀 prefix 和后缀 suff 的单词的下标。
// 如果存在不止一个满足要求的下标，返回其中 最大的下标 。如果不存在这样的单词，返回 -1 。

/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  const hash = new Map();
  const n = words.length;
  for (let i = 0; i < n; i++) {
    hash.set(words[i], i);
  }
  words.sort();
  this.words = words;
  this.hash = hash;
};

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  // 二分查找，找到第一个满足pref条件的单词
  // 因为满足pref不一定满足suff
  let left = 0;
  let right = this.words.length;
  let ans = -1;
  while (left < right) {
    let mid = (left + right) >> 1;
    let target = this.words[mid];
    if (target.startsWith(pref)) {
      right = mid;
      continue;
    }
    if (pref.localeCompare(target) != -1) {
      // target排在pref的前面了(包括pref等于target的情况)
      left++;
    } else if (!target.startsWith(pref)) {
      // target排在pref的后面了
      right--;
    }
  }
  while (left < this.words.length && this.words[left].startsWith(pref)) {
    if (this.words[left].endsWith(suff)) {
      ans = Math.max(this.hash.get(this.words[left]), ans);
    }
    left++;
  }
  return ans;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */

// ab cd

// ["ab","abc","abcd","abce","abced","abecd", "abedcd"]

// 上述使用二分查找，当时本质上仍然需要在方法中进行一次遍历
// f方法的时间复杂度为O(n) 因为调用m次，总时间复杂度为O(mn)

/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  // 可以初始构建一个words的所有前缀+中间值+后缀的情况
  const hash = new Map();
  const n = words.length;
  for (let i = 0; i < n; i++) {
    const len = words[i].length;
    // j k 分别表示前缀和后缀长度
    for (let j = 1; j <= len; j++) {
      for (let k = 1; k <= len; k++) {
        hash.set(
          words[i].substring(0, j) + "#" + words[i].substring(len - k, len),
          i
        );
      }
    }
  }
  this.hash = hash;
};

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  if (this.hash.has(pref + "#" + suff)) {
    return this.hash.get(pref + "#" + suff);
  }
  return -1;
};
