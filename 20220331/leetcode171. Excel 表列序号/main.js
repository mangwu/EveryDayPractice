/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-31 23:22:31                                                  *
 * @LastModifiedDate: 2022-03-31 23:26:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  // 获取字符的基础数字
  const differ = "A".charCodeAt() - 1;
  let ans = 0;
  const len = columnTitle.length;
  for (let i = 0; i < len; i++) {
    let chcode = columnTitle[i].charCodeAt() - differ;
    ans += chcode * Math.pow(26, len - i - 1);
  }
  return ans;
};
