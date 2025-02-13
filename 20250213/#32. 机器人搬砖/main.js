/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 10:05:26                                                  *
 * @LastModifiedDate: 2025-02-13 10:16:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 机器人搬砖，一共有 N 堆砖存放在 N 个不同的仓库中，第 i 堆砖中有 bricks[i] 块砖头，要求在 8 小时内搬完。 机器人每小时能搬砖的数量取决于有多少能量格，机器人一个小时中只能在一个仓库中搬砖，机器人的能量格只在这一个小时有效，为使得机器人损耗最小化，应尽量减小每次补充的能量格数。

// 为了保障在 8 小时内能完成搬砖任务，请计算每小时给机器人充能的最小能量格数。

// 无需考虑机器人补充能力格的耗时； 无需考虑机器人搬砖的耗时； 机器人每小时补充能量格只在这一个小时中有效；

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(" ").map((v) => parseInt(v));
  if (arr.length > 8) {
    console.log(-1);
    return 0;
  }
  let left = 1;
  let right = Math.max.apply(null, arr);
  const check = (mid) => {
    let hour = 0;
    for (const item of arr) {
      hour += Math.ceil(item / mid);
    }
    return hour <= 8;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(left);
}
solution();
