/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-12 15:56:43                                                  *
 * @LastModifiedDate: 2022-01-12 19:05:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

// 如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // 使用事件复杂度为O(n^3)的暴力解法完全可以 实现
  // 三个指针指向Nums的第0，1，2位，开始依次遍历，
  // 找到一个符合的就返回true
  // 遍历完都没有找到就返回false
  const len = nums.length;
  if (len < 3) return false;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] < nums[j] && nums[j] < nums[k]) {
          return true;
        }
      }
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet2 = function (nums) {
  // 非暴力解法 贪心算法
  // nums长度
  const len = nums.length;
  if (len < 3) return false;
  // 找到最小的前两个数
  let hasMinTwoNum = false;
  // 记录最小数
  let min;
  // 第一个数
  let first = nums[0];
  // 第二个数
  let second = nums[1];
  // // 第三个数
  // let third = nums[2];
  if (first < second) {
    // 有递增的两个数
    hasMinTwoNum = true;
    min = first;
  } else {
    // 没有递增的两个数
    first = second;
    min = first;
  }
  // 遍历nums
  for (let i = 2; i < len; i++) {
    // 对于接下来到来的新元素，如果它大于原始数组中的已有索引递增的子数组则返回true
    // 如果有递增的两个数
    if (hasMinTwoNum) {
      // 大于second，nums有递增的数
      if (nums[i] > second) {
        return true;
      }
      // 如果大于first 就替换second
      if (nums[i] > first) {
        second = nums[i];
      }
      // 如果小于等于first
      // 注意有等于号的原因在于，如果此时min < first，那么就可以进行替换了
      // 如果min == first 也没有任何影响
      if (nums[i] <= first) {
        // 和min比较 如果大于min就更新first和second
        if (nums[i] > min) {
          // 这样不会影响前面的，因为前面遍历没有结果
          first = min;
          second = nums[i];
        }
        // 如果小于min,就替换min,保存最小值
        if (nums[i] < min) {
          min = nums[i];
        }
      }
    } else {
      // 没有递增的两个数
      if (nums[i] > first) {
        hasMinTwoNum = true;
        // 设置第二个数
        second = nums[i];
        continue;
      }
      if (nums[i] < first) {
        // 更新最小数
        first = nums[i];
        min = first;
      }
    }
    console.log(min, first, second);
  }
  return false;
};
console.log(increasingTriplet2([1, 5, 1, 4, 1, 3]));

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet2 = function (nums) {
  // 上面保留前两个递增，遍历第三个的贪心算法完全可以简化
  // 当nums[i]小于等于第一个时替换，否则，如果小于等于第二个替换第二个，否则返回true
  // 不用担心会替换第一个时，其索引会比第二个大，因为if条件先判断了第一个，第二个索引前必定有比第二个小的数
  // 重点在于判断第二个数
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;
  for (let n of nums) {
    if (n <= first) {
      first = n;
    } else if (n <= second) {
      second = n;
    } else {
      // 能比second大，说明有递增序列
      return true;
    }
  }
  return false;
};
