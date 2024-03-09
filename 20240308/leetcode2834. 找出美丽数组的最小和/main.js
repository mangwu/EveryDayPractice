// 给你两个正整数：n 和 target 。

// 如果数组 nums 满足下述条件，则称其为 美丽数组 。

// nums.length == n.
// nums 由两两互不相同的正整数组成。
// 在范围 [0, n-1] 内，不存在 两个 不同 下标 i 和 j ，使得 nums[i] + nums[j] == target 。
// 返回符合条件的美丽数组所可能具备的 最小 和，并对结果进行取模 109 + 7。

const MOD = 10 ** 9 + 7;

/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function (n, target) {
  // 偶数
  let half = Math.floor(target / 2);
  // 可以选取[1, half]
  if (n <= half) {
    return (((1 + n) * n) / 2) % MOD;
  } else {
    let res = ((1 + half) * half) / 2;
    n -= half;
    res += ((target + target + n - 1) * n) / 2;
    return res % MOD;
  }
};

// 1 2 3 4 5 10 11 12 13 14

// 5
// 1 2
// 3 4
