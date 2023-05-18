/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-18 08:51:46                                                  *
 * @LastModifiedDate: 2023-05-18 09:45:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出基数为 -2 的两个数 arr1 和 arr2，返回两数相加的结果。

// 数字以 数组形式 给出：数组由若干 0 和 1 组成，按最高有效位到最低有效位的顺序排列。例如，arr = [1,1,0,1] 表示数字 (-2)^3 + (-2)^2 + (-2)^0 = -3。数组形式 中的数字 arr 也同样不含前导零：即 arr == [0] 或 arr[0] == 1。

// 返回相同表示形式的 arr1 和 arr2 相加的结果。两数的表示形式为：不含前导零、由若干 0 和 1 组成的数组。

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function (arr1, arr2) {
  const n1 = arr1.length;
  const n2 = arr2.length;
  if (n1 < n2) return addNegabinary(arr2, arr1);
  arr1.reverse();
  arr2.reverse();
  let nxt1 = 0;
  let nxt2 = 0;
  const res = [];
  for (let i = 0; i < n1; i++) {
    let cur1 = arr1[i];
    let cur2 = 0;
    if (i < n2) {
      cur2 = arr2[i];
    }
    let cur = nxt1 + cur1 + cur2;
    if (cur <= 1) {
      res[i] = cur;
      nxt1 = nxt2;
      nxt2 = 0;
    } else {
      res[i] = cur % 2;
      nxt1 = nxt2 + 1;
      nxt2 = 1;
    }
    // 消除
    if (nxt1 === 2 && nxt2 === 1) {
      nxt1 = 0;
      nxt2 = 0;
    }
  }
  if (nxt2) {
    res.push(nxt1);
    res.push(nxt2);
  } else if (nxt1) {
    res.push(nxt1);
  }
  while (res[res.length - 1] === 0) {
    res.pop();
  }
  if (res.length === 0) res.push(0);
  return res.reverse();
};
// +1 -2 +4 -8 +16
//

// 1  1   1  1  1
// 1  0   1
// 0  1   1
// 0  0   2  1
// 0  0   0  0
// 0  0   0  2  1
// 0  0   0  0  0
