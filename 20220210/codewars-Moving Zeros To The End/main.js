/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-10 14:17:19                                                  *
 * @LastModifiedDate: 2022-02-10 14:42:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 写一个方法，把数组中所有的0移到最后

var moveZeros = function (arr) {
  // TODO: Program me
  // 记录0的个数
  let num = 0;
  const newArr = arr.filter((v) => {
    if (v === 0) {
      num++;
      return false;
    }
    return 1;
  });
  return newArr.concat(Array(num).fill(0));
};

console.log(
  moveZeros([false, 1, 0, 1, 2, 0, 1, false, 3, "a", "-1", 9, true, -8])
);
