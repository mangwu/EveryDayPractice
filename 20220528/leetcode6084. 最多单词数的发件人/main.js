/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-28 22:41:03                                                  *
 * @LastModifiedDate: 2022-05-28 22:50:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个聊天记录，共包含 n 条信息。给你两个字符串数组 messages 和 senders ，其中 messages[i] 是 senders[i] 发出的一条 信息 。

// 一条 信息 是若干用单个空格连接的 单词 ，信息开头和结尾不会有多余空格。发件人的 单词计数 是这个发件人总共发出的 单词数 。注意，一个发件人可能会发出多于一条信息。

// 请你返回发出单词数 最多 的发件人名字。如果有多个发件人发出最多单词数，请你返回 字典序 最大的名字。

// 注意：

// 字典序里，大写字母小于小写字母。
// "Alice" 和 "alice" 是不同的名字。

/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {
  // hash表
  const hash = new Map();
  let n = messages.length;
  let ans = null;
  let maxNum = 0;
  for (let i = 0; i < n; i++) {
    // 增加的个数
    let num = messages[i].split(" ").length;
    let newNum = hash.get(senders[i]) ? hash.get(senders[i]) + num : num;
    hash.set(senders[i], newNum);
    if (newNum > maxNum) {
      maxNum = newNum;
      ans = senders[i];
    } else if (newNum == maxNum) {
      // 比较字典顺序
      if (senders[i] > ans) {
        ans = senders[i];
      }
    }
  }
  return ans;
};
