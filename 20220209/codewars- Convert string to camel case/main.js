/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-09 09:57:53                                                  *
 * @LastModifiedDate: 2022-02-09 10:14:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 将横线和下划线的字符串转为大驼峰标识

// 如 if-i-am-a-boy => ifIAmABoy
// 如 i_Am_A_Var => iAmAVar

function toCamelCase(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    // 当为下划线或者横线时
    if (str[i] == "-" || str[i] == "_") {
      ans = ans + str[++i].toLocaleUpperCase();
      continue;
    }
    ans = ans + str[i];
  }
  return ans;
}

// 使用正则表达式

function toCamelCase(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    // 当为下划线或者横线时
    if (str[i] == "-" || str[i] == "_") {
      ans = ans + str[++i].toLocaleUpperCase();
      continue;
    }
    ans = ans + str[i];
  }
  return ans;
}
function toCamelCase(str) {
  const reg = /[-_](\w)/g;
  return str.replace(reg, (_, c) => c.toLocaleUpperCase());
}
