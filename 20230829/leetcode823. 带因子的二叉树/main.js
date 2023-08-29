/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-29 08:58:51                                                  *
 * @LastModifiedDate: 2023-08-29 10:15:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出一个含有不重复整数元素的数组 arr ，每个整数 arr[i] 均大于 1。

// 用这些整数来构建二叉树，每个整数可以使用任意次数。其中：每个非叶结点的值应等于它的两个子结点的值的乘积。

// 满足条件的二叉树一共有多少个？答案可能很大，返回 对 109 + 7 取余 的结果。

const MOD = 10 ** 9 + 7;

/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  // 计算出arr中每个值是否能由数组中的其它两个数字相乘得到（数组中没有1）
  const n = arr.length;
  const hash = new Map();
  arr.sort((a, b) => b - a);
  const hash2 = new Map();
  for (let i = 0; i < n; i++) {
    hash2.set(arr[i], i);
  }
  for (let i = 0; i < n - 1; i++) {
    let end = n;
    for (let j = i + 1; j < end; j++) {
      if (arr[i] % arr[j] === 0 && hash2.has(arr[i] / arr[j])) {
        end = hash2.get(arr[i] / arr[j]);
        hash.has(arr[i])
          ? hash.get(arr[i]).push([arr[j], arr[i] / arr[j]])
          : hash.set(arr[i], [[arr[j], arr[i] / arr[j]]]);
      }
    }
  }
  const dp = new Map();
  const dfs = (cur) => {
    if (dp.has(cur)) return dp.get(cur);
    if (hash.has(cur)) {
      let res = 1;
      const products = hash.get(cur);
      for (const [num1, num2] of products) {
        if (num1 !== num2) {
          res += 2 * dfs(num1) * dfs(num2);
        } else {
          res += dfs(num1) * dfs(num2);
        }
      }
      dp.set(cur, res);
      return res;
    }
    dp.set(cur, 1);
    return 1;
  };
  let res = 0;
  for (const num of arr) {
    res += dfs(num);
    res %= MOD;
  }
  console.log(dp);
  return res;
};

// 2 3 4 5 6 8 9 10 12 16
