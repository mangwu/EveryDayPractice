/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 17:13:52                                                  *
 * @LastModifiedDate: 2025-02-12 17:37:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 橱窗里有一排宝石，不同的宝石对应不同的价格，宝石的价格标记为 gems[i]（0 ≤ i < n，n = gems.length） 宝石可同时出售0个或多个，如果同时出售多个，则要求出售的宝石编号连续； 例如客户最大购买宝石个数为m，购买的宝石编号必须为：gems[i]，gems[i+1]，...，gems[i+m-1]（0 ≤ i < n，m ≤ n） 假设你当前拥有总面值为 value 的钱，请问最多能购买到多少个宝石，如无法购买宝石，则返回0。

// 输入描述 第一行输入n，参数类型为int，取值范围：[0,10^6]，表示橱窗中宝石的总数量。 之后 n 行分别表示从第0个到第n-1个宝石的价格，即 gems[0] 到 gems[n-1] 的价格，类型为int，取值范围：(0,1000]。 之后一行输入v，类型为int，取值范围：[0,10^9]，表示你拥有的钱。

// 输出描述 输出int类型的返回值，表示最大可购买的宝石数量。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const gems = [];
  const n = parseInt(inputs[0]);
  for (let i = 1; i <= n; i++) {
    gems.push(parseInt(inputs[i]));
  }
  const maxValue = parseInt(inputs[n + 1]);
  // 滑动窗口，双指针
  let right = 0;
  let sum = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (sum <= maxValue) res = Math.max(res, right - i);
    while (right < n && sum <= maxValue) {
      sum += gems[right++];
      if (sum <= maxValue) res = Math.max(res, right - i);
    }
    sum -= gems[i];
  }
  console.log(res);
}

solution();
