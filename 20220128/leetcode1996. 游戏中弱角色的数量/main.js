/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-28 09:21:56                                                  *
 * @LastModifiedDate: 2022-01-28 10:46:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你正在参加一个多角色游戏，每个角色都有两个主要属性：攻击 和 防御 。给你一个二维整数数组 properties ，其中 properties[i] = [attacki, defensei] 表示游戏中第 i 个角色的属性。

// 如果存在一个其他角色的攻击和防御等级 都严格高于 该角色的攻击和防御等级，则认为该角色为 弱角色 。更正式地，如果认为角色 i 弱于 存在的另一个角色 j ，那么 attackj > attacki 且 defensej > defensei 。

// 返回 弱角色 的数量。

/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  // 对于一个角色来说，存在另一个角色的属性都比该角色高，则该角色为弱角色
  // 如果只有一个属性，那么除了最大属性的角色，其它角色都是弱角色
  // 有两个属性，如果按照其中一个属性严格排列，
  // 排除其中属性最高的角色，遍历剩余角色的另一个属性
  // 对比另一个属性值，保存该属性值
  properties.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
  // console.log(properties);
  // 消除与最大值第一个属性相同的值,它们必不是弱角色
  // const newProperties
  // 记录第二个属性的最大值
  // 前一个阶层的最大第二属性
  let preMax = 0;
  // 目前为止最大的第二属性
  let max = properties[0][1];
  // 长度
  const len = properties.length;
  // 弱角色
  let ans = 0;
  // 遍历properties
  for (let i = 1; i < len; i++) {
    // 跨越了阶层，可以切换前一个阶层的最大值了
    if (properties[i][0] < properties[i - 1][0]) {
      preMax = max;
      if (properties[i][1] > max) {
        max = properties[i][1];
      }
    }
    // 比前一阶层的最大值小即是弱角色
    if (properties[i][1] < preMax) {
      // console.log(properties[i]);
      ans++;
    } 
    // else if (properties[i][1] > max) {
    //   // 目前为止最大的属性值更新
    //   max = properties[i][1];
    // }
  }
  // console.log(ans);
  return ans;
};

// numberOfWeakCharacters([
//   [1, 5],
//   [10, 4],
//   [4, 3],
//   [6, 7],
//   [7, 10],
//   [7, 2],
//   [7, 9],
//   [10, 8],
//   [7, 8],
// ]);

/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters2 = function (properties) {
  // 对于一个角色来说，存在另一个角色的属性都比该角色高，则该角色为弱角色
  // 如果只有一个属性，那么除了最大属性的角色，其它角色都是弱角色
  // 有两个属性，如果按照其中一个属性严格排列，
  // 排除其中属性最高的角色，遍历剩余角色的另一个属性
  // 对比另一个属性值，保存该属性值
  // 攻击值递减排序，防御值递增排序，就不需要考虑阶层问题
  properties.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  // console.log(properties);
  // 消除与最大值第一个属性相同的值,它们必不是弱角色
  // 只记录最大防御
  let maxDef = 0;
  // 长度
  const len = properties.length;
  // 弱角色
  let ans = 0;
  // 遍历properties
  for (let i = 0; i < len; i++) {
    // 比较最大防御即可，因为防御在各个相同攻击阶层递增排序，不会出现[10,8][10,9]判断成功的情况
    if (properties[i][1] < maxDef) {
      ans++;
    } else {
      maxDef = properties[i][1]
    }
    
  }
  // console.log(ans);
  return ans;
};

numberOfWeakCharacters2([
  [1, 5],
  [10, 4],
  [4, 3],
  [6, 7],
  [7, 10],
  [7, 2],
  [7, 9],
  [10, 8],
  [7, 8],
]);
