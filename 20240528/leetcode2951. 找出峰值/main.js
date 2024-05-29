// 给你一个下标从 0 开始的数组 mountain 。你的任务是找出数组 mountain 中的所有 峰值。

// 以数组形式返回给定数组中 峰值 的下标，顺序不限 。

// 注意：

// 峰值 是指一个严格大于其相邻元素的元素。
// 数组的第一个和最后一个元素 不 是峰值。

/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  const ans = [];
  const n = mountain.length;
  for (let i = 1; i < n - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1])
      ans.push(i);
  }
  return ans;
};
