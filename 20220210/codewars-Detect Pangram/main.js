/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-10 15:28:45                                                  *
 * @LastModifiedDate: 2022-02-10 16:21:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 判断一个字符串是否用完了所有的26个字母

// 例如“The quick brown fox jumps over the lazy dog”包含 A-Z的所有字符，不区分大小写

function isPangram(string) {
  // 使用set保存小写字符
  const len = string.length;
  if (len < 26) {
    return false;
  }
  const set = new Set();
  string = string.toLocaleLowerCase();
  for (const ch of string) {
    const location = ch.charCodeAt();
    if (location >= 97 && location <= 122) {
      set.add(ch);
    }
  }
  return set.size >= 26;
}

// 使用正则表达式方法
function isPangram2(string) {
  console.log(string.match(/([a-z])(?!.*\1)/ig));
  // 反向声明表示后续匹配中一定没有和本字符相同的字符，即只匹配最后一个字母字符
  // i表示忽略大小写，g全局匹配
  // ?! 是反向声明的开头，表示匹配字符后面不能满足的条件（后面不能有相同字符）
  // .*表示匹配任意个字符
  // \1表示前面匹配到的字符（[a-z]）
  // 所以整体就是匹配每个相同字符的最后一个字母字符， 结果最大为26
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}

isPangram2("abcde fgDWhiiii.");
