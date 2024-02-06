/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-05 11:18:46                                                  *
 * @LastModifiedDate: 2024-02-05 14:52:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 某套连招动作记作仅由小写字母组成的序列 arr，其中 arr[i] 第 i 个招式的名字。请返回第一个只出现一次的招式名称，如不存在请返回空格。

/**
 * @param {string} arr
 * @return {character}
 */
var dismantlingAction = function (arr) {
  const hash = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    hash.has(arr[i]) ? hash.get(arr[i]).push(i) : hash.set(arr[i], [i]);
  }
  for (const [key, value] of hash) {
    if (value.length === 1) return key;
  }
  return " ";
};
