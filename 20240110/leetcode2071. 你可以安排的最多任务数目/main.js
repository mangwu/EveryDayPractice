// 给你 n 个任务和 m 个工人。每个任务需要一定的力量值才能完成，需要的力量值保存在下标从 0 开始的整数数组 tasks 中，第 i 个任务需要 tasks[i] 的力量才能完成。每个工人的力量值保存在下标从 0 开始的整数数组 workers 中，第 j 个工人的力量值为 workers[j] 。每个工人只能完成 一个 任务，且力量值需要 大于等于 该任务的力量要求值（即 workers[j] >= tasks[i] ）。

// 除此以外，你还有 pills 个神奇药丸，可以给 一个工人的力量值 增加 strength 。你可以决定给哪些工人使用药丸，但每个工人 最多 只能使用 一片 药丸。

// 给你下标从 0 开始的整数数组tasks 和 workers 以及两个整数 pills 和 strength ，请你返回 最多 有多少个任务可以被完成。

/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function (tasks, workers, pills, strength) {
  // 分配的问题
  // 优先完成需要力量小的工作任务
  const m = tasks.length;
  const n = workers.length;
  let left = 0;
  let right = Math.min(m, n);
  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => b - a);
  const check = (num) => {
    // 检查能否完成数量为num的任务
    for (let i = num - 1; i >= 0; i++) {
      // 完成tasks[i]这个任务
    }
  };
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
  }
};

// [13,12,11]
// [12,7,5]
// 2
