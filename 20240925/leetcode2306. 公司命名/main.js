/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-25 09:35:18                                                  *
 * @LastModifiedDate: 2024-09-25 18:51:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组 ideas 表示在公司命名过程中使用的名字列表。公司命名流程如下：

// 从 ideas 中选择 2 个 不同 名字，称为 ideaA 和 ideaB 。
// 交换 ideaA 和 ideaB 的首字母。
// 如果得到的两个新名字 都 不在 ideas 中，那么 ideaA ideaB（串联 ideaA 和 ideaB ，中间用一个空格分隔）是一个有效的公司名字。
// 否则，不是一个有效的名字。
// 返回 不同 且有效的公司名字的数目。

/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function (ideas) {
  const hash = new Map();
  for (const idea of ideas) {
    const header = idea[0];
    const suffix = idea.slice(1);
    hash.has(header)
      ? hash.get(header).add(suffix)
      : hash.set(header, new Set([suffix]));
  }
  const values = [...hash];
  const n = values.length;
  console.log(hash);
  let res = 0;
  for (let i = 0; i < n; i++) {
    const [_key, set1] = values[i];
    const size1 = set1.size;
    for (let j = i + 1; j < n; j++) {
      const [_key, set2] = values[j];
      const size2 = set2.size;
      let sameNum = 0;
      for (const str of set2) {
        if (set1.has(str)) sameNum++;
      }
      res += (size1 - sameNum) * (size2 - sameNum);
    }
  }
  return res * 2;
};

const random = require("../../publicFunc/random/random");
//
// a  -> bc de fg
// b  -> bc hj mn fg
const testArr = new Array(50000).fill(0).map((v) =>
  random
    .randomArr(random.randomNum(1, 11), 97, 123)
    .map((v) => String.fromCharCode(v))
    .join("")
);
console.log(distinctNames(testArr));

