/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-21 09:08:09                                                  *
 * @LastModifiedDate: 2022-06-21 09:10:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

// 所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let ans = "";
  for (const ch of address) {
    if (ch !== ".") {
      ans = ans + ch;
    } else {
      ans = ans + "[.]";
    }
  }
  return ans;
};
