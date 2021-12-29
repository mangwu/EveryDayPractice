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
    for (let k = 1; k < j; k++) {
      for (let l = 0; l < k; l++) {
        let sum = nums[j] + nums[k] + nums[l];
        // 如果有重复值就 m是合值的个数
        let m = map.get(sum.toString());
        console.log(sum, m, nums[i]);
        // 如果不存在就加设置出来
        if (!m) {
          map.set(sum.toString(), 0);
          // 如果存在合值
        } else if (m === sum)
          ans++;
          map.set(sum.toString(), m ? m + 1 : 1);
        }

        if (sum === nums[i]) {
          ans++;
          map.set(sum.toString(), m ? m + 1 : 1);
        }
      }
    }
  }
  return ans;
};
console.log(countQuadruplets2([1, 1, 1, 2, 3, 4, 5, 6, 6]));
