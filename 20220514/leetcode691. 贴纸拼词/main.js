/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-14 16:45:12                                                  *
 * @LastModifiedDate: 2022-05-14 21:45:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们有 n 种不同的贴纸。每个贴纸上都有一个小写的英文单词。

// 您想要拼写出给定的字符串 target ，方法是从收集的贴纸中切割单个字母并重新排列它们。如果你愿意，你可以多次使用每个贴纸，每个贴纸的数量是无限的。

// 返回你需要拼出 target 的最小贴纸数量。如果任务不可能，则返回 -1 。

// 注意：在所有的测试用例中，所有的单词都是从 1000 个最常见的美国英语单词中随机选择的，并且 target 被选择为两个随机单词的连接。

/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
  // 只要sticker中的26个字母个数都比target的的26个字母个数大即有结果
  const targetAlpha = new Array(26).fill(0);
  const set = new Set();
  let nums = target.length;
  for (const ch of target) {
    targetAlpha[ch.charCodeAt() - "a".charCodeAt()]++;
    set.add(ch);
  }
  const stickerInfos = [];
  for (const sticker of stickers) {
    const hash = new Map();
    for (const ch of sticker) {
      if (targetAlpha[ch.charCodeAt() - "a".charCodeAt()] > 0) {
        set.delete(ch);
        // 存在
        const num = hash.get(ch) ? hash.get(ch) + 1 : 1;
        hash.set(ch, num);
      }
    }
    if (hash.size > 0) {
      stickerInfos.push(hash);
    }
  }
  // 判断target是否有不存在的字符
  if (set.size > 0) {
    return -1;
  }
  let ans = Infinity;
  const dfs = (alpha, n, total) => {
    if (total <= 0) {
      ans = Math.min(ans, n);
    }
    let pre = total;
    for (const stickerinfo of stickerInfos) {
      for (const [key, value] of stickerinfo) {
        const keyVal = alpha[key.charCodeAt() - "a".charCodeAt()];
        if (keyVal > 0) {
          let deleteNum = Math.min(keyVal, value);
          pre -= deleteNum;
          alpha[key.charCodeAt() - "a".charCodeAt()] = keyVal - deleteNum;
        }
      }
      if (pre < total) {
        // 选择了该元素
        dfs(alpha, n + 1, pre);
      }
    }
  };
  dfs(targetAlpha, 0, nums);
};
