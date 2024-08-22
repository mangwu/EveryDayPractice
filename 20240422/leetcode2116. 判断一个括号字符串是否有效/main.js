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
  // 将所有locked[i]为0的换成*，*可以看成任意字符
  const arr = s.split("").map((v, i) => (locked[i] === "0" ? "*" : v));
  // 保证左右括号数量相等
  let left = 0;
  let right = 0;
  let mid = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === "(") {
      left++;
    } else if (arr[i] === ")") {
      right++;
      if (right > left + mid) return false;
    } else {
      mid++;
    }
  }
  if (left > right + mid) return false;
  left = 0;
  right = 0;
  mid = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] === "(") {
      left++;
      if (left > right + mid) return false;
    } else if (arr[i] === ")") {
      right++;
    } else {
      mid++;
    }
  }
  if (right > left + mid) return false;
  return true;
};

// "())()))()(()(((())(()()))))((((()())(())"
// "1011101100010001001011000000110010100101"
