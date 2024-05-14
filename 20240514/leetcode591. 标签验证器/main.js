/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-14 10:01:27                                                  *
 * @LastModifiedDate: 2024-05-14 11:28:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个表示代码片段的字符串，你需要实现一个验证器来解析这段代码，并返回它是否合法。合法的代码片段需要遵守以下的所有规则：

// 代码必须被合法的闭合标签包围。否则，代码是无效的。
// 闭合标签（不一定合法）要严格符合格式：<TAG_NAME>TAG_CONTENT</TAG_NAME>。其中，<TAG_NAME>是起始标签，</TAG_NAME>是结束标签。起始和结束标签中的 TAG_NAME 应当相同。当且仅当 TAG_NAME 和 TAG_CONTENT 都是合法的，闭合标签才是合法的。
// 合法的 TAG_NAME 仅含有大写字母，长度在范围 [1,9] 之间。否则，该 TAG_NAME 是不合法的。
// 合法的 TAG_CONTENT 可以包含其他合法的闭合标签，cdata （请参考规则7）和任意字符（注意参考规则1）除了不匹配的<、不匹配的起始和结束标签、不匹配的或带有不合法 TAG_NAME 的闭合标签。否则，TAG_CONTENT 是不合法的。
// 一个起始标签，如果没有具有相同 TAG_NAME 的结束标签与之匹配，是不合法的。反之亦然。不过，你也需要考虑标签嵌套的问题。
// 一个<，如果你找不到一个后续的>与之匹配，是不合法的。并且当你找到一个<或</时，所有直到下一个>的前的字符，都应当被解析为 TAG_NAME（不一定合法）。
// cdata 有如下格式：<![CDATA[CDATA_CONTENT]]>。CDATA_CONTENT 的范围被定义成 <![CDATA[ 和后续的第一个 ]]>之间的字符。
// CDATA_CONTENT 可以包含任意字符。cdata 的功能是阻止验证器解析CDATA_CONTENT，所以即使其中有一些字符可以被解析为标签（无论合法还是不合法），也应该将它们视为常规字符。

/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function (code) {
  // TagName仅含有大写字符，长度在[1,9]
  if (code[0] !== "<") return false;
  const stack = [];
  const firstTag = getTagName(code, 0);
  if (!firstTag || firstTag[2]) return false; // 不是标签，或者是结束标签
  const n = code.length;
  stack.push(firstTag[0]);
  for (let i = firstTag[1] + 1; i < n; i++) {
    if (code[i] === "<") {
      if (code[i + 1] === "!") {
        // 判断是否是cdata
        const end = getCData(code, i);
        if (!end) return false;
        i = end;
      } else {
        // 获取TagName
        const tag = getTagName(code, i);
        if (!tag) return false;
        const [tagName, end, isEndTag] = tag;
        i = end;
        if (isEndTag) {
          // 是结束标签
          if (stack.length && stack[stack.length - 1] === tagName) {
            stack.pop();
            if (!stack.length && i < n - 1) return false;
          } else return false;
        } else {
          // 是开始标签
          stack.push(tagName);
        }
      }
    }
  }
  return stack.length === 0;
};

/**
 * @description 获取TagName
 * @param {string} str
 * @param {number} start
 * @returns {false|[string, number,boolean]}
 */
function getTagName(str, start) {
  start++; //第一个字符是 “<”
  let res = [];
  let isEndTag = false; //是否是结束标签
  if (str[start] === "/") {
    isEndTag = true;
    start++;
  }
  const n = str.length;
  while (start < n) {
    if (isUpperChr(str[start])) {
      res.push(str[start++]);
    } else if (str[start] === ">") {
      break;
    } else return false;
  }
  if (start >= n || res.length > 9 || res.length === 0) return false;
  return [res.join(""), start, isEndTag];
}
/**
 * @description 判断ch是否是大写字母
 * @param {string} ch
 */
function isUpperChr(ch) {
  // 是大写字母
  return ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90;
}

/**
 * @description CDATA获取
 * @param {string} str
 * @param {number} start
 * @returns {false|number}
 */
function getCData(str, start) {
  // <![CDATA[CDATA_CONTENT]]>
  if (str.substring(start, start + 9) === "<![CDATA[") {
    start += 9;
  } else return false;
  const n = str.length;
  while (start < n) {
    // 找到最后三个字符
    if (
      str[start] === "]" &&
      str[start + 1] === "]" &&
      str[start + 2] === ">"
    ) {
      start += 2;
      break;
    }
    start++;
  }
  if (start >= n) return false;
  return start;
}
