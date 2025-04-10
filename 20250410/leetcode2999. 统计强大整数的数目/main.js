// 给你三个整数 start ，finish 和 limit 。同时给你一个下标从 0 开始的字符串 s ，表示一个 正 整数。

// 如果一个 正 整数 x 末尾部分是 s （换句话说，s 是 x 的 后缀），且 x 中的每个数位至多是 limit ，那么我们称 x 是 强大的 。

// 请你返回区间 [start..finish] 内强大整数的 总数目 。

// 如果一个字符串 x 是 y 中某个下标开始（包括 0 ），到下标为 y.length - 1 结束的子字符串，那么我们称 x 是 y 的一个后缀。比方说，25 是 5125 的一个后缀，但不是 512 的后缀。

/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function (start, finish, limit, s) {
  // 先判断s是否在start和finish之内
  const num = parseInt(s);
  if (num > finish) return 0;
  let low = start.toString();
  let high = finish.toString();
  const n = high.length;
  low = low.padStart(n, "0"); // 对齐位数
  const pre_len = n - s.length; // 前缀长度
  const memo = new Array(n).fill(-1);

  const dfs = (i, limit_low, limit_high) => {
    if (i === n) return 1; // 递归边界
    if (!limit_low && !limit_high && memo[i] !== -1) return memo[i];
    const lo = limit_low ? parseInt(low[i]) : 0;
    const hi = limit_high ? parseInt(high[i]) : 9;
    let res = 0;
    if (i < pre_len) {
      for (let d = lo; d <= Math.min(hi, limit); d++) {
        res += dfs(i + 1, limit_low && d === lo, limit_high && d === hi);
      }
    } else {
      const x = parseInt(s[i - pre_len]); // 当前取得的数字
      if (lo <= x && x <= Math.min(hi, limit)) {
        res += dfs(i + 1, limit_low && x === lo, limit_high && x === hi);
      }
    }
    if (!limit_low && !limit_high) memo[i] = res;
    return res;
  };
  return dfs(0, true, true);
};

// limit: 5

// 5 => 1
// ?5 => 5
// ??5 => 25
// ???5=> 125
