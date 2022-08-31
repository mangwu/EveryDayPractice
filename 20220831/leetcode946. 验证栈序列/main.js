/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-31 08:59:36                                                  *
 * @LastModifiedDate: 2022-08-31 09:18:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，
// 只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true
// ；否则，返回 false 。

//
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  // 模拟出入栈
  const n = pushed.length;
  let pushIdx = 0;
  let popIdx = 0;
  const stack = [];
  while (popIdx < n) {
    if (pushIdx == n && stack[stack.length - 1] !== popped[popIdx]) {
      return false;
    }
    while (pushIdx < n && popIdx < n && pushed[pushIdx] === popped[popIdx]) {
      pushIdx++;
      popIdx++;
    }
    while (stack.length && popped[popIdx] === stack[stack.length - 1]) {
      popIdx++;
      stack.pop();
    }
    stack.push(pushIdx);
    pushIdx++;
  }
  return true;
};

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  // 模拟
  const n = pushed.length;
  let pushIdx = 0;
  let popIdx = 0;
  const stack = [];
  while (popIdx < n) {
    if (pushIdx == n && stack[stack.length - 1] !== popped[popIdx]) {
      return false;
    }
    while (stack.length && popped[popIdx] === stack[stack.length - 1]) {
      popIdx++;
      stack.pop();
    }
    if (pushIdx < n && pushed[pushIdx] == popped[popIdx]) {
      pushIdx++;
      popIdx++;
    } else if (pushIdx < n) {
      stack.push(pushed[pushIdx]);
      pushIdx++;
    }
  }
  return true;
};
