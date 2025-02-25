// 给你一个仅由数字组成的字符串 s 。

// 请你判断能否将 s 拆分成两个或者多个 非空子字符串 ，使子字符串的 数值 按 降序 排列，且每两个 相邻子字符串 的数值之 差 等于 1 。

// 例如，字符串 s = "0090089" 可以拆分成 ["0090", "089"] ，数值为 [90,89] 。这些数值满足按降序排列，且相邻值相差 1 ，这种拆分方法可行。
// 另一个例子中，字符串 s = "001" 可以拆分成 ["0", "01"]、["00", "1"] 或 ["0", "0", "1"] 。然而，所有这些拆分方法都不可行，因为对应数值分别是 [0,1]、[0,1] 和 [0,0,1] ，都不满足按降序排列的要求。
// 如果可以按要求拆分 s ，返回 true ；否则，返回 false 。

// 子字符串 是字符串中的一个连续字符序列。

/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
  const n = s.length;
  const dfs = (i, pre, len) => {
    if (i === n) return len >= 2;
    let cur = 0;
    let res = false;
    // 初始可以任意选择
    if (pre === -1) {
      for (let j = i; j < n - 1; j++) {
        cur = cur * 10 + parseInt(s[j]);
        res = res || dfs(j + 1, cur, len + 1);
      }
    } else {
      // 找到pre+1的数字，否则直接返回false
      for (let j = i; j < n; j++) {
        cur = cur * 10 + parseInt(s[j]);
        if (cur === pre - 1) {
          res = res || dfs(j + 1, cur, len + 1);
        } else if (cur > pre + 1) break;
      }
    }
    return res;
  };
  return dfs(0, -1, 0);
};
