// 给你 n 个项目，编号从 0 到 n - 1 。同时给你一个整数数组 milestones ，其中每个 milestones[i] 表示第 i 个项目中的阶段任务数量。

// 你可以按下面两个规则参与项目中的工作：

// 每周，你将会完成 某一个 项目中的 恰好一个 阶段任务。你每周都 必须 工作。
// 在 连续的 两周中，你 不能 参与并完成同一个项目中的两个阶段任务。
// 一旦所有项目中的全部阶段任务都完成，或者仅剩余一个阶段任务都会导致你违反上面的规则，那么你将 停止工作 。注意，由于这些条件的限制，你可能无法完成所有阶段任务。

// 返回在不违反上面规则的情况下你 最多 能工作多少周。

/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function (milestones) {
  // 找出最大值
  let max = milestones[0];
  let sum = milestones[0];
  const n = milestones.length;
  for (let i = 1; i < n; i++) {
    max = Math.max(max, milestones[i]);
    sum += milestones[i];
  }
  sum -= max;
  if (max <= sum) {
    return max + sum;
  } else return sum * 2 + 1;
};
