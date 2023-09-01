/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-01 14:53:03                                                  *
 * @LastModifiedDate: 2023-09-01 16:06:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // 自定义的排序方法应该有如下条件：
  // 1. 按位比较，当位不同时，值大的那个应该排在前面，例如56应该排在555前
  // 2. 如果前x位一致，但是位长度较短元素已经比较完毕了，应该进行循环比较（I % len），例如43243应该在432前，相当于比较43243 43243和432 432
  // 3. 即使循环比较也会出现死循环的情况，例如66，666。这个时候两个元素的顺序不影响结果，设置一个最多循环次数(两个元素长度乘积)即可
  let res = nums
    .sort((a, b) => {
      if (a === b) return 0;
      const aStr = a.toString();
      const bStr = b.toString();
      let idxa = 0;
      let idxb = 0;
      let maxLen = Math.max(aStr.length, bStr.length);
      let maxN = aStr.length * bStr.length;
      let cur = 0;
      while (idxa < maxLen || idxb < maxLen) {
        if (aStr[idxa] === bStr[idxb]) {
          idxa++;
          idxb++;
          idxa %= aStr.length;
          idxb %= bStr.length;
          cur++;
          if (cur > maxN) return 0;
          continue;
        } else return bStr[idxb] - aStr[idxa];
      }
    })
    .join("");
  if (res[0] === "0") return "0";
  return res;
};

// [9,5,34,3,30]
// [624,636,665,6,60,68]
// 68, 6, 665, 636, 624, 60
// 68, 665, 6, 636, 624, 60

// [624,636,665,6,60,68,0,66,667]
// 68 667 66 6 665 636 624 60 0
// 68 6 667 66 665 636 624 60 0

// 6 66 666 667 665

// [432,43243]
// 43243 432

// 432 43243

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let res = nums
    .sort((a, b) => {
      if (a === b) return 0;
      const aStr = a.toString(),
        bStr = b.toString();
      let idxa = 0,
        idxb = 0;
      while (idxa < aStr.length && idxb < bStr.length) {
        if (aStr[idxa++] === bStr[idxb++]) continue;
        else return bStr[idxb - 1] - aStr[idxa - 1];
      }
      let ab = BigInt(aStr + bStr);
      let ba = BigInt(bStr + aStr);
      if (ab > ba) return -1; // a在前
      if (ab < ba) return 1; // b在前
      return 0; // 顺序不影响
    })
    .join("");
  if (res[0] === "0") return "0";
  return res;
};
