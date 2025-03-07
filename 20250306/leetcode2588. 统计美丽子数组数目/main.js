// 给你一个下标从 0 开始的整数数组nums 。每次操作中，你可以：

// 选择两个满足 0 <= i, j < nums.length 的不同下标 i 和 j 。
// 选择一个非负整数 k ，满足 nums[i] 和 nums[j] 在二进制下的第 k 位（下标编号从 0 开始）是 1 。
// 将 nums[i] 和 nums[j] 都减去 2k 。
// 如果一个子数组内执行上述操作若干次后，该子数组可以变成一个全为 0 的数组，那么我们称它是一个 美丽 的子数组。

// 请你返回数组 nums 中 美丽子数组 的数目。

// 子数组是一个数组中一段连续 非空 的元素序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {
  // 记录子数组中每位元素的对应位个数，当位个数都是偶数时就是美丽子数组
  // 偶数个位的元素异或值和为0，所以美丽子数组的元素异或和应该是0
  // 使用前缀和的思想，前i个元素的异或和为curi，记录curi的个数
  // 现在有j > i，那么前j个元素的异或和为curj，如果curj === curi，
  // 那么[i+1, j]索引构成的子数组是完美子数组，因为其异或和为0（前curi异或0才能让其等于curj）
  const cnts = new Map();
  let cur = 0;
  cnts.set(0, 1);
  let res = 0;
  for (const num of nums) {
    cur ^= num;
    res += cnts.get(cur) || 0;
    cnts.set(cur, (cnts.get(cur) || 0) + 1);
  }
  return res;
};
