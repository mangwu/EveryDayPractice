// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  const n = s.length;
  const isNumber = (ch) => !isNaN(parseInt(ch));
  for (let i = 0; i < n; i++) {
    if (isNumber(s[i])) {
      let cur = parseInt(s[i]);
      let j = i + 1;
      while (j < n && isNumber(s[j])) {
        cur = cur * 10 + parseInt(s[j++]);
      }
      stack.push(cur);
      i = j - 1;
    } else if (s[i] === "]") {
      // 找到上一个"["
      let str = "";
      while (stack.length && stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }
      stack.pop(); // 弹出"["
      const num = stack.pop();
      stack.push(str.repeat(num));
    } else stack.push(s[i]);
  }
  return stack.join("");
};
