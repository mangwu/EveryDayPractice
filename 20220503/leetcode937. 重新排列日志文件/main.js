/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-03 22:58:07                                                  *
 * @LastModifiedDate: 2022-05-03 23:35:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个日志数组 logs。每条日志都是以空格分隔的字串，其第一个字为字母与数字混合的 标识符 。

// 有两种不同类型的日志：

// 字母日志：除标识符之外，所有字均由小写字母组成
// 数字日志：除标识符之外，所有字均由数字组成
// 请按下述规则将日志重新排序：

// 所有 字母日志 都排在 数字日志 之前。
// 字母日志 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序。
// 数字日志 应该保留原来的相对顺序。
// 返回日志的最终顺序。

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const start = "0".charCodeAt();
  const end = "9".charCodeAt();
  logs.sort((a, b) => {
    const arra = a.split(" ");
    const arrb = b.split(" ");
    if (arra[1][0].charCodeAt() >= start && arra[1][0].charCodeAt() <= end) {
      // a是数字字符
      if (arrb[1][0].charCodeAt() >= start && arrb[1][0].charCodeAt() <= end) {
        // b也是数字字符
        // 数字位置不变
        return 0;
      } else {
        // b 是字母
        return 1;
      }
    } else {
      // a是字母字符
      if (arrb[1][0].charCodeAt() >= start && arrb[1][0].charCodeAt() <= end) {
        // b是数字字符
        return -1;
      } else {
        // b 是字母
        const pra = arra.slice(1).join(" ");
        const prb = arrb.slice(1).join(" ");
        if (pra == prb) {
          // 在内容相同时，按标识符排序。
          return arra[0].localeCompare(arrb[0]);
        } else {
          return arra.slice(1).join(" ").localeCompare(arrb.slice(1).join(" "));
        }
      }
    }
  });
  return logs;
};
