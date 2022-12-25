/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-24 17:10:25                                                  *
 * @LastModifiedDate: 2022-12-24 18:34:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 word1 和 word2 。你需要按下述方式构造一个新字符串 merge ：如果 word1 或 word2 非空，选择 下面选项之一 继续操作：

// 如果 word1 非空，将 word1 中的第一个字符附加到 merge 的末尾，并将其从 word1 中移除。
// 例如，word1 = "abc" 且 merge = "dv" ，在执行此选项操作之后，word1 = "bc" ，同时 merge = "dva" 。
// 如果 word2 非空，将 word2 中的第一个字符附加到 merge 的末尾，并将其从 word2 中移除。
// 例如，word2 = "abc" 且 merge = "" ，在执行此选项操作之后，word2 = "bc" ，同时 merge = "a" 。
// 返回你可以构造的字典序 最大 的合并字符串 merge 。

// 长度相同的两个字符串 a 和 b 比较字典序大小，如果在 a 和 b 出现不同的第一个位置，a 中字符在字母表中的出现顺序位于 b 中相应字符之后，就认为字符串 a 按字典序比字符串 b 更大。例如，"abcd" 按字典序比 "abcc" 更大，因为两个字符串出现不同的第一个位置是第四个字符，而 d 在字母表中的出现顺序位于 c 之后。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
  // 把word1和word2中字典序更大的放在前面
  const n1 = word1.length;
  const n2 = word2.length;
  let i = 0;
  let j = 0;
  let ans = "";
  while (i < n1 || j < n2) {
    if (i === n1) {
      ans += word2.substring(j);
      return ans;
    }
    if (j === n2) {
      ans += word1.substring(i);
      return ans;
    }
    if (word1[i] > word2[j]) {
      // 选择word1[i]
      ans += word1[i];
      i++;
    } else if (word1[i] < word2[j]) {
      // 选择word2[j]
      ans += word2[j];
      j++;
    } else {
      // 选择后面有字典更大者
      for (let start = 0; ; start++) {
        if (
          word1[i + start] &&
          word2[j + start] &&
          word1[i + start] === word2[j + start]
        ) {
          continue;
        } else {
          if (!word1[i + start]) {
            // 超出界限，选择word2
            ans += word2[j];
            j++;
            break;
          }
          if (!word2[j + start]) {
            // 超出界限，选择word1
            ans += word1[i];
            i++;
            break;
          }
          if (word1[i + start] > word2[j + start]) {
            // 选择word1
            ans += word1[i];
            i++;
            break;
          } else {
            ans += word2[j];
            j++;
            break;
          }
        }
      }
    }
  }
  return ans;
};
