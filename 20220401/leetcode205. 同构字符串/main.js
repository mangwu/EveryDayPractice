/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-01 23:28:55                                                  *
 * @LastModifiedDate: 2022-04-02 14:07:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串 s 和 t ，判断它们是否是同构的。

// 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const lens = s.length;
  const lent = t.length;
  if (lens !== lent) {
    return false;
  }
  const hashs = new Map();
  const hasht = new Map();
  for (const ch of s) {
    const num = hashs.get(ch) ? hashs.get(ch) : 0;
    hashs.set(ch, num + 1);
  }
  for (const ch of t) {
    const num = hasht.get(ch) ? hasht.get(ch) : 0;
    hasht.set(ch, num + 1);
  }
  if (hashs.size !== hasht.size) {
    return false;
  }
  const sNum = new Map();
  const tNum = new Map();
  for (const [_key, val] of hashs) {
    const keys = sNum.get(val) ? sNum.get(val) : 0;
    sNum.set(val, keys + 1);
  }
  for (const [_key, val] of hasht) {
    const keys = tNum.get(val) ? tNum.get(val) : 0;
    tNum.set(val, keys + 1);
  }
  if (sNum.size !== tNum.size) {
    return false;
  }
  for (const [key, val] of sNum) {
    if (!tNum.has(key) || tNum.get(key) !== val) {
      return false;
    }
  }
  return true;
};

// 上述解答错误
//字符可以映射到自己本身，所以不是严格的x->y  y->x 的映射关系，还具有x->x y->y的关系

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const lens = s.length;
  const lent = t.length;
  if (lens !== lent) {
    return false;
  }
  // 记录映射关系
  const hash1 = new Map();
  const hash2 = new Map();
  for (let i = 0; i < lens; i++) {
    if (hash1.has(s[i])) {
      // 是否有映射字符
      if (t[i] !== hash1.get(s[i])) {
        return false;
      }
    } else if (hash2.has(t[i])) {
      // t[i]字符已经被映射过了
      return false;
    }
    hash1.set(s[i], t[i]);
    hash2.set(t[i], s[i]);
  }
  return true;
};
