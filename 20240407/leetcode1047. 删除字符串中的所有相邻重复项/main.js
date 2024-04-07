// 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

// 在 S 上反复执行重复项删除操作，直到无法继续删除。

// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];
  for (const ch of s) {
    if (stack.length && stack[stack.length - 1] === ch) stack.pop();
    else stack.push(ch);
  }
  return stack.join("");
};
