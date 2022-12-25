/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-24 23:09:57                                                  *
 * @LastModifiedDate: 2022-12-24 23:55:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个字符串 s ，它包含一个或者多个单词。单词之间用单个空格 ' ' 隔开。

// 如果字符串 t 中第 i 个单词是 s 中第 i 个单词的一个 排列 ，那么我们称字符串 t 是字符串 s 的同位异构字符串。

// 比方说，"acb dfe" 是 "abc def" 的同位异构字符串，但是 "def cab" 和 "adc bef" 不是。
// 请你返回 s 的同位异构字符串的数目，由于答案可能很大，请你将它对 109 + 7 取余 后返回。
const MOD = Math.pow(10, 9) + 7;
/**
 * @param {string} s
 * @return {number}
 */
var countAnagrams = function (s) {
  const words = s.split(" ");
  let ans = 1;
  for (const word of words) {
    const aplah = new Array(26).fill(0);
    let n = word.length;
    let cur = 1;
    for (let i = 0; i < n; i++) {
      let curIdx = word[i].charCodeAt() - "a".charCodeAt();
      if (aplah[curIdx]) {
        aplah[curIdx]++;
        ans *= i + 1;
        // 因为mod的原因所以导致有小数
        const rest = ans % aplah[curIdx];
        if (rest) {
          ans += aplah[curIdx] * (aplah[curIdx] - rest) * MOD;
        }
        ans /= aplah[curIdx];
        ans %= MOD;
      } else {
        ans *= i + 1;
        ans %= MOD;
        aplah[curIdx]++;
      }
    }
  }
  return ans;
};

// "smuiquglfwdepzuyqtgujaisius ithsczpelfqp rjm"
// 200929815
// 预期：
// 200923648
