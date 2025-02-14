/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 02:07:36                                                  *
 * @LastModifiedDate: 2025-02-15 02:20:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 老李是货运公司承运人，老李的货车额定载货重量为 wt。 现有两种货物： 货物 A 单件重量为 wa，单件运费利润为 pa 货物 B 单件重量为 wb，单件运费利润为 pb 老李每次发车时载货总重量刚好为货车额定的载货重量 wt，车上必须同时有货物 A 和货物 B ，货物A、B不可切割。 老李单次满载运输可获得的最高利润是多少？

// 输入描述

// 第一列输入为货物 A 的单件重量 wa，0 < wa < 10000 第二列输入为货物 B 的单件重量 wb，0 < wb < 10000 第三列输入为货车的额定载重 wt，0 < wt < 100000 第四列输入为货物 A 的单件运费利润 pa，0 < pa < 1000 第五列输入为货物 B 的单件运费利润 pb，0 < pb < 1000

// 输出描述

// 单次满载运输的最高利润

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
  const [wa, wb, wt, pa, pb] = inputs[0].split(" ").map((v) => parseInt(v));
  const maxA = Math.floor(wt / wa);
  let res = 0;
  for (let i = 0; i <= maxA; i++) {
    const proA = i * pa;
    const leftWeight = wt - wa * i;
    const bNum = Math.floor(leftWeight / wb);
    const proB = bNum * pb;
    // 单次满载，必须要整除
    if (leftWeight % wb === 0) res = Math.max(res, proA + proB);
  }
  console.log(res);
}

solution();
