/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-09 15:28:10                                                  *
 * @LastModifiedDate: 2022-02-09 15:31:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 找出连续的两个斐波那契数，它们相乘正好等于给定的数
// 如果找不出，就找出相乘大于给定的数，但是是离给定数最邻接的结果
// 以数组形式返回找出的两个斐波那契数，并在第三项给出是否等于给定数的布尔值

/**
 * @description 满足相乘等于prod的两个相邻斐波那契数
 * @params {Number} prod 提供的prod
 * @returns {Array} [F(n), F(n+1), boolean] 相乘接近prod的两个数，以及二者相乘等于prod
 */
function productFib(prod) {
  // 斐波那契数列
  let pre = 0;
  let current = 1;
  // 当pre * current <= prod时执行
  while (pre * current < prod) {
    let sum = pre + current;
    pre = current;
    current = sum;
  }
  // 判断是否找到了合适的F(n)和F(n+1)
  const hasF = pre * current == prod;
  // 返回结果
  return [pre, current, hasF];
}

/**
 * @description 满足相乘等于prod的两个相邻斐波那契数
 * @params {Number} prod 提供的prod
 * @returns {Array} [F(n), F(n+1), boolean] 相乘接近prod的两个数，以及二者相乘等于prod
 */
function productFib(prod) {
  // 进一步简化
  // 斐波那契数列
  let [pre, current] = [0, 1];
  // 当pre * current <= prod时执行
  while (pre * current < prod) {
    [pre, current] = [current, pre + current];
  }
  // 返回结果
  return [pre, current, pre * current == prod];
}
