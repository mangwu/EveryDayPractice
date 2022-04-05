/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-05 17:27:07                                                  *
 * @LastModifiedDate: 2022-04-05 18:09:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // n个左括号和n个右括号
  // 1对时，只有一种情况，就是["()"];
  // 2对时，在一对的基础上加上一对，有三种选择（2n-1），左中右，但是只有两种情况["()()","(())"];
  // 3对时，在两对基础上加上一对，每一种有5种情况(2n-1)，去除重复的，
  //  有["()()()","(())()","()(())","(()())","((()))"]5种
  if (n == 1) {
    return ["()"];
  }
  const set = new Set();
  const subArr = generateParenthesis(n - 1);
  for (const sub of subArr) {
    const newStrArr = sub.split("");
    for (let i = 0; i <= 2 * n - 1; i++) {
      let newEleArr = newStrArr.slice();
      newEleArr.splice(i, 0, "()");
      set.add(newEleArr.join(""));
    }
  }
  return [...set];
};
