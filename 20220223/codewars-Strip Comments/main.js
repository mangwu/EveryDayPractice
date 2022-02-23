/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-23 09:38:40                                                  *
 * @LastModifiedDate: 2022-02-23 10:11:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
//  Any whitespace at the end of the line should also be stripped out.

// 删除每行文本中记号后的内容
// 每行文本后的空格也要删除

/**
 * @description 删除每行文本中记号后的内容
 * @param {String} input 文本
 * @param {Array} markers 记号
 * @returns {String}
 */
function solution(input, markers) {
  // 先得到每行
  let comments = input.split("\n");
  return comments
    .map((comment) => {
      let idx = 0;
      for (idx = 0; idx < comment.length; idx++) {
        if (markers.includes(comment[idx])) {
          break;
        }
      }
      for (idx = idx - 1; idx > 0; idx--) {
        // 不等于空字符
        if (comment[idx] !== " ") {
          break;
        }
      }
      return comment.substring(0, idx + 1);
    })
    .join("\n");
}

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]);

/**
 * @description 删除每行文本中记号后的内容
 * @param {String} input 文本
 * @param {Array} markers 记号
 * @returns {String}
 */
function solution2(input, markers) {
  // 优化
  return input
    .split("\n")
    .map((line) =>
      markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
    )
    .join("\n");
}

console.log(
  solution2("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);
