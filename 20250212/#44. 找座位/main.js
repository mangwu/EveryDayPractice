/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 09:58:53                                                  *
 * @LastModifiedDate: 2025-02-12 10:09:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 在一个大型体育场内举办了一场大型活动，由于疫情防控的需要，要求每位观众的必须间隔至少一个空位才允许落座。 现在给出一排观众座位分布图，座位中存在已落座的观众，请计算出，在不移动现有观众座位的情况下，最多还能坐下多少名观众。

// 输入描述
// 一个数组，用来标识某一排座位中，每个座位是否已经坐人。0表示该座位没有坐人，1表示该座位已经坐人。

// 1 ≤ 数组长度 ≤ 10000

// 输出描述
// 整数，在不移动现有观众座位的情况下，最多还能坐下多少名观众。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // 每个连续0的个数，000,0000 => 1  00000,000000 => 2
  const str = inputs[0];
  const n = str.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] === "0") {
      let j = i + 1;
      let num = 1;
      while (str[j] === "0") {
        j++;
        num++;
      }
      i = j - 1;
      // 特殊情况判断
      if (str[i - 1] === "1" && str[j] === "1") {
        // 被1包围
        res += Math.floor((num - 1) / 2);
      } else if (str[i - 1] !== "1" && str[j] !== "1") {
        // 两个边界，全是0
        res += Math.floor((num + 1) / 2);
      } else {
        // 一个边界
        res += Math.floor(num / 2);
      }
    }
  }
  console.log(res);
}
solution();
