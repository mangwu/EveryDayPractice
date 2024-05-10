// 给你一个长度为 n 、下标从 0 开始的整数数组 batteryPercentages ，表示 n 个设备的电池百分比。

// 你的任务是按照顺序测试每个设备 i，执行以下测试操作：

// 如果 batteryPercentages[i] 大于 0：
// 增加 已测试设备的计数。
// 将下标在 [i + 1, n - 1] 的所有设备的电池百分比减少 1，确保它们的电池百分比 不会低于 0 ，即 batteryPercentages[j] = max(0, batteryPercentages[j] - 1)。
// 移动到下一个设备。
// 否则，移动到下一个设备而不执行任何测试。
// 返回一个整数，表示按顺序执行测试操作后 已测试设备 的数量。

/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let res = 0;
  const n = batteryPercentages.length;
  for (let i = 0; i < n; i++) {
    if (batteryPercentages[i] > 0) {
      res++;
      for (let j = i + 1; j < n; j++) {
        batteryPercentages[j] = Math.max(batteryPercentages[j] - 1, 0);
      }
    }
  }
  return res;
};
