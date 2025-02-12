/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 20:06:01                                                  *
 * @LastModifiedDate: 2025-02-12 20:59:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(" ").map((v) => parseInt(v));
  const points = [];
  let res = [];
  for (let i = 0; i < arr.length; i += 2) {
    points.push([arr[i], arr[i + 1]]);
  }
  if (points.length <= 2) {
    res = points;
  } else {
    const n = points.length;
    res.push(points[0]);
    for (let i = 1; i < n - 1; i++) {
      const [x1, y1] = points[i - 1];
      const [x2, y2] = points[i];
      const [x3, y3] = points[i + 1];
      // 计算斜率是否相等
      // y2 - y1 / x2 - x1 === y3 - y2 / x3 - x2
      // 使用y2 - y1 !== y3 - y2 || x2 - x1 !== x3 - x2不能判断它是拐点
      // 例如[0,0] [0,1] [0,2]
      if ((y2 - y1) * (x3 - x2) !== (y3 - y2) * (x2 - x1)) {
        res.push(points[i]);
      }
    }
    res.push(points[n - 1]);
  }
  console.log(res.map((v) => v.join(" ")).join(" "));
}
solution();
