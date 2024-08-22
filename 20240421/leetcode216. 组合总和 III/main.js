// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

// 只使用数字1到9
// 每个数字 最多使用一次
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const ans = [];
  const path = [];
  const dfs = (curNum, leftNum, leftFre) => {
    if (leftNum < 0) return;
    if (leftFre < 0) return;
    if (leftNum === 0 && leftFre === 0) {
      ans.push(path.slice());
      return;
    }
    if (curNum >= 10) return;
    // 不选择当前数字
    dfs(curNum + 1, leftNum, leftFre);
    // 选择当前数字
    path.push(curNum);
    dfs(curNum + 1, leftNum - curNum, leftFre - 1);
    path.pop();
  };
  dfs(1, n, k);
  return ans;
};
