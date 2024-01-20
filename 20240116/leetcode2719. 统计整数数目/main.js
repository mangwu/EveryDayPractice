// 给你两个数字字符串 num1 和 num2 ，以及两个整数 max_sum 和 min_sum 。如果一个整数 x 满足以下条件，我们称它是一个好整数：

// num1 <= x <= num2
// min_sum <= digit_sum(x) <= max_sum.
// 请你返回好整数的数目。答案可能很大，请返回答案对 109 + 7 取余后的结果。

// 注意，digit_sum(x) 表示 x 各位数字之和。

const MOD = 10 ** 9 + 7;

/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function (num1, num2, min_sum, max_sum) {
  const min_len = num1.length;
  const max_len = num2.length;
  // i 当前要选择的位
  // isNum：前面是否填了数字
  // isLimit：前面是否全部到达限制
  //     isZero和isLimit可以用来获取当前位可以选取的范围
  // preSum：已选的数位和
  // dp：记忆化搜索的状态数组
  // num：最大值
  const dp1 = new Array(max_len)
    .fill(-1)
    .map(() => new Array(max_sum + 1).fill(-1));
  const dp2 = new Array(min_len)
    .fill(-1)
    .map(() => new Array(max_sum + 1).fill(-1));
  const dfs = (i, isNum, isLimit, preSum, dp, num) => {
    const n = num.length;
    if (i === n) {
      // 完成一次遍历，检查是否符合条件
      if (preSum >= min_sum && preSum <= max_sum) return 1;
      return 0;
    }
    // 提前返回不符合条件的值
    if (preSum > max_sum) return 0;
    // 对于没选过数字或者进行过限制的清理无需使用dp，因为这两种情况只会有一次
    if (!isLimit && isNum && dp[i][preSum] >= 0) return dp[i][preSum];
    let res = 0;
    // 单独处理跳过的情况
    if (!isNum) res = dfs(i + 1, isNum, false, preSum, dp, num);
    let start = isNum ? 0 : 1; // 前面选了数字就可以从0开始
    let end = isLimit ? num[i] - "0" : 9; // 前面选的数字全部达到限制
    for (let d = start; d <= end; d++) {
      res =
        (res + dfs(i + 1, true, isLimit && d === end, preSum + d, dp, num)) %
        MOD;
    }
    // 记录没有限制且填了数字的情况
    if (!isLimit && isNum) dp[i][preSum] = res;
    return res;
  };
  // 判断num1是否符合条件
  const num1Sum = num1.split("").reduce((pre, cur) => pre + parseInt(cur), 0);
  const isNum1Valid = num1Sum <= max_sum && num1Sum >= min_sum;
  return (
    (dfs(0, false, true, 0, dp1, num2) -
      dfs(0, false, true, 0, dp2, num1) +
      MOD +
      Number(isNum1Valid)) %
    MOD
  );
};
