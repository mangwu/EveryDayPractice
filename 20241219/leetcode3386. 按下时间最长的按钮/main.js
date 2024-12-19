// 给你一个二维数组 events，表示孩子在键盘上按下一系列按钮触发的按钮事件。

// 每个 events[i] = [indexi, timei] 表示在时间 timei 时，按下了下标为 indexi 的按钮。

// 数组按照 time 的递增顺序排序。
// 按下一个按钮所需的时间是连续两次按钮按下的时间差。按下第一个按钮所需的时间就是其时间戳。
// 返回按下时间 最长 的按钮的 index。如果有多个按钮的按下时间相同，则返回 index 最小的按钮。

/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events) {
  const n = events.length;
  let spendTime = events[0][1];
  let idx = events[0][0];
  for (let i = 1; i < n; i++) {
    const [index, time] = events[i];
    const [_preIdx, preTime] = events[i - 1];
    const curSpendTime = time - preTime;
    if (curSpendTime > spendTime) {
      spendTime = curSpendTime;
      idx = index;
    } else if (curSpendTime === spendTime) {
      idx = Math.min(idx, index);
    }
  }
  return idx;
};
