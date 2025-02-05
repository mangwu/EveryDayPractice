// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的
// 子集
// （幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const path = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const res = [];
  const dfs = (i) => {
    if (i === n) {
      res.push(path.slice());
      return;
    }
    // 不选的情况需要跳到下一个不同的元素上
    let j = i + 1;
    while (j > 0 && j < n && nums[j] === nums[j - 1]) j++;
    dfs(j);
    path.push(nums[i]);
    dfs(i + 1);
    path.pop();
  };
  dfs(0);
  return res;
};
