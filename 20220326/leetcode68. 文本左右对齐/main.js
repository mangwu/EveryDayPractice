/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-26 23:31:35                                                  *
 * @LastModifiedDate: 2022-03-27 02:42:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个单词数组 words 和一个长度 maxWidth ，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。

// 你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。

// 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

// 文本的最后一行应为左对齐，且单词之间不插入额外的空格。

// 注意:

// 单词是指由非空格字符组成的字符序列。
// 每个单词的长度大于 0，小于等于 maxWidth。
// 输入单词数组 words 至少包含一个单词。
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const ans = [];
  const len = words.length;
  for (let i = 0; i < len; i++) {
    let start = i;
    let width = words[i].length;
    let end = start + 1;
    for (; end < len && width < maxWidth; end++) {
      width++;
      width += words[end].length;
      if (width > maxWidth) {
        break;
      }
    }
    const rowWords = words.slice(start, end);
    const num = rowWords.length;
    // 只有单个单词
    if (num == 1) {
      ans.push(rowWords[0] + " ".repeat(maxWidth - rowWords[0].length));
      continue;
    }
    // 是最后一行
    if (end == len) {
      if (num == 1) {
        ans.push(rowWords[0] + " ".repeat(maxWidth - rowWords[0].length));
        break;
      } else {
        let row = rowWords[0];
        for (let j = 1; j < num; j++) {
          row += " " + rowWords[j];
        }
        rest = maxWidth - row.length;
        row = row + " ".repeat(rest);
        ans.push(row);
        break;
      }
    }
    // 进行单词分配
    width = rowWords.reduce((pre, cur) => pre + cur.length, 0);

    // 空格数量
    let spaceNum = maxWidth - width;
    // 左边单个数量
    let singleNum = Math.floor(spaceNum / (num - 1));
    let left = spaceNum - singleNum * (num - 1);

    let row = rowWords[0];
    for (let j = 1; j < num; j++) {
      if (left > 0) {
        row = row + " ".repeat(singleNum + 1) + rowWords[j];
        left--;
      } else {
        row = row + " ".repeat(singleNum) + rowWords[j];
      }
    }

    i = end - 1;
    ans.push(row);
  }
  return ans;
};
fullJustify(
  [
    "This",
    "is",
    "an",
    "example",
    "of",
    "text",
    "justification.",
    "ash",
    "asuihc",
    "sdjgc",
  ],
  18
);
