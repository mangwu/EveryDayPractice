// 给你一个整数数组 nums 和一个整数 k 。

// 返回 nums 中一个
// 非空子数组
// 的 最大 和，要求该子数组的长度可以 被 k 整除。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function (nums, k) {
  const n = nums.length;
  // 前缀和+最大最小值判断(动态规划)
  const preffix = [0];
  for (const num of nums) {
    preffix.push(preffix[preffix.length - 1] + num);
  }
  let start = 0;
  let res = -Infinity;
  while (start < k) {
    // start , start + k , start + 2 * k , start + 3 * k
    const curPreffix = [];
    for (let i = start; i <= n; i += k) {
      curPreffix.push(preffix[i]);
    }
    console.log(curPreffix, getMaxDiff(curPreffix));
    res = Math.max(res, getMaxDiff(curPreffix));
    start++;
  }
  return res;
};
/**
 * @description 获取数组中的最大差值
 * @param {number[]} nums
 * @returns {number}
 */
function getMaxDiff(nums) {
  const n = nums.length;
  const rightMax = new Array(n).fill(-Infinity);
  rightMax[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
  }
  let res = -Infinity;
  let curMin = Infinity;
  for (let i = 0; i < n - 1; i++) {
    curMin = Math.min(curMin, nums[i]);
    res = Math.max(res, rightMax[i + 1] - curMin);
  }
  return res;
}

// [1,2,8,1,-7,-5,8,-4,-9,2,5,-7,5,4,8,-4,-6,-2,3,1,5,-7]  n = 22
//  1 3 11 12 5 0 8 4 -5 -3 2 -5 0 4 12 8 2 0 3 4 9 2
// 4
//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function (nums, k) {
  // 可以维护一个模相同的左边的最小值数组
  // preffix[j] - preffix[i]最大，当时 j > i 且 i j 同模k
  const minKMod = new Array(k).fill(Infinity);
  // 对于前缀和的初始元素0，它在前缀和数组中的索引为0，
  // 但是在遍历nums时，我们从数据数组的角度遍历，i ,j 的值比前缀的值小1
  // 所以初始元素的索引模为k-1
  minKMod[k - 1] = 0;
  let sum = 0; // nums[j]的前缀和
  let res = -Infinity;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    const i = j % k; // 模
    // 获取前面同模的nums[i]的前缀和的最小值
    res = Math.max(res, sum - minKMod[i]);
    minKMod[i] = Math.min(minKMod[i], sum);
  }
  return res;
};
