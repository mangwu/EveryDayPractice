/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-24 23:05:21                                                  *
 * @LastModifiedDate: 2022-03-24 23:31:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

// '?' 可以匹配任何单个字符。
// '*' 可以匹配任意字符串（包括空字符串）。
// 两个字符串完全匹配才算匹配成功。

// 说明:

// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  p = p.replaceAll("*", ".*");
  p = p.replaceAll("?", ".");
  p = p.replaceAll(/(\.\*)+/g, ".*");
  console.log(p);
  const reg = new RegExp(p);
  const res = s.match(reg);
  if (res && res[0] == s) {
    return true;
  }
  return false;
};
isMatch(
  "bbbbabaabbabbababaabaabababaababaaaabaaabbbabbbbbbabbabbabbaaabaababbbababbbaaababbbbaabbaababbabababbbbbbabbbbbaabbabaababbabbbbbbaabbbabbbaabaaababaabaaaabababbababbaaabbaabaabaabbbbbbaabbaaaaaabbabb",
  "aa***bb*b**a***bb***b*b*ba********ba***bbbb*bba*a*b***ba*a*b**aabbba*aba****a*ba*****a*bab**a**b**b*a*"
);
