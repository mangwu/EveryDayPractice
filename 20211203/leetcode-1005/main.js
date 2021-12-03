/**
 * @description leetcode 1005
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-03 19:03:38
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：

//  选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
//  重复这个过程恰好 k 次。可以多次选择同一个下标 i 。

//  以这种方式修改数组后，返回数组 可能的最大和 。
//  k的值可以大于数组长度
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  // 这道题本质就是先对数组的负数值尽可能一一翻转
  // 如果k值不够翻转完负数值，按照最小值顺序一一翻转即可
  // 如果k值翻转完了负数值，比较最后一个翻转的负数值和最小的正数值，小的作为剩余k的翻转对象
  // 如果剩余k值为奇数，则至少有一个负数，及上一步取的翻转对象
  // 如果剩余k值为偶数，则不要再翻转了，全为正数

  // 先排序，将最小值放在前面
  nums.sort((a, b) => a - b);

  // 保留结果
  let ans = 0;
  // 索引，最终结果有可能是处于最小正数的索引，需要保留
  let i = 0;
  // 再遍历，每次翻转后k减一。只翻转负数值，且注意索引要小于数组值
  while (nums[i] < 0 && k > 0 && i < nums.length) {
    nums[i] = 0 - nums[i];
    k--;
    i++;
  }
  // 如果k还是大于0 则需要进行奇偶判断以确定翻转
  if (k > 0) {
    // 如果翻转奇数次，必定一个为负数
    if (k % 2) {
      // i 超过数组大小或最小正书数大于最大负数的翻转值时，翻转最大负数（即又变为负数）
      if (i >= nums.length || nums[i] > nums[i - 1]) {
        nums[i - 1] = 0 - nums[i - 1];
      } else {
        nums[i] = 0 - nums[i];
      }
    }
  }
  // 遍历求和
  for (let j = 0; j < nums.length; j++) {
    ans += nums[j];
  }
  return ans;
};
console.log(largestSumAfterKNegations([4, 2, 3], 1));
console.log(largestSumAfterKNegations([4, 2, 3, -5, 8, -4], 3));
console.log(largestSumAfterKNegations([4, 2, 3, -5, -8, -4], 9));
