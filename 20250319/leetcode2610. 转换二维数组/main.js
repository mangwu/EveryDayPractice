// 给你一个整数数组 nums 。请你创建一个满足以下条件的二维数组：

// 二维数组应该 只 包含数组 nums 中的元素。
// 二维数组中的每一行都包含 不同 的整数。
// 二维数组的行数应尽可能 少 。
// 返回结果数组。如果存在多种答案，则返回其中任何一种。

// 请注意，二维数组的每一行上可以存在不同数量的元素。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const n = nums.length;
  const hash = new Map();
  let max = 1;
  for (const num of nums) {
    hash.set(num, (hash.get(num) || 0) + 1);
    max = Math.max(max, hash.get(num));
  }
  const ans = new Array(max).fill(0).map((v) => new Array(0).fill(0));
  for (let [key, value] of hash) {
    for (let i = 0; i < value; i++) ans[i].push(key);
  }
  return ans;
};

