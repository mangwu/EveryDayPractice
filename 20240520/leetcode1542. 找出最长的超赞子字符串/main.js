// 给你一个字符串 s 。请返回 s 中最长的 超赞子字符串 的长度。

// 「超赞子字符串」需满足满足下述两个条件：

// 该字符串是 s 的一个非空子字符串
// 进行任意次数的字符交换后，该字符串可以变成一个回文字符串

/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function (s) {
  // 回文字符串：如果长度是奇数，那么只有一个字符的个数是奇数，其它都是偶数
  // 如果长度是偶数，那么字符的个数都是偶数
  // 动态规划：dp[i]是以s[i]为底部字符串的最长超赞子字符串的长度
  // 要求出dp[i]，和dp[i-1]有关，dp[i-1] = k
  // k是奇数，奇数的字符是s[p]
  //    s[i] === s[p]  => dp[i] = dp[i-1] + 1 + dp[i-k-1] 新的奇数字符由dp[i-k-1]决定
  //    s[i] !== s[p]  => dp[i] = i - p + 1   新的奇数字符是s[i]
  // k如果是偶数，那么最长超赞子字符串应该是以s[0]为开头，以s[i-1]为底的的字符串
  //    dp[i] = dp[i-1]+1  奇数字符串是s[i]
  const n = s.length;
  const dp = new Array(n).fill(0).map((_v, i) => new Array(2).fill(i));
  dp.forEach((v) => (v[0] = 1));
  let res = 1;
  for (let i = 1; i < n; i++) {
    const [k, p] = dp[i - 1];
    if (k % 2 === 0) {
      dp[i][0] = k + 1;
      dp[i][1] = i;
    } else {
      // 奇数
      if (s[i] === s[p]) {
        // 奇数字符和当前字符相同
        if (i - k - 1 >= 0) {
          dp[i][0] = k + 1 + dp[i - k - 1][0];
          dp[i][1] = dp[i - k - 1][1];
        } else {
          dp[i][0] = k + 1;
          dp[i][1] = -1;
        }
      } else {
        if (s[i] === s[i - k - 1]) {
          // 当前字符和开头字符相同
          dp[i][0] = k + 2;
          dp[i][1] = p;
        } else {
          if (s[i] === s[i - 1]) {
            // 当前字符和上一个字符相等
            if (i - 2 >= 0) {
              dp[i][0] = dp[i - 2][0] + 2;
              dp[i][1] = dp[i - 2][1];
            } else {
              dp[i][0] = 2;
              dp[i][1] = -1;
            }
          } else if (s[i] === s[i - 2]) {
          }
          dp[i][0] = i - p;
          dp[i][1] = i;
        }
      }
    }
    res = Math.max(res, dp[i][0]);
  }
  console.log(dp);
  return res;
};

// 32727223
// 3242415

// 727272

// 65233254422

// 88727

// 5 xxxx  4885577 5

// 12312

// 状态压缩，因为s中只存在0-9这个10个字符，回文字符串与这些个字符数量的奇偶有关
// 所以任意一个子字符串都能使用10位的二进制数表示，其中0表示对应位的字符为偶数，1反之
// 所以一个字符串是否是回文，判断它的10位二进制数是否只包含一个1即可

/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function (s) {
  let preffix = new Map([[0, -1]]);
  let ans = 0;
  let sequence = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    let digit = parseInt(s[i]);
    sequence ^= 1 << digit; // 将digit位的二进制数取1的异或，相当于变更奇偶
    if (preffix.has(sequence)) {
      // 有相同的数位奇偶，依据奇减奇，偶减偶都是偶数，
      ans = Math.max(ans, i - preffix.get(sequence));
    } else {
      preffix.set(sequence, i);
    }
    for (let k = 0; k < 10; k++) {
      if (preffix.has(sequence ^ (1 << k))) {
        // 只有一位不同的也可以成为回文序列
        ans = Math.max(ans, i - preffix.get(sequence ^ (1 << k)));
      }
    }
  }
  return ans;
};
