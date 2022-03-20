/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-19 21:55:13                                                  *
 * @LastModifiedDate: 2022-03-19 23:08:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const ans = [];
  const wordLen = words[0].length;
  const wordsLen = words.length;
  const len = s.length;
  const divider = len - wordLen * wordsLen;
  // console.log(divider);
  if (divider < 0) {
    return ans;
  }
  // 如果words总长度比s长，则没必要遍历
  const hash = new Map();
  for (const word of words) {
    const num = hash.get(word) ? hash.get(word) : 0;
    hash.set(word, num + 1);
  }
  for (let i = 0; i <= divider; i++) {
    if (hash.has(s.substring(i, i + wordLen))) {
      // 属于words中的word，开始滑动遍历查找
      const hash2 = new Map(hash);
      let j;
      for (j = 0; j < wordsLen; j++) {
        let start = i + j * wordLen;
        let end = i + (j + 1) * wordLen;
        const str = s.substring(start, end);
        console.log(str);
        if (hash2.has(str)) {
          // 对应该存在的字符进行删除操作
          const num = hash2.get(str);
          if (num == 1) {
            hash2.delete(str);
          } else {
            hash2.set(str, num - 1);
          }
        } else {
          // 不符合条件，直接退出循环
          break;
        }
      }
      // 中途则需要不能保存索引
      // 不能从结束遍历的位置开始遍历
      if (j == wordsLen) {
        ans.push(i);
      }

      // i = i + wordLen - 1;
    }
  }
  // console.log(ans);
  return ans;
};

findSubstring("barfoofoobarthefoobarman", ["b", "a", "r"]);
