/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-07 09:25:00                                                  *
 * @LastModifiedDate: 2022-11-07 10:12:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出一个含有不重复整数元素的数组 arr ，每个整数 arr[i] 均大于 1。

// 用这些整数来构建二叉树，每个整数可以使用任意次数。其中：每个非叶结点的值应等于它的两个子结点的值的乘积。

// 满足条件的二叉树一共有多少个？答案可能很大，返回 对 109 + 7 取余 的结果。
const MOD = Math.pow(10, 9) + 7;
/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  // 计算，每个元素的 因数
  const set = new Set(arr);
  const hash = new Map(arr.map((v) => [v, []]));
  for (const num of arr) {
    const factors = getFactors(num);
    for (const factor of factors) {
      if (set.has(factor[0]) && set.has(factor[1])) {
        hash.get(num).push(factor);
      }
    }
  }
  // 记忆化搜索
  arr.sort((a, b) => b - a);
  const hash2 = new Map();
  const dfs = (num) => {
    if (hash2.has(num)) {
      return hash2.get(num);
    }
    const factors = hash.get(num);
    let res = 1;
    if (factors.length === 0) {
      hash2.set(num, res);
      return res;
    }
    for (const factor of factors) {
      if (factor[0] !== factor[1]) {
        // 左边可以构造的二叉树个数，右边可以构造的二叉树个数
        res += dfs(factor[0]) * dfs(factor[1]) * 2; // 可以调换位置
      } else {
        res += dfs(factor[0]) ** 2; // 两个值相同，不用使用两次dfs
      }
    }
    // 记录本次计算结果
    hash2.set(num, res);
    return res;
  };
  let ans = 0;
  for (const num of arr) {
    ans += dfs(num);
    ans %= MOD;
  }
  return ans;
};

var getFactors = (num) => {
  const sqrtNum = Math.sqrt(num);
  let ans = [];
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) {
      ans.push([i, num / i]);
    }
  }
  return ans;
};

// 8  2 4 4 2  => 5  = 1 + 2 + 2 * 1
// 4  2 2  => 2
// 2   => 1
