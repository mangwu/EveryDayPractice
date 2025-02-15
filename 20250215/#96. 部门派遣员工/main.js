/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 12:46:27                                                  *
 * @LastModifiedDate: 2025-02-15 13:07:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 某公司部门需要派遣员工去国外做项目。 现在，代号为 x 的国家和代号为 y 的国家分别需要 cntx 名和 cnty 名员工。 部门每个员工有一个员工号（1,2,3,......），工号连续，从1开始。

// 部长派遣员工的规则：

// 规则1：从 [1, k] 中选择员工派遣出去
// 规则2：编号为 x 的倍数的员工不能去 x 国，编号为 y 的倍数的员工不能去 y 国。
// 问题：

// 找到最小的 k，使得可以将编号在 [1, k] 中的员工分配给 x 国和 y 国，且满足 x 国和 y 国的需求。

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
  const [x, y, cntx, cnty] = inputs[0].split(" ").map((v) => parseInt(v));
  // 二分查找
  let left = 1;
  let right = 10 ** 10;
  const check = (k) => {
    // 1 - k，共k名员工
    const noXY = Math.floor(k / (x * y)); // x y都不去的员工个数
    const noX = Math.floor(k / x) - noXY; // 只是不去X国的员工个数
    const noY = Math.floor(k / y) - noXY; // 只是不去Y国的员工个数
    const left = k - noX - noY - noXY; // 都可以去的员工个数
    // noX个数的人去Y国
    const leftY = Math.max(cnty - noX, 0);
    // noY个数的人去X国
    const leftX = Math.max(cntx - noY, 0);
    return left >= leftX + leftY; // 判断剩余人是否能满足分配
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
