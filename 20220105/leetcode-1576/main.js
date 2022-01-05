/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-05 16:41:47                                                  *
 * @LastModifiedDate: 2022-01-05 19:28:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅包含小写英文字母和 '?' 字符的字符串 s，请你将所有的 '?' 转换为若干小写字母，使最终的字符串不包含任何 连续重复 的字符。

// 注意：你 不能 修改非 '?' 字符。

// 题目测试用例保证 除 '?' 字符 之外，不存在连续重复的字符。

// 在完成所有转换（可能无需转换）后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    // 是问号就替换
    if (s[i] === "?") {
      // 获取两个不能变的字母的ASCII编码
      // 前一个使用ans的字符，避免获取到?，有值的话一定获取到前一个字符
      let preI = ans[i - 1] ? ans[i - 1].charCodeAt() : 0;
      // 后一个使用s，获取到的可能是undefined或者？
      let afterI =
        s[i + 1] !== undefined && s[i + 1] !== "?" ? s[i + 1].charCodeAt() : 0;

      // 如果都获取到了
      if (preI && afterI) {
        // 取不可能重复的一个
        // 取中间值
        let mid = Math.floor((preI + afterI) / 2);
        // 中间值重复
        if (mid === Math.min(preI, afterI)) {
          mid = ((mid + 2 - 97) % 26) + 97;
        }
        ans += String.fromCharCode(mid);
        continue;
      }
      // 如果只有一个获取到了
      if (preI || afterI) {
        // 取下一个
        ans += String.fromCharCode(((preI + afterI + 1 - 97) % 26) + 97);
        continue;
      }
      // 如果都没有获取到 选择a即可
      if (!preI && !afterI) {
        ans += "a";
        continue;
      }
    }
    ans += s[i];
  }
  console.log(ans);
  return ans;
};

modifyString("?zs???acasa?b??b");
// 在替换字符串时，可以在a,b，c当中选，因为两个字符比不可能超过三个可选字符
var modifyString2 = function (s) {
  let ans = "";
  const arr = ["a", "b", "c"];
  for (let i = 0; i < s.length; i++) {
    // 是问号就替换
    if (s[i] === "?") {
      // 获取两个不能变的字母的ASCII编码
      // 前一个使用ans的字符，避免获取到?，有值的话一定获取到前一个字符
      let preI = ans[i - 1] ? ans[i - 1] : 0;
      // 后一个使用s，获取到的可能是undefined或者？
      let afterI = s[i + 1] !== undefined && s[i + 1] !== "?" ? s[i + 1] : 0;
      for (let j of arr) {
        if (j != preI && j != afterI) {;
          ans += j;
          break;
        }
      }
      continue;
    }
    ans += s[i];
  }
  console.log(ans);
  return ans;
};
modifyString2("?zs???acasa?b??b")
