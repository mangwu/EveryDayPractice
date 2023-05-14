/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-14 23:00:33                                                  *
 * @LastModifiedDate: 2023-05-15 02:02:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个仓库里，有一排条形码，其中第 i 个条形码为 barcodes[i]。

// 请你重新排列这些条形码，使其中任意两个相邻的条形码不能相等。
// 你可以返回任何满足该要求的答案，此题保证存在答案。

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  const n = barcodes.length;
  if (n === 1) return barcodes;
  const hash = new Map();
  for (const barcode of barcodes) {
    hash.has(barcode)
      ? hash.set(barcode, hash.get(barcode) + 1)
      : hash.set(barcode, 1);
  }
  const arr = [];
  const hashArr = [...hash].sort((a, b) => b[1] - a[1]);
  let m = hashArr.length;
  for (let i = 0; i < m; i++) {
    let cur = hashArr[i];
    let next = hashArr[i + 1];
    while (cur[1]) {
      while (next[1]) {
        arr.push(cur[0]);
        cur[1]--;
        arr.push(next[0]);
        next[1]--;
      }
      i++;
      if (i === m && cur[1]) {
        arr.push(cur[0]);
        break;
      }
      next = hashArr[i];
    }
  }
  return arr;
};
// 以上解答错误

// [ [ 7, 4 ], [ 5, 4 ], [ 8, 2 ] ]

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  const n = barcodes.length;
  if (n === 1) return barcodes;
  const hash = new Map();
  for (const barcode of barcodes) {
    hash.has(barcode)
      ? hash.set(barcode, hash.get(barcode) + 1)
      : hash.set(barcode, 1);
  }
  const arr = [];
  const hashArr = [...hash].sort((a, b) => b[1] - a[1]);
  // 每次找出最小的，进行削减
  while (hashArr.length) {
    const cur = hashArr.pop();
    while (cur[1]) {
      for (const item of hashArr) {
        item[1] -= 1;
        arr.push(item[0]);
      }
      arr.push(cur[0]);
      cur[1]--;
    }
  }

  return arr;
};

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  const n = barcodes.length;
  if (n === 1) return barcodes;
  const hash = new Map();
  for (const barcode of barcodes) {
    hash.has(barcode)
      ? hash.set(barcode, hash.get(barcode) + 1)
      : hash.set(barcode, 1);
  }
  const arr = [];
  const half = Math.floor(n / 2);
  let evenIndex = 0;
  let oddIndex = 1;
  // 两次遍历
  for (let [code, nums] of hash) {
    while (nums > 0 && nums <= half && oddIndex < n) {
      // 先把奇数位置填满
      nums--;
      arr[oddIndex] = code;
      oddIndex += 2;
    }
    while (nums > 0) {
      // 再填写偶数
      nums--;
      arr[evenIndex] = code;
      evenIndex += 2;
    }
  }
  return arr;
};
