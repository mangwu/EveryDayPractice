/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-12 15:09:52                                                  *
 * @LastModifiedDate: 2022-08-12 15:26:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
// 假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，
// 序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const n = pushed.length;
  let pushIdx = 0;
  let popIdx = 0;
  const stack = [];
  while (pushIdx < n || popIdx < n) {
    if (pushed[pushIdx] == popped[popIdx]) {
      // 入栈后出栈
      pushIdx++;
      popIdx++;
      continue;
    }
    // 入栈
    if (stack.length == 0 || stack[stack.length - 1] !== popped[popIdx]) {
      if (pushIdx == n) {
        return false;
      }
      stack.push(pushed[pushIdx]);
      pushIdx++;
      continue;
    }
    // 出栈
    if (stack.length > 0 && popped[popIdx] == stack[stack.length - 1]) {
      stack.pop();
      popIdx++;
    } else {
      return false;
    }
  }
  return true;
};


// [1,2,3,4,5,6,7,8,9,10,11,12,13]
// [4,3,5,2,1,9,7,12,11,13,10,8,6]