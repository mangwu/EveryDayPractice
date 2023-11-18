// 给你一个下标从 0 开始的数组 nums ，数组中的元素都是 正 整数。请你选出两个下标 i 和 j（i != j），且 nums[i] 的数位和 与  nums[j] 的数位和相等。

// 请你找出所有满足条件的下标 i 和 j ，找出并返回 nums[i] + nums[j] 可以得到的 最大值 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const hash = new Map();
  for (const num of nums) {
    const cur = getNumSum(num);
    hash.has(cur) ? hash.get(cur).push(num) : hash.set(cur, [num]);
  }
  let ans = -1;
  for (const [_key, value] of hash) {
    if (value.length >= 2) {
      value.sort((a, b) => b - a);
      ans = Math.max(ans, value[0] + value[1]);
    }
  }
  return ans;
};

function getNumSum(num) {
  let res = 0;
  const str = num.toString();
  for (const ch of str) {
    res += parseInt(ch);
  }
  return res;
}
