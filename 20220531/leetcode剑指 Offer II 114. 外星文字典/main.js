/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-31 08:50:41                                                  *
 * @LastModifiedDate: 2022-05-31 16:06:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现有一种使用英语字母的外星文语言，这门语言的字母顺序与英语顺序不同。

// 给定一个字符串列表 words ，作为这门语言的词典，words 中的字符串已经 按这门新语言的字母顺序进行了排序 。

// 请你根据该词典还原出此语言中已知的字母顺序，并 按字母递增顺序 排列。若不存在合法字母顺序，
// 返回 "" 。若存在多种可能的合法字母顺序，返回其中 任意一种 顺序即可。

// 字符串 s 字典顺序小于 字符串 t 有两种情况：

// 在第一个不同字母处，如果 s 中的字母在这门外星语言的字母顺序中位于 t 中字母之前，那么 s 的字典顺序小于 t 。
// 如果前面 min(s.length, t.length) 字母都相同，那么 s.length < t.length 时，s 的字典顺序也小于 t 。

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  let intervalNum = 0.5;
  const hash = new Map();
  const set = new Set();
  const patch = [];
  let n = words.length;
  for (let i = 0; i < n; i++) {
    if (hash.has(words[i][0])) {
      if (hash.get(words[i][0]) + 1 !== i) {
        return "";
      }
    }
    hash.set(words[i][0], i);
  }
  for (const ch of words[0]) {
    set.add(ch);
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < words[i].length; j++) {
      // 前面j个字符相同
      if (
        words[i - 1].substring(0, j) == words[i].substring(0, j) &&
        words[i - 1].length > j
      ) {
        if (words[i][j] == words[i - 1][j]) {
          continue;
        }
        // 比较前一个单词相同位置的字符
        const num = hash.get(words[i - 1][j]);
        if (num == undefined) {
          // 记录关系
          patch.push([words[i][j], words[i - 1][j]]);
        } else {
          if (hash.has(words[i][j])) {
            if (hash.get(words[i][j]) < num) {
              return "";
            }
          } else {
            hash.set(words[i][j], num + intervalNum);
            intervalNum /= 2;
          }
        }
      }
      set.add(words[i][j]);
    }
  }
  let pre = patch.length;
  const others = [];
  while (pre > 0) {
    for (let i = 0; i < n; i++) {
      if (hash.has(patch[0]) && hash.has(patch[1])) {
        if (hash.get(patch[0]) < hash.get(patch[1])) {
          return "";
        }
        // 删除
        patch.splice(i, 1);
        pre--;
        i--;
      } else if (hash.has(patch[0]) && !hash.has(patch[1])) {
        // 有patch[0]，没patch[1]
        hash.set(patch[1], hash.get(patch[0]) - intervalNum);
        intervalNum /= 2;
        patch.splice(i, 1);
        pre--;
        i--;
      } else if (!hash.has(patch[0]) && hash.has(patch[1])) {
        // 有patch[1]没patch[0]
        hash.set(patch[0], hash.get(patch[1]) + intervalNum);
        intervalNum /= 2;
        patch.splice(i, 1);
        pre--;
        i--;
      }
    }
    if (pre == patch.length) {
      break;
    }
  }
  // 剩余的patch
  for (const p of patch) {
    set.delete(p[0]);
    set.delete(p[1]);
    let idx1 = others.indexOf(p[0]);
    let idx2 = others.indexOf(p[1]);
    if (idx1 == -1 && idx2 == -1) {
      others.push(p[1]);
      others.push(p[0]);
    } else if (idx1 !== -1 && idx2 == -1) {
      // 有p[0]没p[1], p[0]在p[1]后
      others.splice()
    }
  }
  const ans = [];
  for (const [key, val] of hash) {
    let left = 0;
    let right = ans.length - 1;
    // [left, right]
    while (left <= right) {
      // 找到第一个比val大的值
      let mid = (left + right) >> 1;
      if (hash.get(ans[mid]) < val) {
        // val比中间值大，在右边
        left = mid + 1;
      } else {
        // val比中间值小，在左边
        right = mid - 1;
      }
    }
    ans.splice(right + 1, 0, key);
    set.delete(key);
  }
  for (const item of set) {
    ans.push(item);
  }
  return ans.join("");
};

//  ["wrt","wrf","er","ett","rftt"]
// "wertf"
alienOrder(["wrt", "wrf", "er", "ett", "rftt"]);

// decfklga

// ["dea","dcg","dkal","eela","efkla","cfk","kddea","kcdd","gdfa","gef","adl"]

// ["a", "b"]

// [a, b] [c, d] [b,c] []
// badc