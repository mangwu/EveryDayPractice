// 有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。

// 例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
// 如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

// 给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

// 对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  // 删除一次外层的括号
  const stack = [];
  const res = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (ch === ")") {
      if (stack.length === 1) {
        stack.pop();
      } else {
        res.push(stack.pop());
        res.push(i);
      }
    } else stack.push(i);
  }
  return res
    .sort((a, b) => a - b)
    .map((v) => s[v])
    .join("");
};
