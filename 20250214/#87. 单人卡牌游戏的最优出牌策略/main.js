/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 23:51:27                                                  *
 * @LastModifiedDate: 2025-02-15 00:12:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const numbers = inputs[0].split(" ").map((v) => parseInt(v));
  const colors = inputs[1].split(" ");
  const n = numbers.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    const color = colors[i];
    const num = numbers[i];
    hash.has(color) ? hash.get(color).push(i) : hash.set(color, [i]);
    hash.has(num) ? hash.get(num).push(i) : hash.set(num, [i]);
  }
  const linkList = new Array(n).fill(0).map((v) => new Array(n).fill(0));
  for (const [key, value] of hash) {
    const m = value.length;
    // 相同颜色或数字能连接
    for (let i = 0; i < m; i++) {
      for (let j = i + 1; j < m; j++) {
        linkList[value[i]][value[j]] = 1;
        linkList[value[j]][value[i]] = 1;
      }
    }
  }
  const dfs = (cur, visited) => {
    let res = 0;
    for (let i = 0; i < n; i++) {
      if (i !== cur && !visited[i] && linkList[cur][i]) {
        visited[i] = true;
        res = Math.max(res, dfs(i, visited));
        visited[i] = false;
      }
    }
    return res + 1;
  };
  let res = 0;
  for (let i = 0; i < n; i++) {
    const visited = new Array(n).fill(false);
    visited[i] = true;
    res = Math.max(res, dfs(i, visited));
  }
  console.log(res);
}

solution();
