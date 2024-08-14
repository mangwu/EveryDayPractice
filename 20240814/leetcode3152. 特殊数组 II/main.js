// 如果数组的每一对相邻元素都是两个奇偶性不同的数字，则该数组被认为是一个 特殊数组 。

// 周洋哥有一个整数数组 nums 和一个二维整数矩阵 queries，对于 queries[i] = [fromi, toi]，请你帮助周洋哥检查子数组 nums[fromi..toi] 是不是一个 特殊数组 。

// 返回布尔数组 answer，如果 nums[fromi..toi] 是特殊数组，则 answer[i] 为 true ，否则，answer[i] 为 false 。

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  // 区间，二分查找
  const arr = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let start = i;
    let pre = -1;
    while (start < n && pre !== nums[start] % 2) {
      pre = nums[start++] % 2;
    }
    if (start === n || nums[start] % 2 === pre) {
      arr.push([i, start - 1]);
      i = start - 1;
    } else {
      arr.push([i, start]);
      i = start;
    }
  }
  console.log(arr);
  const binarySearch = (target) => {
    // 找到最后一个小于等于target的区间索引
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const [start, _end] = arr[mid];
      if (start > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return right;
  };

  const ans = [];
  for (const [start, end] of queries) {
    const idx = binarySearch(start);
    const [_minStart, maxEnd] = arr[idx];
    ans.push(maxEnd >= end);
  }
  return ans;
};
