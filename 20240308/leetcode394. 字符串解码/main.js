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
  for (let i = 0; i < n; i++) {
    if (s[i] === "]") {
      let ch = "";
      while (stack[stack.length - 1] !== "[") {
        ch = stack.pop() + ch;
      }
      stack.pop();
      stack.push(ch.repeat(stack.pop()));
    } else if (!isNaN(parseInt(s[i]))) {
      let cur = parseInt(s[i]);
      while (i + 1 < n && !isNaN(parseInt(s[i + 1])))
        cur = cur * 10 + parseInt(s[++i]);
      stack.push(cur);
    } else stack.push(s[i]);
  }
  return stack.join("");
};

// ac21[k4[lc2[5[dl]ss]b]4[hy]]sa
// ac21[k4[lc[dlss]b]]
