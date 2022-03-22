/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-22 21:53:12                                                  *
 * @LastModifiedDate: 2022-03-22 23:47:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 使用单调栈找到每个元素的下一个最大值索引（可以相等）
  // 然后遍历得出结果即可
  const nextGreaterEle = [];
  const stack = [];
  for (let i = height.length - 1; i >= 0; i--) {
    // 出栈，比当前值小的出栈
    while (stack.length > 0 && height[stack[stack.length - 1]] < height[i]) {
      stack.pop();
    }
    // 获取栈顶元素 没有就是-1
    nextGreaterEle[i] = stack.length ? stack[stack.length - 1] : -1;
    // 入栈
    stack.push(i);
  }
  let ans = 0;
  // console.log(nextGreaterEle);
  // 遍历nextGreaterEle
  for (let i = 0; i < height.length; i++) {
    const next = nextGreaterEle[i];
    if (next == -1) {
      // 当前元素最高,可以直接计算后续了
      // 找到下一个等于-1的元素
      let j = i + 1;
      let sum = 0;
      for (; j < height.length; j++) {
        if (nextGreaterEle[j] !== -1) {
          sum += height[j];
        } else {
          break;
        }
      }
      // 计算中间的面积
      let area = Math.min(height[i], height[j] ? height[j] : 0) * (j - i - 1) - sum;
      ans += area;
      i = j - 1;
      continue;
    }
    let start = i;
    let minHeight = Math.min(height[start], height[next]);
    let area = minHeight * (next - start - 1);
    for (let j = start + 1; j < next; j++) {
      area -= height[j];
    }
    ans += area;
    i = next - 1;
  }
  return ans;
};
// 先计算出下一个更大的值的元素索引，再遍历索引计算出相应的值
// 其中有两种计算方式 
// 1. 有下一个更大的元素,取二者的高度小值，乘以next - start - 1 再减去其中元素的和值
//    即使下一个更大元素为下一个元素也不要紧，因为会被计算为0, 
//    最后需要将索引设置为next - 1(下次遍历从next开始)
// 2. 没有下一个更大的元素（为-1），遍历找到下一个索引值为-1的元素索引，二者中间的就是计算区域
//    再遍历时同时计算中间区域和值，使用同样方式计算面积，最后更新索引
