// 给你一个长度为 n 下标从 0 开始的正整数数组 nums 。

// 同时给你一个长度为 m 的二维操作数组 queries ，其中 queries[i] = [indexi, ki] 。

// 一开始，数组中的所有元素都 未标记 。

// 你需要依次对数组执行 m 次操作，第 i 次操作中，你需要执行：

// 如果下标 indexi 对应的元素还没标记，那么标记这个元素。
// 然后标记 ki 个数组中还没有标记的 最小 元素。如果有元素的值相等，那么优先标记它们中下标较小的。如果少于 ki 个未标记元素存在，那么将它们全部标记。
// 请你返回一个长度为 m 的数组 answer ，其中 answer[i]是第 i 次操作后数组中还没标记元素的 和 。

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var unmarkedSumArray = function (nums, queries) {
  const n = nums.length;
  const m = queries.length;
  // 标记
  const visited = new Array(n).fill(false);
  let sum = nums.reduce((pre, cur) => pre + cur);
  const ans = new Array(m).fill(0);
  const sorted = new Array(n)
    .fill(0)
    .map((v, i) => i)
    .sort((a, b) => (nums[b] !== nums[a] ? nums[b] - nums[a] : b - a));
  // 主要要优先选择下标小的
  for (let i = 0; i < m; i++) {
    let [index, k] = queries[i];
    if (!visited[index]) {
      sum -= nums[index];
      visited[index] = true;
    }
    while (k > 0 && sorted.length) {
      const cur = sorted.pop();
      if (!visited[cur]) {
        k--;
        visited[cur] = true;
        sum -= nums[cur];
      }
    }
    ans[i] = sum;
  }
  return ans;
};

[18, 5, 5, 5, 5, 18, 13, 5, 10, 13, 18, 13, 19, 14, 14, 13, 14, 13, 11];
[
  [6, 0],
  [14, 1],
  [13, 3],
  [7, 2],
];

// 97 - 3 - 1 - 2
