/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 19:37:06                                                  *
 * @LastModifiedDate: 2025-02-12 20:02:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 为了达到新冠疫情精准防控的需要，为了避免全员核酸检测带来的浪费，需要精准圈定可能被感染的人群。 现在根据传染病流调以及大数据分析，得到了每个人之间在时间、空间上是否存在轨迹交叉。 现在给定一组确诊人员编号（X1,X2,X3,...,Xn），在所有人当中，找出哪些人需要进行核酸检测，输出需要进行核酸检测的人数。（注意：确诊病例自身不需要再做核酸检测） 需要进行核酸检测的人，是病毒传播链条上的所有人员，即有可能通过确诊病例所能传播到的所有人。 例如：A是确诊病例，A和B有接触、B和C有接触、C和D有接触、D和E有接触，那么B、C、D、E都是需要进行核酸检测的人。

// 输入描述 第一行为总人数 N 第二行为确认病例人员编号（确诊病例人员数量 < N），用逗号分割 第三行开始，为一个 N * N 的矩阵，表示每个人员之间是否有接触，0表示没有接触，1表示有接触。

// 输出描述 整数：需要做核酸检测的人数

// 备注 人员编号从0开始 0 < N < 100

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  let queue = inputs[1].split(",").map((v) => parseInt(v));
  const grid = [];
  for (let i = 2; i < n + 2; i++) {
    grid.push(inputs[i].split(",").map((v) => parseInt(v)));
  }
  let res = [];
  const visited = new Array(n).fill(false);
  for (const q of queue) {
    visited[q] = true;
  }
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      for (let i = 0; i < n; i++) {
        if (i !== q && !visited[i] && grid[i][q]) {
          visited[i] = true;
          nxt.push(i);
          res.push(i);
        }
      }
    }
    queue = nxt;
  }
  console.log(res.length);
}
solution();
