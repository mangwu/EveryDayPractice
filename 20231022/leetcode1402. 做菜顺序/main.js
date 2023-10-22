// 一个厨师收集了他 n 道菜的满意程度 satisfaction ，这个厨师做出每道菜的时间都是 1 单位时间。

// 一道菜的 「 like-time 系数 」定义为烹饪这道菜结束的时间（包含之前每道菜所花费的时间）乘以这道菜的满意程度，也就是 time[i]*satisfaction[i] 。

// 返回厨师在准备了一定数量的菜肴后可以获得的最大 like-time 系数 总和。

// 你可以按 任意 顺序安排做菜的顺序，你也可以选择放弃做某些菜来获得更大的总和。

/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b);
  const n = satisfaction.length;
  let ans = 0;
  // dp[i] = [a, b] a表示选择当前菜的最大满意度，b表示选择了多少菜了(包括自身)
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(0));
  dp[0][0] = satisfaction[0];
  dp[0][1] = 1;
  for (let i = 1; i < n; i++) {
    let maxSa = satisfaction[i]; // 默认不选前面的
    let num = 1;
    // 遍历前面的i个满意度，选择最大的满意度
    for (let j = i - 1; j >= 0; j--) {
      const [a, b] = dp[j];
      const curNum = b + 1;
      const curSa = curNum * satisfaction[i] + a;
      if (curSa > maxSa) {
        maxSa = curSa;
        num = curNum;
      }
    }
    dp[i][0] = maxSa;
    dp[i][1] = num;
    ans = Math.max(ans, maxSa);
  }
  return ans;
};
