/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-12 10:24:16                                                  *
 * @LastModifiedDate: 2023-02-12 19:54:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们从一块字母板上的位置 (0, 0) 出发，该坐标对应的字符为 board[0][0]。

// 在本题里，字母板为board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]，如下所示。

/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  const start = [0, 0];
  const res = [];
  for (let i = 0; i < target.length; i++) {
    if (target[i] === target[i - 1]) {
      res.push("!");
    } else {
      // 找到target[i]的位置
      let code = target[i].charCodeAt() - "a".charCodeAt();
      let y = Math.floor(code / 5);
      let x = code % 5;
      let xDiff = x - start[0];
      let yDiff = y - start[1];
      start[0] = x;
      start[1] = y;
      if (target[i] === "z") {
        // 先横向，再竖向
        if (xDiff > 0) {
          res.push("R".repeat(xDiff));
        } else {
          res.push("L".repeat(-xDiff));
        }
        if (yDiff > 0) {
          res.push("D".repeat(yDiff));
        } else {
          res.push("U".repeat(-yDiff));
        }
      } else {
        //先竖向，再横向
        if (yDiff > 0) {
          res.push("D".repeat(yDiff));
        } else {
          res.push("U".repeat(-yDiff));
        }
        if (xDiff > 0) {
          res.push("R".repeat(xDiff));
        } else {
          res.push("L".repeat(-xDiff));
        }
      }
      res.push("!");
    }
  }
  return res.join("");
};
