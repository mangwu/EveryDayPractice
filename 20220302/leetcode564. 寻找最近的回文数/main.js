/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-02 09:25:11                                                  *
 * @LastModifiedDate: 2022-03-02 13:42:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个表示整数的字符串 n ，返回与它最近的回文整数（不包括自身）。如果不止一个，返回较小的那个。

// “最近的”定义为两个整数差的绝对值最小。

// 例如 2334 最近的是 2332
// 1 最近的是 0 2，返回最小的，即0
// 11 => 9
// 101 => 99
// 202 => 191
// 16 => 11
// 17 => 22

/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  // 有几种特殊情况需要额外单独处理
  //
  const isP = isPalindromic(n);
  const arr = n.split("");
  // 如果不是回文，将后半段与前半段设置相同即可
  const len = arr.length;
  if (!isP) {
    for (let i = 0; i < len / 2; i++) {
      arr[len - i - 1] = arr[i];
    }
  } else {
    // 是回文,将中间值减去1或者加上1
    // 这里有几种特殊情况 如果中间值为0或者9，则需要对值进行判断是加1好还是减去1好
    const mid = Math.floor(len / 2);
    if (arr[mid] !== "0" && arr[mid] !== "9") {
      if (len % 2 == 0) {
        // 偶数 有11的特殊情况
        arr[mid] = arr[mid] - 1;
        arr[mid - 1] = arr[mid - 1] - 1;
      } else {
        // 奇数
        arr[mid] = arr[mid] - 1;
      }
      return arr.join("");
    } else {
      // 保存减去1和加1的结果
      let sub;
      let add;
      // 如果是0或者9 则需要计算两个结果，比较与原始差值即可
      if (len % 2 == 0) {
        // 偶数
        if (arr[mid] === "9") {
          // 计算减去1结果
          const half = arr.slice(0, mid);
          half[mid - 1] = half[mid - 1] - 1;
          sub = half.join("") + half.reverse().join("");
          // 计算加上1的结果
          let halfNum = arr.slice(0, mid + 1).join("") + 1;
          const halfLen = halfNum.toString().length;
          const halfStr = halfNum.toString().substring(0, mid);
          if (halfLen > mid) {
            add = halfStr + "0" + halfStr;
          } else {
            add = halfStr + halfStr;
          }
          // 比较差值
          if (n - sub <= add - n) {
            return sub;
          } else {
            return add;
          }
        } else if (arr[mid] === "0") {
          // 计算加1结果
          const half = arr.slice(0, mid);
          half[mid - 1] = half[mid - 1] + 1;
          sub = half.join("") + half.reverse().join("");
        }
      }
    }
  }
};

// 判断一个字符串是否是回文

const isPalindromic = (s) => {
  let left = s.length;
  let right = 0;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
  }
  return true;
};

// 上面的解答不完整也错误，未考虑全部情况
// 1. 对于小于10的数，返回n-1
// 2. 对于11， 101 1001 10001，返回n - 2
// 3. 对于10的幂，返回n-1 （10的幂的数有两种10001和9999，选择小的那一个）
// 4. 对于全是9的，返回n + 2

// 剩下的就是比较前面半个的字符关于 N N+1 N-1对应的回文形式那个最小的问题
// 注意拼接字符时的奇偶判断和回文不能与原字符相同的问题

/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic2 = function (n) {
  // 特殊情况处理
  if (n <= 10 || Math.pow(10, n.length - 1) == n) {
    return String(n - 1);
  }
  // 11 1001 101
  if (Math.pow(10, n.length - 1) + 1 == n) {
    return String(n - 2);;
  }
  if (n == "9".repeat(n.length)) {
    return (parseInt(n) + 2).toString();
  }
  // 长度
  const len = n.length;
  const isOdd = len % 2 == 1;
  const halfLen = isOdd ? (len + 1) / 2 : len / 2;
  let ans;
  let minDiff = Number.MAX_VALUE;
  if (isOdd) {
    // 奇数
    const halfStr = n.substring(0, halfLen);
    // N
    const N = halfStr + halfStr.split("").reverse().slice(1).join("");
    if (Math.abs(N - n) < minDiff && N !== n) {
      ans = N;
      minDiff = Math.abs(N - n);
    }
    // N + 1
    const halfStrAdd = (Number(halfStr) + 1).toString();
    const Nadd = halfStrAdd + halfStrAdd.split("").reverse().slice(1).join("");
    if (Math.abs(Nadd - n) < minDiff) {
      ans = Nadd;
      minDiff = Math.abs(Nadd - n);
    }
    // N - 1
    const halfStrSub = (Number(halfStr) - 1).toString();
    const Nsub = halfStrSub + halfStrSub.split("").reverse().slice(1).join("");
    if (Math.abs(Nsub - n) <= minDiff) {
      ans = Nsub;
      minDiff = Math.abs(Nsub - n);
    }
  } else {
    // 偶数
    const halfStr = n.substring(0, halfLen);
    // N
    const N = halfStr + halfStr.split("").reverse().join("");
    if (Math.abs(N - n) < minDiff && N !== n) {
      ans = N;
      minDiff = Math.abs(N - n);
    }
    // N + 1
    const halfStrAdd = (Number(halfStr) + 1).toString();
    const Nadd = halfStrAdd + halfStrAdd.split("").reverse().join("");
    if (Math.abs(Nadd - n) < minDiff) {
      ans = Nadd;
      minDiff = Math.abs(Nadd - n);
    }
    // N - 1
    const halfStrSub = (Number(halfStr) - 1).toString();
    const Nsub = halfStrSub + halfStrSub.split("").reverse().join("");
    if (Math.abs(Nsub - n) <= minDiff) {
      ans = Nsub;
      minDiff = Math.abs(Nsub - n);
    }
  }
  return ans;
};

nearestPalindromic2("11");
