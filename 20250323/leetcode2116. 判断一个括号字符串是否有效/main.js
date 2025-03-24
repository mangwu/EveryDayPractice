// 一个括号字符串是只由 '(' 和 ')' 组成的 非空 字符串。如果一个字符串满足下面 任意 一个条件，那么它就是有效的：

// 字符串为 ().
// 它可以表示为 AB（A 与 B 连接），其中A 和 B 都是有效括号字符串。
// 它可以表示为 (A) ，其中 A 是一个有效括号字符串。
// 给你一个括号字符串 s 和一个字符串 locked ，两者长度都为 n 。locked 是一个二进制字符串，只包含 '0' 和 '1' 。对于 locked 中 每一个 下标 i ：

// 如果 locked[i] 是 '1' ，你 不能 改变 s[i] 。
// 如果 locked[i] 是 '0' ，你 可以 将 s[i] 变为 '(' 或者 ')' 。
// 如果你可以将 s 变为有效括号字符串，请你返回 true ，否则返回 false 。

/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  const n = s.length;
  if (n % 2 === 1) return false;
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (locked[i] === "0") {
      if (stack.length && stack[stack.length - 1] > 0) {
        stack[stack.length - 1]++;
      } else {
        stack.push(1);
      }
    } else if (s[i] === ")") {
      if (stack.length) {
        const peek = stack.pop();
        if (peek === "(") continue;
        if (stack.length) {
          stack.pop();
          stack.push(peek);
        } else if (peek > 1) stack.push(peek - 1);
      } else return false;
    } else stack.push(s[i]);
  }
  // 左括号
  let zero = 0;
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] > 0) {
      zero += stack[i];
    } else {
      zero--;
      if (zero < 0) return false;
    }
  }
  return true;
};

// "((((()"
// "110101"
