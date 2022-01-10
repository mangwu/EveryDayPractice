/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-10 16:37:36                                                  *
 * @LastModifiedDate: 2022-01-10 18:38:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 306. 累加数
// 累加数 是一个字符串，组成它的数字可以形成累加序列。

// 一个有效的 累加序列 必须 至少 包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。

// 给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 累加数 。如果是，返回 true ；否则，返回 false 。

// 说明：累加序列里的数 不会 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  // 1. 判断两数之和为后者的方式简单
  // 2. 难点在于前面两个数如何确定，因为前两个数的位数和大小都未确定
  // 3. 确定前两个数的位数，第一个数的位数最大小于num的一半
  // 4. 确定第一位位数后，第二位最小可以是1位
  // 5. 总位数 - （第二位位数 + 第一位位数） >= max(第一位位数， 第二位位数)
  // 6. 需要注意，如果首位是0开头的，那么第一次

  // 总长度
  const len = num.length;
  // 如果小于3直接返回false
  if (len < 3) {
    return false;
  }
  // 第一位长度 最大小于num的一半
  let firstLen = Math.floor((len - 1) / 2);
  // 首位是0，就只能是一位，因为不允许出现01，02之类的数
  if (num[0] === "0") {
    firstLen = 1;
  }
  // 遍历第一位
  for (let i = 0; i < firstLen; i++) {
    // 遍历第二位，剩余位数要大于等于第一位和第二位中的大者
    for (let j = i + 1; len - j - 1 >= Math.max(i + 1, j - i); j++) {
      // 检查是否符合条件
      // 第二位首位不能是0
      if (num[i + 1] === "0" && j !== i + 1) break;
      if (isAdditiveNumberWithInitial(num, i, j)) {
        return true;
      }
    }
  }
  return false;
};

/**
 * @description 对于已知的前两个数判断是否是累加数
 * @param {String} num 可能的累加序列
 * @param {number} first 第一个数字的开始索引
 * @param {number} second 第二个数字的开结束索引
 * @returns {boolean} 在给定初始值的情况下是否是累加数
 */
const isAdditiveNumberWithInitial = (num, first, second) => {
  // 获取前两个数
  let pre1 = Number(num.slice(0, first + 1));
  let pre2 = Number(num.slice(first + 1, second + 1));
  // 字符串索引
  let i = second + 1;
  // 当i 等于num时退出循环，或者循环内直接返回false
  while (i !== num.length) {
    // 求和
    const sum = (pre1 + pre2).toString();
    // 求和长度
    const len = sum.length;
    // 第三个字符
    const thirdStr = num.slice(i, i + len);
    // 首位不能出现0 无需在这里判断，因为sum首位必定不是0
    if (sum != thirdStr) {
      return false;
    }
    // 自增
    i += len;
    pre1 = pre2;
    pre2 = Number(thirdStr);
  }
  return true;
};
// console.log(isAdditiveNumberWithInitial('1123581321', 0, 1));
// isAdditiveNumberWithInitial('112', 0, 1);
// console.log(isAdditiveNumber("199001200"));
// console.log(isAdditiveNumber("011235813"));
console.log(isAdditiveNumber("101"));
// console.log(isAdditiveNumber("1123585112363"));
