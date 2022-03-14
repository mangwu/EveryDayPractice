/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-13 19:52:32                                                  *
 * @LastModifiedDate: 2022-03-13 20:51:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个表示数据的整数数组 data ，返回它是否为有效的 UTF-8 编码。

// UTF-8 中的一个字符可能的长度为 1 到 4 字节，遵循以下的规则：

// 对于 1 字节 的字符，字节的第一位设为 0 ，后面 7 位为这个符号的 unicode 码。
// 对于 n 字节 的字符 (n > 1)，第一个字节的前 n 位都设为1，第 n+1 位设为 0 ，后面字节的前两位一律设为 10 。剩下的没有提及的二进制位，全部为这个符号的 unicode 码。
// 这是 UTF-8 编码的工作方式：
// Char. number range  |        UTF-8 octet sequence
// (hexadecimal)    |              (binary)
// --------------------+---------------------------------------------
// 0000 0000-0000 007F | 0xxxxxxx
// 0000 0080-0000 07FF | 110xxxxx 10xxxxxx
// 0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
// 0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  // 根据长度进行判断
  const len = data.length;
  for (let i = 0; i < len; i++) {
    // 比较第一个字符是那种字符
    if (data[i] <= 127) {
      // 属于单UTF字节
      console.log("---单字节---");
      continue;
    } else if (data[i] >= 192 && data[i] <= 223) {
      // 属于双UTF字符
      // 判断后面一位字符是否满足条件
      // 128 - 191
      console.log("---后面一位---");
      if (i + 1 < len && data[i + 1] >= 128 && data[i + 1] <= 191) {
        i += 1;
        continue;
      } else {
        return false;
      }
    } else if (data[i] >= 224 && data[i] <= 239) {
      // 属于三UTF字符
      // 判断后面两位是否满足条件
      console.log("---后面两位---");
      if (i + 2 < len) {
        for (let j = i + 1; j < i + 3; j++) {
          if (data[j] < 128 || data[j] > 191) {
            return false;
          }
        }
        i = i + 2;
      } else {
        return false;
      }
    } else if (data[i] >= 240 && data[i] <= 247) {
      // 属于4UTF字符
      // 判断后面三位是否满足条件
      console.log("---后面三位---");

      if (i + 3 < len) {
        for (let j = i + 1; j < i + 4; j++) {
          if (data[j] < 128 || data[j] > 191) {
            return false;
          }
        }
        i = i + 3;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};
console.log(validUtf8([255]));
