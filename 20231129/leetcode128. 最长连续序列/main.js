// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let ans = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      // 从连续序列的最小值开始查找，
      // 对于连续序列中的非最小值最多只会包含两次次访问，即时间复杂度为O(2n)
      let curNum = num;
      let curLen = 1;
      while (set.has(curNum + 1)) {
        curLen++;
        curNum++;
      }
      ans = Math.max(ans, curLen);
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const hash = new Map();
  // 动态规划
  let ans = 0;
  for (const num of nums) {
    if (!hash.has(num)) {
      let left = hash.get(num - 1) || 0;
      let right = hash.get(num + 1) || 0;
      const curLen = left + right + 1;
      ans = Math.max(ans, curLen);
      hash.set(num, -1);
      hash.set(num - left, curLen);
      hash.set(num + right, curLen);
    }
  }
  return ans;
};
