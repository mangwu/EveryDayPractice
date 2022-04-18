/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-18 09:10:59                                                  *
 * @LastModifiedDate: 2022-04-18 14:03:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。

// 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const ans = new Array(n).fill(0).map((v, i) => i + 1);
  ans.sort();
  return ans;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const ans = [];
  // 字典顺序dfs
  const dfs = (cur) => {
    if (cur > n) {
      return;
    }
    ans.push(cur);
    for (let i = 0; i <= 9; i++) {
      dfs(cur * 10 + i);
    }
  };
  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }
  return ans;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const ans = [];
  // 1是最小字典顺序数字
  let cur = 1;
  // 根据当前的最小字典顺序数字和n来获取下一个的最小字典
  for (let i = 0; i < n; i++) {
    // 添加本轮数字
    ans.push(cur);
    // 分两种情况，如果增大10倍，仍然比n小就增大
    // 在当前最小字典数字后面添加0是得到下一个最小字典顺序的方法
    // 这相当于dfs遍历过程中向下持续遍历最左边的节点
    if (cur * 10 <= n) {
      cur = cur * 10;
    } else {
      // 如果遍历到了最左边的左节点，就需要遍历同层下的其他节点（自增）
      // 需要判断同层下是否还有其它节点，否则就回溯到父节点
      // 判断条件应该有两个 当前值是否大于等于n，和当前值是否自增到了最后一个节点(9)
      while (cur + 1 > n || cur % 10 == 9) {
        // 当前值等于n或者自增到最后一个节点就需要回溯到父节点(之后父节点自增1，继续dfs)
        cur = Math.floor(cur / 10);
      }
      cur++;
    }
  }
  return ans;
};
