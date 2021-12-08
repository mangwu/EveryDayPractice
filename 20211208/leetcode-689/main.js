/**
 * @description 滑块
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-08 19:42:12
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  给你一个整数数组 nums 和一个整数 k ，找出三个长度为 k 、互不重叠、且 3 * k 项的和最大的子数组，并返回这三个子数组。

//  以下标的数组形式返回结果，数组中的每一项分别指示每个子数组的起始位置（下标从 0 开始）。如果有多个结果，返回字典序最小的一个。

// 实际上就是获取一个大数组的3个不重叠等大小子数组，当这三个不重叠等大小数组的和最大时，返回三个等大小数组的第一个值在大数组中的索引组成的数组

// 采用分而治之的方法，如果只有一个子数组，求大数组中的固定长度的最大子数组
// 可以利用滑动窗口的概念，窗口是一个数组的子数组的闭区间[i, j],如果长度固定为k，那么这个区间表示为[i - k + 1, i]
// [i-k+1, i] 中 i >= k - 1 ,每向右滑动一格，开始和结束索引就增加一格
// 设sum是 [i - k + 1, i] 的和，将窗口从左向右一格格滑动，就可以得到每个窗口的sum，也就可以得到最大的sum
// 计算sum必须每次都O(k)遍历求和，在遍历大数组时，从[0, k-1]开始，遍历到前k个格子，即可以得到第一个窗口的sum
// 将[0, k-1] 向右移动一格，此时得到nums[k],前面的sum减去nums[0]加上nums[k] 即可得到第二个窗口的sum，比较得到maxSum，并保存其窗口的第一个值的idx
// 以此类推，直到遍历完nums
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfOneSubarrays = function (nums, k) {
  // 声明用于保存每一个窗口和的变量
  let sum = 0;
  // 声明用于保存最大串口和的变量
  let maxSum = 0;
  // 声明保存最大格子第一个值的idx数组
  let ans = [0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // 当i大于等于k-1时，需要开始减去最后一个值了，用于获取下一个窗口的和
    if (i >= k - 1) {
      // 如果窗口的和值大于maxSum就保存下来，且保存索引
      if (sum > maxSum) {
        maxSum = sum;
        ans[0] = i - k + 1;
      }
      // 减去当前窗口的第一个值，为得到下一个值做准备
      sum -= nums[i - k + 1];
    }
  }
  // ans中保存的就是最大窗口的第一个值的索引
  // 因为从左到右变量，且只有 sum > maxSum才替换maxSum，所以该索引是最小的一个
  return ans;
};
// 当有两个滑动窗口的时候，同样需要遍历nums
// 在得到sum1的最大值的基础上，计算出sum1 + sum2的最大值
// 这里的难点在于，要理解两个不重叠的滑动窗口，不用组合方式获取到的最大和值通过遍历一次nums即可
// 因为在保存了sum1最大值的基础上，第二个窗口虽然也和第一个窗口挨着顺序遍历，但是可以通过sum2 + sum1之后比较判断
// 本质maxSum1可能不是当前的第一个窗口的和值，所以无需担心，如果有后续的sum1值更大也不用担心，因为后续的sum值肯定是sum2先得到
// 此算法的重点在于，只在sum1+sum2 > maxSum时才记录此时的idx，且第一个窗口的idx不是当前的，而是在得到maxSum1时记录的idx
// 这就保证了记录的两个idx的对应窗口和值必定正确
// 第一个窗口从[0, k-1]开始,第二个窗口从[k, 2k - 1]开始
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfTwoSubarrays = function (nums, k) {
  // 声明第一个窗口的和值，最大和值时的idx,以及用于保存第一个窗口的最大和值变量maxSum1
  let sum1 = 0;
  let maxSum1 = 0;
  let idx = 0;
  // 声明第二个窗口的和值，以及两个保存两个窗口最大和值的变量maxSum (不用声明maxSum2因为其值可以间接获得)
  let sum2 = 0;
  let maxSum = 0;
  // 声明保存两个窗口第一个值的索引数组
  let ans = [0, 0];
  // 从k值开始遍历,也就是第二个窗口的起始值，i - k也就是第一个窗口的起始值
  for (let i = k; i < nums.length; i++) {
    // 第一个窗口和值
    sum1 += nums[i - k];
    // 第二个窗口和值
    sum2 += nums[i];
    // 当i >= 2k - 1 时表示两个窗口都要减去第一个值便与计算移动一格后的和值了
    if (i >= 2 * k - 1) {
      // 如果sum1大于记录的maxSum1就保存下来，且保存maxSum1对应的idx
      if (sum1 > maxSum1) {
        maxSum1 = sum1;
        // 此时的i为第二个窗口的最后一个值，得到第一个窗口的第一个值索引需要 减去2k再加1
        idx = i - 2 * k + 1;
      }
      // 如果sum1 和sum2大于maxSum，记录maxSum1的idx和此时的第二个sum2的第一个值索引
      if (maxSum1 + sum2 > maxSum) {
        maxSum = maxSum1 + sum2;
        ans[0] = idx;
        ans[1] = i - k + 1;
      }
      // 减去第一个值
      sum1 -= nums[i - 2 * k + 1];
      sum2 -= nums[i - k + 1];
    }
  }
  return ans;
};
// 同理可得在三个滑动窗口的情况下，先得到maxSum12，在判断maxSum12 + sum3 是否大于maxSum
// 关键点在于记录在得到最大值后记录对应的idx
// 从[0, k-1], [k, 2k-1], [2k, 3k-1] 开始
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  // 声明第一个窗口的和值，最大和值和索引
  let sum1 = 0;
  let maxSum1 = 0;
  let maxSum1Idx = 0;
  // 声明第二个窗口的和值，和第一个窗口相加后的最大和值，和对应的两个索引
  let sum2 = 0;
  let maxSum12 = 0;
  let maxSum12Idx1 = 0;
  let maxSum12Idx2 = 0;
  // 声明第三个窗口的和值，三个窗口的最大值，和保存对应索引的数组
  let sum3 = 0;
  let maxSum = 0;
  let ans = [0, 0, 0];
  // 从2k 开始遍历
  for (let i = 2 * k; i < nums.length; i++) {
    sum1 += nums[i - 2 * k];
    sum2 += nums[i - k];
    sum3 += nums[i];
    // 当i遍历到第三个窗口的第一个完整窗口的最后一个值时准备减去窗口的第一个值
    if (i >= 3 * k - 1) {
      if (sum1 > maxSum1) {
        maxSum1 = sum1;
        // 得到第一个窗口的第一个值需要减去3k-1
        maxSum1Idx = i - 3 * k + 1;
      }
      if (maxSum1 + sum2 > maxSum12) {
        maxSum12 = maxSum1 + sum2;
        // 记录maxSum12时对应的idx
        maxSum12Idx1 = maxSum1Idx;
        maxSum12Idx2 = i - 2 * k + 1;
      }
      if (maxSum12 + sum3 > maxSum) {
        maxSum = maxSum12 + sum3;
        // 记录对应的idx
        ans[0] = maxSum12Idx1;
        ans[1] = maxSum12Idx2;
        ans[2] = i - k + 1;
      }
      sum1 -= nums[i - 3 * k + 1];
      sum2 -= nums[i - 2 * k + 1];
      sum3 -= nums[i - k + 1];
    }
  }
  return ans;
};

console.log(maxSumOfOneSubarrays([2, 3, 5, 7, 4, 5, 8], 3));
console.log(maxSumOfTwoSubarrays([2, 3, 5, 7, 4, 5, 10], 2));
console.log(maxSumOfThreeSubarrays([2, 3, 5, 7, 4, 5, 10, 2, 8, 9, 12, 4], 2));
