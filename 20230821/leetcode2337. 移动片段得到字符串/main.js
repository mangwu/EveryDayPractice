/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-21 08:55:33                                                  *
 * @LastModifiedDate: 2023-08-21 09:26:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 start 和 target ，长度均为 n 。每个字符串 仅 由字符 'L'、'R' 和 '_' 组成，其中：

// 字符 'L' 和 'R' 表示片段，其中片段 'L' 只有在其左侧直接存在一个 空位 时才能向 左 移动，而片段 'R' 只有在其右侧直接存在一个 空位 时才能向 右 移动。
// 字符 '_' 表示可以被 任意 'L' 或 'R' 片段占据的空位。
// 如果在移动字符串 start 中的片段任意次之后可以得到字符串 target ，返回 true ；否则，返回 false 。

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  //两个字符串中， L和R的数量要保持一致
  const n = start.length;
  let idx = 0;
  for (let i = 0; i < n; i++) {
    if (target[i] === "_") continue;
    let flag = true;
    while (idx < n) {
      if (start[idx] !== "_") {
        // 找到匹配的字符
        if (start[idx] === target[i]) {
          if (start[idx] === "L" && idx < i) return false;
          if (start[idx] === "R" && idx > i) return false;
          idx++;
          flag = false;
          break;
        } else return false;
      }
      idx++;
    }
    // 没有找到匹配的字符
    if (flag) return false;
  }
  // idx后面可能还有未匹配的字符
  for (; idx < n; idx++) {
    if (start[idx] !== "_") return false;
  }
  return true;
};

