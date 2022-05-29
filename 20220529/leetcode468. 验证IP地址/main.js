/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-29 15:46:48                                                  *
 * @LastModifiedDate: 2022-05-29 18:10:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个字符串 queryIP。如果是有效的 IPv4 地址，返回 "IPv4" ；如果是有效的 IPv6 地址，返回 "IPv6" ；如果不是上述类型的 IP 地址，返回 "Neither" 。

// 有效的IPv4地址 是 “x1.x2.x3.x4” 形式的IP地址。 其中 0 <= xi <= 255 且 xi 不能包含 前导零。例如: “192.168.1.1” 、 “192.168.1.0” 为有效IPv4地址， “192.168.01.1” 为无效IPv4地址; “192.168.1.00” 、 “192.168@1.1” 为无效IPv4地址。

// 一个有效的IPv6地址 是一个格式为“x1:x2:x3:x4:x5:x6:x7:x8” 的IP地址，其中:

// 1 <= xi.length <= 4
// xi 是一个 十六进制字符串 ，可以包含数字、小写英文字母( 'a' 到 'f' )和大写英文字母( 'A' 到 'F' )。
// 在 xi 中允许前导零。
// 例如 "2001:0db8:85a3:0000:0000:8a2e:0370:7334" 和 "2001:db8:85a3:0:0:8A2E:0370:7334" 是有效的 IPv6 地址，而 "2001:0db8:85a3::8A2E:037j:7334" 和 "02001:0db8:85a3:0000:0000:8a2e:0370:7334" 是无效的 IPv6 地址。

/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  // 判断是否是IPv4地址
  let isIpv4 = true;
  const arr4 = queryIP.split(".");
  if (arr4.length !== 4) {
    isIpv4 = false;
  } else {
    for (const ip of arr4) {
      let ipnum = parseInt(ip);
      if (ipnum >= 0 && ipnum <= 255 && ipnum.toString() == ip) {
        continue;
      } else {
        isIpv4 = false;
        break;
      }
    }
  }
  if (isIpv4) {
    return "IPv4";
  }
  // 判断是否是IPv6
  const arr6 = queryIP.split(":");
  if (arr6.length !== 8) {
    return "Neither";
  } else {
    for (const ip of arr6) {
      if (!isSingleIpv6(ip)) {
        return "Neither";
      }
    }
  }
  return "IPv6";
};
const set = new Set([
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "A",
  "B",
  "b",
  "C",
  "c",
  "D",
  "d",
  "e",
  "E",
  "F",
  "f",
]);
const isSingleIpv6 = (str) => {
  if (str.length > 4 || str.length < 1) {
    return false;
  }
  for (const ch of str) {
    if (!set.has(ch)) {
      return false;
    }
  }
  return true;
};
