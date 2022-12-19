/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-18 10:57:41                                                  *
 * @LastModifiedDate: 2022-12-18 11:35:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var isPossible = function (n, edges) {
  const hash = new Map();
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).add(edge[1])
      : hash.set(edge[0], new Set([edge[1]]));
    hash.has(edge[1])
      ? hash.get(edge[1]).add(edge[0])
      : hash.set(edge[1], new Set([edge[0]]));
  }
  // 遍历获取入度不是偶数的节点
  let oddArr = [];
  for (const [key, values] of hash) {
    if (values.size % 2 == 1) {
      oddArr.push(key);
    }
  }
  // 不能是奇数且不能大于4
  if (oddArr.length % 2 == 1 || oddArr.length > 4) {
    return false;
  }
  if (oddArr.length == 0) {
    return true;
  }
  if (oddArr.length === 2) {
    // 连接二者
    const set = hash.get(oddArr[0]);
    if (!set.has(oddArr[1])) {
      return true;
    }
    // 或找到一个节点都没有连接这两个
    for (let i = 1; i <= n; i++) {
      if (i !== oddArr[0] && i !== oddArr[1]) {
        const set = hash.get(i);
        if (!set || (!set.has(oddArr[0]) && !set.has(oddArr[1]))) {
          return true;
        }
      }
    }
    return false;
  }
  if (oddArr.length === 4) {
    // 三种情况
    const set1 = hash.get(oddArr[0]);
    const set2 = hash.get(oddArr[1]);
    const set3 = hash.get(oddArr[2]);

    if (!set1.has(oddArr[1]) && !set3.has(oddArr[3])) {
      return true;
    }
    if (!set1.has(oddArr[2]) && !set2.has(oddArr[3])) {
      return true;
    }
    if (!set1.has(oddArr[3]) && !set2.has(oddArr[2])) {
      return true;
    }
  }
  return false;
};
