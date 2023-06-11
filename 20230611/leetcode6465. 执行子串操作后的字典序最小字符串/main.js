/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-11 10:32:57                                                  *
 * @LastModifiedDate: 2023-06-11 11:11:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅由小写英文字母组成的字符串 s 。在一步操作中，你可以完成以下行为：

// 选则 s 的任一非空子字符串，可能是整个字符串，接着将字符串中的每一个字符替换为英文字母表中的前一个字符。例如，'b' 用 'a' 替换，'a' 用 'z' 替换。
// 返回执行上述操作 恰好一次 后可以获得的 字典序最小 的字符串。

// 子字符串 是字符串中的一个连续字符序列。

// 现有长度相同的两个字符串 x 和 字符串 y ，在满足 x[i] != y[i] 的第一个位置 i 上，如果  x[i] 在字母表中先于 y[i] 出现，则认为字符串 x 比字符串 y 字典序更小 。

/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function (s) {
  // 选择替换进行操作的字符肯定是非a的子字符串
  // 如果全部是a
  const n = s.length;

  let idx = 0;
  let ans = [];
  for (; idx < n; idx++) {
    if (s[idx] === "a") {
      ans.push("a");
      idx++;
      break;
    }
    ans.push(String.fromCharCode(s[idx].charCodeAt() - 1));
  }
  // 考虑连续的a
  if (s[0] === "a") {
    while (s[idx] === "a") {
      ans.push("a");
      idx++;
    }
    if (idx === n) {
      ans.pop();
      ans.push("z");
    }
    for (; idx < n; idx++) {
      if (s[idx] === "a") {
        ans.push("a");
        idx++;
        break;
      }
      ans.push(String.fromCharCode(s[idx].charCodeAt() - 1));
    }
  }
  return ans.join("") + s.substring(idx);
};
