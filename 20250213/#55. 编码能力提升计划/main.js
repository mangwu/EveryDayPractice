/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 20:18:18                                                  *
 * @LastModifiedDate: 2025-02-13 20:50:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 为了提升软件编码能力，小王制定了刷题计划，他选了题库中的n道题，编号从0到n-1，并计划在m天内按照题目编号顺序刷完所有的题目（注意，小王不能用多天完成同一题）。

// 在小王刷题计划中，小王需要用tme[i]的时间完成编号 i 的题目。

// 此外，小王还可以查看答案，可以省去该题的做题时间。为了真正达到刷题效果，小王每天最多直接看一次答案。

// 我们定义m天中做题时间最多的一天耗时为T（直接看答案的题目不计入做题总时间)。

// 请你帮小王求出最小的T是多少。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  let time = inputs[0].split(",").map((v) => parseInt(v));
  const days = parseInt(inputs[1]);
  if (time.length <= days) {
    console.log(0);
    return;
  } // 每天都看题
  // 将time中前days大的时间去除，这些题目可以直接看
  const arr = time.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < days; i++) arr.pop(); // 去除最大的days个
  time = arr.sort((a, b) => a[1] - b[1]).map((v) => v[0]);
  let left = 0;
  let right = time.reduce((a, b) => a + b);
  console.log(time,left,right);
  const check = (mid) => {
    let curDay = 0;
    for (let i = 0; i < time.length; i++) {
      if (mid < time[i]) return false;
      let curSum = mid;
      let j = i;
      while (curSum >= time[j]) {
        curSum -= time[j++];
      }
      i = j - 1;
      curDay++;
    }
    return curDay <= days;
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
