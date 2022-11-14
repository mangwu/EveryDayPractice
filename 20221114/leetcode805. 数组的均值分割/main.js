/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-14 08:59:33                                                  *
 * @LastModifiedDate: 2022-11-14 10:13:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定你一个整数数组 nums

// 我们要将 nums 数组中的每个元素移动到 A 数组 或者 B 数组中，
// 使得 A 数组和 B 数组不为空，并且 average(A) == average(B) 。

// 如果可以完成则返回true ， 否则返回 false  。

// 注意：对于数组 arr ,  average(arr) 是 arr 的所有元素除以 arr 长度的和。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function (nums) {
  // 两个数组的平均值相等，那么肯定等于nums原本的平均值
  const n = nums.length;
  if (n === 1) {
    return false;
  }
  let sum = 0;
  let average = 0;
  for (const num of nums) {
    sum += num;
  }
  nums.sort((a, b) => a - b);
  if (nums[0] === nums[n - 1]) {
    return true;
  }
  average = sum / n;
  console.log(average, nums);
  // 选择其中的x个元素，最多选择n-1个，最少选择1个
  // cur是当前能选择的元素，num是总共选择的元素,pre是选择元素之和
  // 可以选择，也可以不选
  // 记录在选择x个时，和为sum时是否满足条件
  const dp = new Array(n).fill(0).map(() => new Map());
  const dfs = (cur, num, pre) => {
    if (pre / num === average && num !== n) {
      return true;
    }
    if (cur === n) {
      // 结束选择
      return false;
    }
    // 选择数量大于0小于n时才能进行
    if (num > 0 && num < n) {
      const hash = dp[num];
      if (hash.has(pre)) {
        return hash.get(pre);
      }
    }
    // 选择当前的
    let res = dfs(cur + 1, num + 1, pre + nums[cur]);
    if (num < n - 1) {
      dp[num + 1].set(pre + nums[cur], res);
    }
    if (res) {
      return res;
    }
    res = dfs(cur + 1, num, pre); // 不选当前的
    if (num < n) {
      dp[num].set(pre, res);
    }
    return res;
  };
  return dfs(0, 0, 0);
};

// [0,13,13,7,5,0,10,19,5]
//
// [
//   5447, 1726, 4771, 1538, 1869, 9912, 5667, 6299, 7035, 9894, 8703, 3811, 1322,
//   333, 7673, 4664, 5141, 7711, 8253, 6868, 5547, 7644, 2662, 2757, 37, 2859,
//   8723, 9741, 7529, 778,
// ];
splitArraySameAverage([
  5447, 1726, 4771, 1538, 1869, 9912, 5667, 6299, 7035, 9894, 8703, 3811, 1322,
  333, 7673, 4664, 5141, 7711, 8253, 6868, 5547, 7644, 2662, 2757, 37, 2859,
  8723, 9741, 7529, 778,
]);

// [4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 5]

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var splitArraySameAverage = function (nums) {
//   // 两个数组的平均值相等，那么肯定等于nums原本的平均值
//   const n = nums.length;
//   if (n === 1) {
//     return false;
//   }
//   let sum = 0;
//   let average = 0;
//   for (const num of nums) {
//     sum += num;
//   }
//   nums.sort((a, b) => a - b);
//   if (nums[0] === nums[n - 1]) {
//     return true;
//   }
//   average = sum / n;
//   // 选择其中的x个元素，最多选择n-1个，最少选择1个
//   // cur是当前能选择的元素，num是总共选择的元素,pre是选择元素之和
//   // 可以选择，也可以不选
//   // 记录在选择x个时，和为sum时是否满足条件
//   const dp = new Array(n).fill(0).map(() => new Map());
//   const dfs = (cur, num, pre) => {
//     console.log(num);
//     if (pre / num === average && num !== n) {
//       return true;
//     }
//     if (cur === n) {
//       // 结束选择
//       return false;
//     }
//     // 选择数量大于0小于n时才能进行
//     if (num > 0 && num < n) {
//       const hash = dp[num];
//       if (hash.has(pre)) {
//         return hash.get(pre);
//       }
//     }
//     let res = dfs(cur + 1, num, pre); // 默认不选当前的
//     dp[num].set(pre, res);
//     if (res) {
//       return res;
//     }
//     // 选择当前的
//     res = dfs(cur + 1, num + 1, pre + nums[cur]);
//     if (num < n) {
//       dp[num + 1].set(pre + nums[cur], res);
//     }
//     return res;
//   };
//   let ans = dfs(0, 0, 0);
//   console.log(dp, ans);
//   return ans;
// };
