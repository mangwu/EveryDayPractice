// 给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  // 也就是保留n-k个数字，使得n-k个数字组成的值最小
  const n = num.length;
  let remain = k; // 需要移出的字符数量
  const stack = []; // 单调递增栈
  for (let i = 0; i < n; i++) {
    while (remain && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      remain--;
    }
    if (stack.length < n - k) {
      // 需要保留的字符数量
      stack.push(num[i]);
    } else remain--;
  }
  let start = 0;
  while (stack[start] === "0") start++;
  const res = stack.slice(start).join("");
  return res || "0";
};
