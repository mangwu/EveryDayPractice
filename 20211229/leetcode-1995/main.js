/**
 * @description  main.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-29 19:11:37
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  给你一个 下标从 0 开始 的整数数组 nums ，返回满足下述条件的 不同 四元组 (a, b, c, d) 的 数目 ：
// nums[a] + nums[b] + nums[c] == nums[d] ，且
// a < b < c < d

/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  let ans = 0;
  const n = nums.length;
  // 暴力解法
  for (let i = 3; i < n; i++) {
    for (let j = 2; j < i; j++) {
      for (let k = 1; k < j; k++) {
        for (let l = 0; l < k; l++) {
          if (nums[l] + nums[k] + nums[j] == nums[i]) {
            ans++;
          }
        }
      }
    }
  }
  return ans;
};
console.log(countQuadruplets([1, 1, 1, 3, 5]));

// 1. 由条件 a < b < c < d可知，四个指向数组中的指针先后位置固定
// 2. 由最后一个指针d从数组的第四位开始遍历，初始只有一种情况，每增加一位就增加C3n+1种情况，记录计算的值保存在一个数组中
// 0 1 2  |  (0 1 3) (0 2 3) (1, 2, 3) | (0 1 4) (0 2 4) (1 2 4) (0, 3, 4) (1, 3, 4) (2, 3, 4) | 10 | 15 | 21 | 28
// 声明保存结果的变量
/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets2 = function (nums) {
  // hash法 用于记录每个三元组的值
  const map = new Map();
  let ans = 0;
  const n = nums.length;

  for (let i = 3; i < n; i++) {
    let j = i - 1;
    // 记录本次结果
    for (let k = 1; k < j; k++) {
      for (let l = 0; l < k; l++) {
        let sum = nums[j] + nums[k] + nums[l];
        // 记录每次的合值
        let m1 = map.get(sum);
        // 不存在就添加,存在就添加
        if (m1 === undefined) {
          map.set(sum, 1);
        } else {
          map.set(sum, m1 + 1);
        }
      }
    }
    // 查看存在记录
    let m2 = map.get(nums[i]);
    if (m2) {
      ans += m2;
    }
  }
  return ans;
};
console.log(countQuadruplets2([1, 1, 1, 2, 3, 4, 5, 9, 6]));
/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets3 = function (nums) {
  // hash法 用于记录每个三元组的值
  const hash = [];
  let ans = 0;
  const n = nums.length;

  for (let i = 3; i < n; i++) {
    let j = i - 1;
    // 记录本次结果
    for (let k = 1; k < j; k++) {
      for (let l = 0; l < k; l++) {
        let sum = nums[j] + nums[k] + nums[l];
        // 记录每次的合值
        let m1 = hash[sum];
        // 不存在就添加1,存在就增加1
        if (m1 === undefined) {
          hash[sum] = 1;
        } else {
          hash[sum] = hash[sum] + 1;
        }
      }
    }
    // 查看存在记录
    let m2 = hash[nums[i]];
    if (m2) {
      ans += m2;
    }
  }
  return ans;
};

console.log(countQuadruplets3([1, 1, 1, 2, 3, 4, 5, 9, 6]));
