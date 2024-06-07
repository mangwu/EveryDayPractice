// 给你一个下标从 1 开始、长度为 n 的整数数组 nums 。

// 现定义函数 greaterCount ，使得 greaterCount(arr, val) 返回数组 arr 中 严格大于 val 的元素数量。

// 你需要使用 n 次操作，将 nums 的所有元素分配到两个数组 arr1 和 arr2 中。在第一次操作中，将 nums[1] 追加到 arr1 。在第二次操作中，将 nums[2] 追加到 arr2 。之后，在第 i 次操作中：

// 如果 greaterCount(arr1, nums[i]) > greaterCount(arr2, nums[i]) ，将 nums[i] 追加到 arr1 。
// 如果 greaterCount(arr1, nums[i]) < greaterCount(arr2, nums[i]) ，将 nums[i] 追加到 arr2 。
// 如果 greaterCount(arr1, nums[i]) == greaterCount(arr2, nums[i]) ，将 nums[i] 追加到元素数量较少的数组中。
// 如果仍然相等，那么将 nums[i] 追加到 arr1 。
// 连接数组 arr1 和 arr2 形成数组 result 。例如，如果 arr1 == [1,2,3] 且 arr2 == [4,5,6] ，那么 result = [1,2,3,4,5,6] 。

// 返回整数数组 result 。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  const arr1 = [nums[0]];
  const arr2 = [nums[1]];
  const sorted1 = arr1.slice();
  const sorted2 = arr2.slice();
  const n = nums.length;
  for (let i = 2; i < n; i++) {
    const cnt1 = greaterCount(sorted1, nums[i]);
    const cnt2 = greaterCount(sorted2, nums[i]);
    if (cnt1 > cnt2 || (cnt1 === cnt2 && arr1.length <= arr2.length)) {
      // 添加到arr1中
      sorted1.splice(sorted1.length - cnt1, 0, nums[i]);
      arr1.push(nums[i]);
    } else if (cnt1 < cnt2 || (cnt1 === cnt2 && arr1.length > arr2.length)) {
      // 添加到arr2中
      sorted2.splice(sorted2.length - cnt2, 0, nums[i]);
      arr2.push(nums[i]);
    }
  }
  return [...arr1, ...arr2];
};

/**
 * @description arr中大于val元素的个数
 * @param {number[]} arr sorted arr
 * @param {number} val
 */
function greaterCount(arr, val) {
  // 找到第一个严格大于val的arr[i]，没有就是arr的长度
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] <= val) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  // arr[right]是结果
  return arr.length - right;
}

const random = require("../../publicFunc/random/random");
// console.log(resultArray(random.randomArr(100000, 1, 1000000)));
