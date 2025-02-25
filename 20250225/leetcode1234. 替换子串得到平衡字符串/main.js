// 有一个只含有 'Q', 'W', 'E', 'R' 四种字符，且长度为 n 的字符串。

// 假如在该字符串中，这四个字符都恰好出现 n/4 次，那么它就是一个「平衡字符串」。

// 给你一个这样的字符串 s，请通过「替换一个子串」的方式，使原字符串 s 变成一个「平衡字符串」。

// 你可以用和「待替换子串」长度相同的 任何 其他字符串来完成替换。

// 请返回待替换子串的最小可能长度。

// 如果原字符串自身就是一个平衡字符串，则返回 0。

/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  // 滑动窗口
  const n = s.length;
  const p = n / 4;
  const object = { Q: 0, W: 0, E: 0, R: 0 };
  for (const ch of s) object[ch]++;
  const check = (obj) => {
    return obj.E <= p && obj.Q <= p && obj.W <= p && obj.R <= p;
  };
  if (check(object)) return 0;
  let res = s.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    while (j < n && !check(object)) {
      object[s[j++]]--;
    }
    if (check(object)) res = Math.min(res, j - i);
    object[s[i]]++;
  }
  return res;
};
