// 给你一个下标从 0 开始的整数数组 tasks ，其中 tasks[i] 表示任务的难度级别。在每一轮中，你可以完成 2 个或者 3 个 相同难度级别 的任务。

// 返回完成所有任务需要的 最少 轮数，如果无法完成所有任务，返回 -1 。

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const hash = new Map();
  for (const task of tasks) hash.set(task, (hash.get(task) | 0) + 1);
  let res = 0;
  for (const [task, num] of hash) {
    if (num === 1) return -1;
    res += Math.ceil(num / 3);
  }
  return res;
};
