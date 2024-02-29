// 给你一个只包含三种字符的字符串，支持的字符类型分别是 '('、')' 和 '*'。请你检验这个字符串是否为有效字符串，如果是有效字符串返回 true 。

// 有效字符串符合如下规则：

// 任何左括号 '(' 必须有相应的右括号 ')'。
// 任何右括号 ')' 必须有相应的左括号 '(' 。
// 左括号 '(' 必须在对应的右括号之前 ')'。
// '*' 可以被视为单个右括号 ')' ，或单个左括号 '(' ，或一个空字符串。
// 一个空字符串也被视为有效字符串。

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const stack = [];
  const n = s.length;
  let left = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push("(");
      left++;
    } else if (s[i] === ")") {
      if (left > 0) {
        // 优先去除左括号
        left--;
        if (stack[stack.length - 1] !== "(") {
          let stars = stack.pop();
          while (stack[stack.length - 1] !== "(") {
            stars += stack.pop();
          }
          stack.pop();
          stack.push(stars);
        } else stack.pop();
      } else {
        if (!stack.length) return false;
        const stars = stack.pop();
        if (stars > 1) stack.push(stars - 1);
      }
    } else {
      // 星号
      if (!stack.length || stack[stack.length - 1] === "(") stack.push(1);
      else if (stack[stack.length - 1] !== "(") stack.push(stack.pop() + 1);
    }
    console.log(s[i], stack);
  }
  while (stack.length && stack[stack.length - 1] !== "(") {
    let stars = stack.pop();
    while (stack.length && stars) {
      const cur = stack.pop();
      if (cur === "(") {
        stars--;
        left--;
      } else stars += cur;
    }
  }
  return left === 0;
};

// (((((***
