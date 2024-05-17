// 你有 n 个工作和 m 个工人。给定三个数组： difficulty, profit 和 worker ，其中:

// difficulty[i] 表示第 i 个工作的难度，profit[i] 表示第 i 个工作的收益。
// worker[i] 是第 i 个工人的能力，即该工人只能完成难度小于等于 worker[i] 的工作。
// 每个工人 最多 只能安排 一个 工作，但是一个工作可以 完成多次 。

// 举个例子，如果 3 个工人都尝试完成一份报酬为 $1 的同样工作，那么总收益为 $3 。如果一个工人不能完成任何工作，他的收益为 $0 。
// 返回 在把工人分配到工作岗位后，我们所能获得的最大利润 。

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  // 一个工作可以完成多次，优先完成利润大，难度低的工作
  const jobs = difficulty
    .map((v, i) => [v, profit[i]])
    .sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  const workers = worker.sort((a, b) => a - b);
  const n = jobs.length;
  let left = 0;
  let maxProfit = 0;
  let res = 0;
  for (const worker of workers) {
    while (left < n && jobs[left][0] <= worker) {
      maxProfit = Math.max(maxProfit, jobs[left++][1]);
    }
    res += maxProfit;
  }
  return res;
};

// difficulty的范围在10^5内，可以桶排序
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  // 一个工作可以完成多次，优先完成利润大，难度低的工作
  const maxDifficulty = Math.max(
    Math.max.apply(null, difficulty),
    Math.max.apply(null, worker)
  );
  const maxProfits = new Array(maxDifficulty + 1).fill(0);
  const n = difficulty.length;
  for (let i = 0; i < n; i++) {
    maxProfits[difficulty[i]] = Math.max(maxProfits[difficulty[i]], profit[i]);
  }
  for (let i = 1; i <= maxDifficulty; i++) {
    maxProfits[i] = Math.max(maxProfits[i], maxProfits[i - 1]);
  }
  return worker.reduce((pre, cur) => pre + maxProfits[cur], 0);
};
