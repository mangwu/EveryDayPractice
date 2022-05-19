/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-19 13:57:03                                                  *
 * @LastModifiedDate: 2022-05-19 17:22:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，
// 但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，
// 这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const n = s.length;
  if (n < 4 || n > 12) {
    return [];
  }
  const ans = [];
  const dfs = (preStr, lastStr, num) => {
    if (num == 4) {
      if (lastStr.length > 3) {
        return;
      }
      const ip4 = parseInt(lastStr);
      if (ip4.toString().length !== lastStr.length) {
        return;
      }

      if (ip4 >= 0 && ip4 <= 255) {
        ans.push(preStr + ip4);
      }
      return;
    }
    if (lastStr[0] == "0") {
      if (
        lastStr.length - 1 >= 4 - num &&
        lastStr.length - 1 <= (4 - num) * 3
      ) {
        dfs(preStr + "0.", lastStr.substring(1), num + 1);
      }
    } else {
      for (let i = 1; i <= 3 && i <= lastStr.length; i++) {
        let ip = parseInt(lastStr.substring(0, i));

        if (
          ip >= 0 &&
          ip <= 255 &&
          lastStr.length - i >= 4 - num &&
          lastStr.length - i <= (4 - num) * 3
        ) {
          dfs(
            preStr + lastStr.substring(0, i) + ".",
            lastStr.substring(i),
            num + 1
          );
        }
      }
    }
  };
  dfs("", s, 1);
  return ans;
};
