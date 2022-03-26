/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-25 17:18:01                                                  *
 * @LastModifiedDate: 2022-03-25 23:25:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  k--;
  let set = new Array(n).fill(0).map((_v, i) => i + 1);
  // x开头的有n - 1个
  // 可以先计算出k应该选择的是那一个x开头的
  const getRest = (nums, n, k) => {
    if (k == 0) {
      return nums.join("");
    }
    if (n == 1) {
      return nums[0] + "";
    }
    const idx = Math.floor(k / (n - 1)); // 本次
    console.log(idx);
    let ans = nums[idx];
    const remainder = k % (n - 1); // 余数
    nums = nums.filter((v) => v !== ans);
    console.log(ans, nums, remainder);
    return ans + getRest(nums, nums.length, remainder);
  };
  return getRest(set, n, k);
};
// 上述解答错误
// console.log(getPermutation(3, 3));

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let dp = [[n]];
  let pre = 2;
  while (n > 1) {
    const nxt = [];

    for (let i = 0; i < pre; i++) {
      for (const d of dp) {
        let copy = d.slice();
        copy.splice(i, 0, n - 1);
        nxt.push(copy);
      }
    }
    console.log(nxt);
    pre++;
    n--;
    dp = nxt;
  }
  console.log(dp);
};
getPermutation(3, 3);
