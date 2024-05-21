// 给你两个下标从 0 开始的整数数组 nums 和 divisors 。

// divisors[i] 的 可整除性得分 等于满足 nums[j] 能被 divisors[i] 整除的下标 j 的数量。

// 返回 可整除性得分 最大的整数 divisors[i] 。如果有多个整数具有最大得分，则返回数值最小的一个。

/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let score = 0; // 可整除得分
  let ans = Infinity;
  for (const divisor of divisors) {
    let curScore = 0;
    for (const num of nums) {
      if (num % divisor === 0) {
        curScore++;
      }
    }
    if (curScore > score) {
      ans = divisor;
      score = curScore;
    } else if (curScore === score) {
      ans = Math.min(ans, divisor);
    }
  }
  return ans;
};
