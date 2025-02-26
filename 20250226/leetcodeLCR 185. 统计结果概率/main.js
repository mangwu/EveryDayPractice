// 你选择掷出 num 个色子，请返回所有点数总和的概率。

// 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 num 个骰子所能掷出的点数集合中第 i 小的那个的概率。

/**
 * @param {number} num
 * @return {number[]}
 */
var statisticsProbability = function (num) {
  // 计算用leftNum个骰子投出leftSum的组合数
  const memo = new Array(num + 1)
    .fill(-1)
    .map((v) => new Array(num * 6 + 1).fill(-1));
  const dfs = (leftNum, leftSum) => {
    if (leftNum === 0) {
      if (leftSum === 0) return 1;
      return 0;
    }
    // 减枝 骰子数量大于剩余和
    if (leftNum > leftSum) return 0;
    // 减枝 剩余和大于骰子能表示的最大数
    if (leftSum > leftNum * 6) return 0;
    if (memo[leftNum][leftSum] !== -1) return memo[leftNum][leftSum];
    let res = 0;
    for (let i = 1; i <= 6; i++) {
      res += dfs(leftNum - 1, leftSum - i);
    }
    memo[leftNum][leftSum] = res;
    return res;
  };
  const ans = [];
  const max = num * 6;
  for (let i = num; i <= max; i++) {
    ans.push(dfs(num, i));
  }
  const total = Math.pow(6, num);
  return ans.map((v) => v / total);
};
