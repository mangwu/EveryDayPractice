/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-21 20:43:52                                                  *
 * @LastModifiedDate: 2023-05-21 22:42:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定 N 个无限容量且初始均空的水缸，每个水缸配有一个水桶用来打水，第 i 个水缸配备的水桶容量记作 bucket[i]。小扣有以下两种操作：

// 升级水桶：选择任意一个水桶，使其容量增加为 bucket[i]+1
// 蓄水：将全部水桶接满水，倒入各自对应的水缸
// 每个水缸对应最低蓄水量记作 vat[i]，返回小扣至少需要多少次操作可以完成所有水缸蓄水要求。

// 注意：实际蓄水量 达到或超过 最低蓄水量，即完成蓄水要求。

/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
var storeWater = function (bucket, vat) {
  let res = 0;
  const arr = bucket
    .filter((v, i) => vat[i] > 0)
    .map((v, i) => {
      if (v === 0) {
        v++;
        res++;
      }
      return [v, vat[i]];
    })
    .sort((a, b) => b[1] / b[0] - a[1] / a[0]); // 大的在前面
  let op = res; // 升级操作数
  let pre = Math.ceil(arr[0][1] / arr[0][0]);
  res += pre; // 不再进行任何升级操作时
  const n = arr.length;
  let idx = 1;
  while (idx < n) {
    const cur = Math.ceil(arr[idx][1] / arr[idx][0]);
    if (cur === pre) {
      idx++;
    } else {
      break;
    }
  }
  for (let i = idx; i < n; i++) {
    const cur = Math.ceil(arr[i][1] / arr[i][0]);
  }
};
