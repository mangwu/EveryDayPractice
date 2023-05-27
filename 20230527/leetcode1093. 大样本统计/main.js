/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-27 18:42:14                                                  *
 * @LastModifiedDate: 2023-05-27 19:46:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们对 0 到 255 之间的整数进行采样，并将结果存储在数组 count 中：count[k] 就是整数 k 在样本中出现的次数。

// 计算以下统计数据:

// minimum ：样本中的最小元素。
// maximum ：样品中的最大元素。
// mean ：样本的平均值，计算为所有元素的总和除以元素总数。
// median ：
// 如果样本的元素个数是奇数，那么一旦样本排序后，中位数 median 就是中间的元素。
// 如果样本中有偶数个元素，那么中位数median 就是样本排序后中间两个元素的平均值。
// mode ：样本中出现次数最多的数字。保众数是 唯一 的。
// 以浮点数数组的形式返回样本的统计信息 [minimum, maximum, mean, median, mode] 。与真实答案误差在 10-5 内的答案都可以通过。

/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
  const res = [255, 0, 0, 0, 0];
  let modeMax = 0;
  let nums = 0;
  let sumNum = 0;
  const medianArr = [];
  for (let i = 0; i < 256; i++) {
    if (count[i] !== 0) {
      res[0] = Math.min(res[0], i);
      res[1] = i;
      nums += count[i];
      sumNum += i * count[i];
      if (count[i] > modeMax) {
        res[4] = i;
        modeMax = count[i];
      }
      medianArr.push([i, nums]);
    }
  }
  res[2] = sumNum / nums;
  if (nums % 2 === 1) {
    // 奇数个，找到第 Math.floor(nums/2) + 1个
    const target = Math.floor(nums / 2) + 1;
    for (const [i, n] of medianArr) {
      if (n >= target) {
        res[3] = i;
        break;
      }
    }
  } else {
    // 偶数个，找到第 nums/2 和 nums/ 2 + 1 个
    const target = nums / 2;
    const m = medianArr.length;
    for (let i = 0; i < m; i++) {
      const [j, n] = medianArr[i];
      if (n === target) {
        res[3] = (j + medianArr[i + 1][0]) / 2;
        break;
      } else if (n > target) {
        res[3] = j;
        break;
      }
    }
  }
  return res;
};
