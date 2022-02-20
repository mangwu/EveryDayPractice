/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-20 16:30:54                                                  *
 * @LastModifiedDate: 2022-02-20 17:10:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 有两种特殊字符：

// 第一种字符可以用一个比特 0 来表示
// 第二种字符可以用两个比特(10 或 11)来表示、
// 给定一个以 0 结尾的二进制数组 bits ，如果最后一个字符必须是一位字符，则返回 true 。


/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  // 倒叙遍历
  // 10 是唯一有0的二位
  // 倒序遍历到0就停止遍历，记录1的个数
  let num1 = 0;
  const len = bits.length;
  for(let i = len - 2; i >= 0; i--) {
    if (bits[i] === 1) {
      num1++;
    } else {
      // 遇到0就退出（因为0表明了要么是10，要么是单个0了，依据1的个数进行判断即可）
      break;
    }
  }
  // 奇数个1说明最后一个0必构成10，否则只构成0
  return num1 % 2 == 0;
};
