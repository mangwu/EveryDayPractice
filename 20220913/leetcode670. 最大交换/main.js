/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-13 08:54:19                                                  *
 * @LastModifiedDate: 2022-09-13 09:18:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const stack = [];
  const maxStack = [];
  const str = num.toString();
  const n = str.length;
  for (let i = n - 1; i >= 0; i--) {
    stack.push([str[i], i]);
    if (maxStack.length == 0) {
      maxStack.push([str[i], i]);
    } else {
      const pre = maxStack[maxStack.length - 1];
      if (str[i] > pre[0]) {
        maxStack.push([str[i], i]);
      } else {
        maxStack.push(pre.slice());
      }
    }
  }
  // 确定要交换的索引
  const ans = str.split("");
  while (stack.length) {
    let cur = stack.pop();
    let curMax = maxStack.pop();
    if (cur[0] < curMax[0]) {
      // 可以替换
      [ans[cur[1]], ans[curMax[1]]] = [ans[curMax[1]], ans[cur[1]]];
      break;
    }
  }
  return parseInt(ans.join(""));
};
