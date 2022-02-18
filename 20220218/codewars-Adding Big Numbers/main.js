/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-18 11:29:09                                                  *
 * @LastModifiedDate: 2022-02-18 14:29:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// 大数相加
// 使用Number或者parseInt转化的数小于16位，之后的数都会使用科学计算法进行简化，导致结果不准确
// 为此，可以将数分而加，最后拼接成整数

function add(a, b) {
  // 每次取最后的15位数
  const lena = a.length;
  const lenb = b.length;
  console.log(lena, lenb);
  let ans = [];
  if (lena > 15 || lenb > 15) {
    let len = Math.max(lena, lenb);
    // 进位
    let carry = 0;
    // 循环次数 加上1，防止出现最后一次进位无效的情况
    let n = Math.floor(len / 15) + 1;
    for (let i = 1; i <= n; i++) {
      let stra = a.substring(lena - i * 15, lena - (i - 1) * 15);
      let strb = b.substring(lenb - i * 15, lenb - (i - 1) * 15);
      console.log(stra, strb);
      let sumstr = (Number(stra) + Number(strb) + carry).toString();
      if (sumstr.length > 15) {
        // 有进位
        carry = 1;
        // 取后面15位
        ans[n - i] = sumstr.substring(1);
      } else {
        // 无进位
        carry = 0;
        // 直接赋值
        ans[n - i] = sumstr;
      }
    }
  } else {
    return (Number(a) + Number(b)).toString();
  }
  console.log(ans);
  return ans.filter((v) => v !== "0").join("");
}
function add2(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}
console.log(
  add(
    "638299834329842894321684531347293874",
    "938498237058927364564123156456412340892374089"
  )
);
console.log(
  add2(
    "638299834329842894321684531347293874",
    "938498237058927364564123156456412340892374089"
  )
);

/**
 * @description 大数相加
 * @param {String} a 大数
 * @param {String} b 大数
 * @returns String a和b之和
 */
function add3(a, b) {
  // 不用复杂的以15为单元进行计算，直接每一位都进行计算
  // 声明结果
  let res = "";
  // 声明保存进位和和数
  let c = 0;
  // 每位进行相加所以先分离为单字符
  a = a.split("");
  b = b.split("");
  // 当a，和b中有字符，且c进位有值是进行相加操作
  while (a.length || b.length || c) {
    // 和值
    // 取两次反值是为了将字符数字转化为数字，同时能够将undefined先转化为0的反值（-1），再转化为0
    c += ~~a.pop() + ~~b.pop();
    // 取c的个位 从低位向高位遍历，所以需要后加res
    res = (c % 10) + res;
    // 判断c是否进位, true和false在第一个计算合数时会转化为 1或0
    c = c > 9;
  }
  return c;
}
