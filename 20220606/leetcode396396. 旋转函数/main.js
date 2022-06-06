/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-06 13:38:06                                                  *
 * @LastModifiedDate: 2022-06-06 14:14:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个长度为 n 的整数数组 nums 。

// 假设 arrk 是数组 nums 顺时针旋转 k 个位置后的数组，我们定义 nums 的 旋转函数  F 为：

// F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1]
// 返回 F(0), F(1), ..., F(n-1)中的最大值 。

// 生成的测试用例让答案符合 32 位 整数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  // 使用暴力解法肯定会超时，因为n的数量级在10^5,暴力解法需要O(n^2)，所以需要找到每个之间的规律
  // 是否可以根据上一轮的求值求得本轮的求值，这样就不用每轮都遍历nums了
  // F(0) = 0 + a1 + 2a2 + 3a3 + 4a4 + ... (n-1)a(n-1)
  // F(1) = 0 + a0 + 2a1 + 3a2 + 4a3 + ... (n-1)a(n-2);
  // F(2) = 0 + an-1+2a0 + 3a1 + 4a2 + ... (n-1)a(n-3)
  // F(1) - F(0) = a0 + a1 + a2 + a3 + ... a(n-2) -  (n-1)a(n-1) = sum[0-n-1] - n * a(n-1)
  // F(2) - F(0) = a0 + a1 + a2 + a3 + ... a(n-3) - (n-1)a(n-2) + a(n-1) = sum[0-n-1] -n * a(n-2)
  // F(i) = 0 + a((n - i + 1) % n) + 2a((n - i + 2) % n) + .... (n-1)a((n - i + n - 1) % n);
  // F(i) - F(i-1) = sum[0-n-1] - n * a(n - i);
  // 先计算出sum[0-n-1]
  const n = nums.length;
  let sum = 0;
  // 同时计算出f0
  let pre = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    pre += i * nums[i];
  }
  let ans = pre;
  for (let i = 1; i < n; i++) {
    let cur = sum - n * nums[n - i] + pre;
    ans = Math.max(ans, cur);
    pre = cur;
  }
  return ans;
};
