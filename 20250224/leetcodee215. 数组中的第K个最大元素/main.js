// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 桶排序
  const min = Math.min.apply(null, nums);
  nums = nums.map((v) => v - min);
  const max = Math.max.apply(null, nums);
  const arr = new Array(max + 1).fill(0);
  for (const num of nums) {
    arr[num]++;
  }
  for (let i = max; i >= 0; i--) {
    k -= arr[i];
    if (k <= 0) return i + min;
  }
  return min;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 快速排序
  const qS = (nums, k) => {
    const n = nums.length;
    const p = nums[Math.floor(Math.random() * n)];
    const small = [];
    const big = [];
    const equal = [];
    for (const num of nums) {
      if (num > p) big.push(num);
      else if (num < p) small.push(num);
      else equal.push(num);
    }
    // 第k大的元素在big中
    if (k <= big.length) {
      return qS(big, k);
    }
    // 第k大的元素在small中
    if (big.length + equal.length < k) {
      return qS(small, k - big.length - equal.length);
    }
    // 第k大的就是p
    return p;
  };
  return qS(nums, k);
};

function quickSort(nums) {
  const n = nums.length;
  if (n <= 1) return nums;
  const p = nums[Math.floor(Math.random() * n)];
  const small = [];
  const big = [];
  const equal = [];
  for (const num of nums) {
    if (num > p) big.push(num);
    else if (num < p) small.push(num);
    else equal.push(num);
  }
  return [...quickSort(small), ...equal, ...quickSort(big)];
}
// console.log(
//   quickSort([
//     1, -5, -8, 5, 6, 7, -4, -7, -5, 2, 3, 6, 9, 11, -15, 23, 24, -47, 52, 15,
//     68, -45,
//   ])
// );

function quickSort2(nums, start, end) {
  if (start >= end) return;
  const n = end - start + 1;
  const idx = Math.floor(Math.random() * n) + start;
  const p = nums[idx];
  // 将比较节点换到start
  [nums[idx], nums[start]] = [nums[start], nums[idx]];
  let left = start;
  let right = end;
  while (right > left) {
    // 左移right，找到第一个比p小的元素
    while (right > left && nums[right] >= p) right--;
    // 右移left，找到第一个比p大的元素
    while (left < right && nums[left] <= p) left++;
    // 交换
    if (left < right) [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  // 将nums[start]换到中点
  nums[start] = nums[left];
  nums[left] = p;
  quickSort2(nums, start, left - 1);
  quickSort2(nums, left + 1, end);
  return nums;
}
const arr = [
  1, -5, -8, 5, 6, 7, -4, -7, -5, 2, 3, 6, 9, 11, -15, 23, 24, -47, 52, 15, 68,
  -45,
];
quickSort2(arr, 0, arr.length - 1);
console.log(arr);
