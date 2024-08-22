// 给你一个字符串 s ，下标从 0 开始 ，且长度为偶数 n 。字符串 恰好 由 n / 2 个开括号 '[' 和 n / 2 个闭括号 ']' 组成。

// 只有能满足下述所有条件的字符串才能称为 平衡字符串 ：

// 字符串是一个空字符串，或者
// 字符串可以记作 AB ，其中 A 和 B 都是 平衡字符串 ，或者
// 字符串可以写成 [C] ，其中 C 是一个 平衡字符串 。
// 你可以交换 任意 两个下标所对应的括号 任意 次数。

// 返回使 s 变成 平衡字符串 所需要的 最小 交换次数。

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  const stack = [];
  const left = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === "[") left.push(i);
  }
  s = s.split("");
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === "]") {
      if (stack.length && stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        // 需要进行交换
        const lastIdx = left.pop();
        stack.push("[");
        s[lastIdx] = "]";
        ans++;
      }
    }
  }
  return ans;
};

// [[]]]
