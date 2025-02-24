// 为了提高自己的代码能力，小张制定了 LeetCode 刷题计划，他选中了 LeetCode 题库中的 n 道题，编号从 0 到 n-1，并计划在 m 天内按照题目编号顺序刷完所有的题目（注意，小张不能用多天完成同一题）。

// 在小张刷题计划中，小张需要用 time[i] 的时间完成编号 i 的题目。此外，小张还可以使用场外求助功能，通过询问他的好朋友小杨题目的解法，可以省去该题的做题时间。为了防止“小张刷题计划”变成“小杨刷题计划”，小张每天最多使用一次求助。

// 我们定义 m 天中做题时间最多的一天耗时为 T（小杨完成的题目不计入做题总时间）。请你帮小张求出最小的 T是多少。

/**
 * @param {number[]} time
 * @param {number} m
 * @return {number}
 */
var minTime = function (time, m) {
  const n = time.length;
  if (n <= m) return 0; // 每天请求一次
  let left = 1;
  let right = time.reduce((a, b) => a + b);
  const check = (mid) => {
    let days = 0;
    for (let i = 0; i < n; i++) {
      let curSum = time[i];
      let j = i + 1;
      let max = time[i]; // 记录最大值
      while (j < n) {
        curSum += time[j];
        max = Math.max(max, time[j]);
        if (curSum - max <= mid) {
          // 移除耗费最大的题目可以继续遍历
          j++;
          continue;
        } else break;
      }
      i = j - 1;
      days++;
    }
    return days <= m;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return left;
};
