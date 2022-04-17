/*
 * @Author: mangwu                                                             *
 * @File: main2.js                                                             *
 * @Date: 2022-04-16 15:11:22                                                  *
 * @LastModifiedDate: 2022-04-16 15:36:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 欢迎各位勇者来到力扣城，城内设有烹饪锅供勇者制作料理，为自己恢复状态。

// 勇者背包内共有编号为 0 ~ 4 的五种食材，其中 meterials[j] 表示第 j 种食材的数量。通过这些食材可以制作若干料理，cookbooks[i][j] 表示制作第 i 种料理需要第 j 种食材的数量，而 attribute[i] = [x,y] 表示第 i 道料理的美味度 x 和饱腹感 y。

// 在饱腹感不小于 limit 的情况下，请返回勇者可获得的最大美味度。如果无法满足饱腹感要求，则返回 -1。

// 注意：

// 每种料理只能制作一次。
// 示例 1：

// 输入：meterials = [3,2,4,1,2]
// cookbooks = [[1,1,0,1,2],[2,1,4,0,0],[3,2,4,1,0]]
// attribute = [[3,2],[2,4],[7,6]]
// limit = 5

// 输出：7

// 解释：
// 食材数量可以满足以下两种方案：
// 方案一：制作料理 0 和料理 1，可获得饱腹感 2+4、美味度 3+2
// 方案二：仅制作料理 2， 可饱腹感为 6、美味度为 7
// 因此在满足饱腹感的要求下，可获得最高美味度 7

// 示例 2：

// 输入：meterials = [10,10,10,10,10]
// cookbooks = [[1,1,1,1,1],[3,3,3,3,3],[10,10,10,10,10]]
// attribute = [[5,5],[6,6],[10,10]]
// limit = 1

// 输出：11

// 解释：通过制作料理 0 和 1，可满足饱腹感，并获得最高美味度 11
/**
 * @param {number[]} materials
 * @param {number[][]} cookbooks
 * @param {number[][]} attribute
 * @param {number} limit
 * @return {number}
 */
var perfectMenu = function (materials, cookbooks, attribute, limit) {
  // cookbooks是高度为x，长度为5的数组
  // 计算出满足材料要求的每一种料理方案
  const cb = cookbooks.length;
  const dp = new Array(cb).fill(0).map((v) => new Array);
  // dp表示一定有对应料理时的
  for (let i = 0; i < cb; i++) {
    let num = helper(materials, cookbooks[i]);
    // 选择能够做出的个数
    for(let j = 1; j <= num; j++) {

    }
  }
};

// 判断当前方案最多有多少个料理个数能选
const helper = (materials, book) => {
  let ans = Infinity;
  for (let i = 0; i < 5; i++) {
    if (book[i] > 0) {
      ans = Math.min(ans, Math.floor(materials[i] / book[i]));
    }
  }
  return ans;
};
