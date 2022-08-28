/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-28 10:43:23                                                  *
 * @LastModifiedDate: 2022-08-28 11:01:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个包含若干星号 * 的字符串 s 。

// 在一步操作中，你可以：

// 选中 s 中的一个星号。
// 移除星号 左侧 最近的那个 非星号 字符，并移除该星号自身。
// 返回移除 所有 星号之后的字符串。

// 注意：

// 生成的输入保证总是可以执行题面中描述的操作。
// 可以证明结果字符串是唯一的。

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  // 记录被删除的索引
  const set = new Set();
  let pre = 0;
  let idx = s.length;
  for (let i = 0; i < navigator; i++) {
    if (s[i] == "*") {
      set.add(i);
      set.add(pre);
      pre--;
    } else {
      pre = i;
    }
  }
};

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  //  倒叙遍历
  const n = s.length;
  let idx = n - 1;
  let ans = [];
  while (idx >= 0) {
    if (s[idx] == "*") {
      // 进行删除
      let cur = 1;
      idx--;
      while (cur && idx >= 0) {
        if (s[idx] == "*") {
          cur++;
        } else {
          cur--;
        }
        idx--;
      }
    } else {
      ans.push(s[idx]);
      idx--;
    }
  }
  return ans.reverse().join("");
};
