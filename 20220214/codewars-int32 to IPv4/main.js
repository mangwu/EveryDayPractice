/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-14 16:03:19                                                  *
 * @LastModifiedDate: 2022-02-14 16:30:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出一个int32位的非负整数，返回它对应的IPv4地址
// IPv4地址由4个octet组成,一个octet指一个字节（8位）
// 如128.32.10.1 => 1000000.00100000.00001010.00000001
// 如果上面的4个字节组成一个数字，那就是2149583361 => 其对应的IPv4地址就是128.32.10.1

/**
 * @description 将int32转化为对应IPv4地址
 * @param {Number} int32 大数字
 * @returns {String} IPv4
 */
function int32ToIp(int32) {
  // 通过右移实现操作
  // 声明数组保存每个八位
  // 遍历8次获得数字的后八位，通过与操作获取最后一位
  // 每次获取最后一位就右移
  // 获得一个八位后使用parseInt将2进制转化为十进制
  const arr = [];
  for (let i = 3; i >= 0; i--) {
    let strArr = [];
    for (let j = 7; j >= 0; j--) {
      // 取最后一位
      strArr[j] = int32 & 1;
      // 右移
      int32 = int32 >> 1;
    }
    arr[i] = parseInt(strArr.join(""), 2);
  }
  // console.log(arr.join("."));
  return arr.join(".");
}

int32ToIp(4289583361);

// 上述仍然需要遍历32遍，实际上不需要进行遍历，通过合理的右移可以直接返回结果

/**
 * @description 将int32转化为对应IPv4地址
 * @param {Number} int32 大数字
 * @returns {String} IPv4
 */
function int32ToIp2(int32) {
  // int32与0xFF进行与运算就得到了最后八位的十进制表示
  // 所以将int32右移8位再与0xFF进行与运算就得到了第三个IPv4地址的十进制表示
  return (
    ((int32 >> 24) & 0xff) +
    "." +
    ((int32 >> 16) & 0xff) +
    "." +
    ((int32 >> 8) & 0xff) +
    "." +
    (int32 & 0xff)
  );
}
console.log(int32ToIp2(4289583361));
