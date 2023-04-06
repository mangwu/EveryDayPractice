/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-06 08:51:27                                                  *
 * @LastModifiedDate: 2023-04-06 11:28:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，以二进制字符串的形式返回该整数的 负二进制（base -2）表示。

// 注意，除非字符串就是 "0"，否则返回的字符串中不能含有前导零。

/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function (n) {
  if (n <= 1) return n.toString();
  // 先确定位数
  let start = 1;
  let k = 0;
  while (n > start) {
    k += 2;
    start += Math.pow(2, k);
  }
  if (n === start) return "10".repeat(k / 2);
  // 再俩个两个的确定位
  const res = new Array(k + 1).fill(0);
  start = Math.pow(2, k);
  let m = 0;
  if (n < start) {
    n = start - n;
    res[0] = 1;
    res[1] = 1;
    m = 1;
  }
  while (n > 0) {
    while (start > n) {
      start /= 2;
    }
    n -= start;
    let cur = Math.log2(start);
    if (cur % 2 === m) {
      res[k - cur] = 1;
    } else {
      res[k - cur] = 1;
      res[k - cur - 1] = 1;
    }
  }
  return res.join("");
};

// 0 1 -2 -1  4   5    2    3   -8    -7    -10   -9    -4    -3    -6    -5    16    17    14
// 0 1 10 11 100 101  110  111 1000  1001  1010  1011  1100  1101  1110  1111 10000  10001 10010
// 0 2 4   5   6  8
// 1 4 16 -32 64 256
// 1 5 21     85 341
// 8 6 4   3   2  0
// 100000000

// 162
// 256 8
// "111111110"
// "111100110"
// 0 8 1 7 26 35 44 35 26 17  08
// 256-128+64-32+16-8+4-2+1
// 1    1   1 1       1 1
// 162 => 34 => 2 => 0
//    128  32     2

// "00101010101111110010000000101"

const getValue = (str) => {
  const n = str.length;
  let res = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] === "1") {
      if ((n - i - 1) % 2 === 0) {
        res += Math.pow(2, n - i - 1);
      } else {
        res -= Math.pow(2, n - i - 1);
      }
    }
  }
  return res;
};
console.log(getValue("00101010101111110010000000101"));

// 26 67108864 22455301
// 24 16777216 5678085
// 22 4194304 1483781
// 20 1048576 435205
// 18 262144 173061
// 17 131072 41989
// 15 32768 9221
// 13 8192 1029
// 10 1024 5
// 2 4 1
// 0 1 0

/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function (n) {
  if (n <= 1) return n.toString();
  const res = new Array(31).fill(0);
  while (n > 0) {
    // 两位可以确定一个数
    const cur = Math.floor(Math.log2(n));
    n -= 2 ** cur;
    if (cur % 2 === 0) {
      res[cur] = 1;
      res[cur - 1] = 1;
    } else {
      res[cur] = 1;
      res[cur + 1] = 1;
    }
  }
  while (res[res.length - 1] === 0) {
    res.pop();
  }
  return res.reverse().join("");
};
// 012345678
// -2 1
//16 -8 4 -2 1
// 8  4  2   1

/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function (n) {
  if (n <= 1) return n.toString();
  // 先确定位数
  let start = 1;
  let k = 0;
  const arr = [1];
  while (n > start) {
    k += 2;
    start += Math.pow(2, k);
    arr.push(start);
  }
  if (n === start) return "10".repeat(k / 2);
  // 两个的确定位
  const res = new Array(k + 1).fill(0);
  
  for (let i = 0; i <= k; i += 2) {
    let cur = Math.pow(2, k - i - 1);
    let m = //
  }
};
// 1 5 21
// 16     17    14    15    20
// 10000  10001 10010 10011 10100
// 21     18    19    8     9     6     7     12    13    10    11
// 10101  10110 10111 11000 11001 11010 11011 11100 11101 11110 11111
