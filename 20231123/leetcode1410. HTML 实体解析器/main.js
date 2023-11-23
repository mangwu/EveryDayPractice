/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-11-23 08:53:26                                                  *
 * @LastModifiedDate: 2023-11-23 09:11:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。

// HTML 里这些特殊字符和它们对应的字符实体包括：

// 双引号：字符实体为 &quot; ，对应的字符是 " 。
// 单引号：字符实体为 &apos; ，对应的字符是 ' 。
// 与符号：字符实体为 &amp; ，对应对的字符是 & 。
// 大于号：字符实体为 &gt; ，对应的字符是 > 。
// 小于号：字符实体为 &lt; ，对应的字符是 < 。
// 斜线号：字符实体为 &frasl; ，对应的字符是 / 。
// 给你输入字符串 text ，请你实现一个 HTML 实体解析器，返回解析器解析后的结果。

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  const hash = new Map([
    ["&quot;", '"'],
    ["&apos;", "'"],
    ["&amp;", "&"],
    ["&gt;", ">"],
    ["&lt;", "<"],
    ["&frasl;", "/"],
  ]);
  const ans = [];
  const n = text.length;
  outer: for (let i = 0; i < n; i++) {
    if (text[i] === "&") {
      let j = 1;
      let cur = "&";
      while (i + j < n && j <= 6) {
        cur += text[i + j];
        if (hash.has(cur)) {
          ans.push(hash.get(cur));
          i = i + j;
          continue outer;
        }
        j++;
      }
      // 没有以text[i]开头的HTML转义字符
    }
    ans.push(text[i]);
  }
  return ans.join("");
};
