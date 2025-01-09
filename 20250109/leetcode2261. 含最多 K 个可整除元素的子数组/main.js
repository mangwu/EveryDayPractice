// 给你一个整数数组 nums 和两个整数 k 和 p ，找出并返回满足要求的不同的子数组数，要求子数组中最多 k 个可被 p 整除的元素。

// 如果满足下述条件之一，则认为数组 nums1 和 nums2 是 不同 数组：

// 两数组长度 不同 ，或者
// 存在 至少 一个下标 i 满足 nums1[i] != nums2[i] 。
// 子数组 定义为：数组中的连续元素组成的一个 非空 序列。

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function (nums, k, p) {
  // 记录能被p整除的数字的索引
  const n = nums.length;
  let num = 0;
  let j = 0;
  let res = 0;
  const root = {};
  for (let i = 0; i < n; i++) {
    while (j < n && num <= k) {
      if (nums[j] % p === 0) num++;
      j++;
    }

    let node = root;
    let end = num === k + 1 ? j - 1 : j;
    // console.log([i, end], nums.slice(i, end));
    for (let k = i; k < end; k++) {
      if (!node[nums[k]]) node[nums[k]] = {};
      node = node[nums[k]];
    }
    if (nums[i] % p === 0) num--;
  }
  const dfs = (node) => {
    if (!node) return;
    const keys = Object.keys(node);
    for (const key of keys) {
      res++;
      dfs(node[key]);
    }
  };
  dfs(root);
  return res;
};

countDistinct([2, 3, 3, 2, 2, 4, 5, 2], 3, 2);


// [2,3,3,2,2,4,5,2]