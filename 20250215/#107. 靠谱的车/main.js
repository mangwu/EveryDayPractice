/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 20:07:04                                                  *
 * @LastModifiedDate: 2025-02-15 20:10:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 程序员小明打了一辆出租车去上班。出于职业敏感，他注意到这辆出租车的计费表有点问题，总是偏大。

// 出租车司机解释说他不喜欢数字4，所以改装了计费表，任何数字位置遇到数字4就直接跳过，其余功能都正常。

// 比如：

// 23再多一块钱就变为25； 39再多一块钱变为50； 399再多一块钱变为500； 小明识破了司机的伎俩，准备利用自己的学识打败司机的阴谋。

// 给出计费表的表面读数，返回实际产生的费用。

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
  const num = inputs[0];
  let res = 0;
  const n = num.length;
  for (i = 0; i < n; i++) {
    let base = parseInt(num[i]);
    base > 4 && base--;
    res += base * Math.pow(9, n - i - 1);
  }
  console.log(res);
}
solution();
