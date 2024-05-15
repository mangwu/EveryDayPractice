// 你有一台电脑，它可以 同时 运行无数个任务。给你一个二维整数数组 tasks ，其中 tasks[i] = [starti, endi, durationi] 表示第 i 个任务需要在 闭区间 时间段 [starti, endi] 内运行 durationi 个整数时间点（但不需要连续）。

// 当电脑需要运行任务时，你可以打开电脑，如果空闲时，你可以将电脑关闭。

// 请你返回完成所有任务的情况下，电脑最少需要运行多少秒。

/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function (tasks) {
  tasks.sort((a, b) => a[1] - b[1]);
  const n = tasks.length;
  const run = new Array(tasks[n - 1][1] + 1).fill(0);
  let res = 0;
  for (let i = 0; i < n; i++) {
    let [start, end, duration] = tasks[i];
    duration -= run.slice(start, end + 1).reduce((pre, cur) => pre + cur, 0);
    // 计算前面[start, end+1]时间点内有运行任务的时间点之和
    // 需要额外添加的运行时间点就是duration减去前面之和
    res += Math.max(duration, 0);
    // 如果duration大于0，说明需要占用未开机的时间点
    for (let j = end; j >= start && duration > 0; j--) {
      if (run[j] === 0) {
        duration--;
        run[j] = 1;
      }
    }
  }
  return res;
};
