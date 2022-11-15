/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-15 09:56:28                                                  *
 * @LastModifiedDate: 2022-11-15 10:02:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你将一些箱子装在 一辆卡车 上。给你一个二维数组 boxTypes ，其中 boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi] ：

// numberOfBoxesi 是类型 i 的箱子的数量。
// numberOfUnitsPerBoxi 是类型 i 每个箱子可以装载的单元数量。
// 整数 truckSize 表示卡车上可以装载 箱子 的 最大数量 。只要箱子数量不超过 truckSize ，你就可以选择任意箱子装到卡车上。

// 返回卡车可以装载 单元 的 最大 总数。

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let ans = 0;
  for (const boxType of boxTypes) {
    if (boxType[0] < truckSize) {
      ans += boxType[1] * boxType[0];
    } else {
      ans += truckSize * boxType[1];
      break;
    }
    truckSize -= boxType[0];
  }
  return ans;
};
