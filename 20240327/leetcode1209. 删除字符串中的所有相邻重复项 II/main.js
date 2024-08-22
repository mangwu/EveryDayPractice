// 给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。

// 你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。

// 在执行完所有删除操作后，返回最终得到的字符串。

// 本题答案保证唯一。

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];
  let sameStack = []; // 连续相同字符的数量
  for (const ch of s) {
    if (stack.length && stack[stack.length - 1] === ch) {
      sameStack[sameStack.length - 1]++;
      let same = sameStack[sameStack.length - 1];
      if (same === k) while (same > 1) stack.pop(same--);
      else stack.push(ch);
      if (same === 1) sameStack.pop();
    } else {
      stack.push(ch);
      sameStack.push(1);
    }
  }
  return stack.join("");
};
