/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-26 15:29:43                                                  *
 * @LastModifiedDate: 2024-03-26 16:23:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个括号字符串 s ，它只包含字符 '(' 和 ')' 。一个括号字符串被称为平衡的当它满足：

// 任何左括号 '(' 必须对应两个连续的右括号 '))' 。
// 左括号 '(' 必须在对应的连续两个右括号 '))' 之前。
// 比方说 "())"， "())(())))" 和 "(())())))" 都是平衡的， ")()"， "()))" 和 "(()))" 都是不平衡的。

// 你可以在任意位置插入字符 '(' 和 ')' 使字符串平衡。

// 请你返回让 s 平衡的最少插入次数。

class Stack {
  #items = [];
  size() {
    return this.#items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return;
    return this.#items[this.size() - 1];
  }
  pop() {
    if (this.isEmpty()) return;
    return this.#items.pop();
  }
  push(value) {
    this.#items.push(value);
  }
  toString(splitStr = "") {
    return this.#items.join(splitStr);
  }
}

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const stack = new Stack();
  for (const ch of s) {
    if (ch === "(") stack.push(ch);
    else {
      // ")"
      const top = stack.pop();
      if (top === ")" && stack.peek() === "(") stack.pop();
      else {
        top && stack.push(top);
        stack.push(ch);
      }
    }
  }
  let ans = 0;
  while (!stack.isEmpty()) {
    const top = stack.pop();
    if (top === "(") {
      ans += 2;
    } else {
      // )
      const nxtTop = stack.peek();
      if (nxtTop) {
        ans++;
        stack.pop();
      } else ans += 2;
    }
  }
  return ans;
};

// (()()()(()))))))))
// +2()()()(()))))))))
// +1()()(()))))))))
// +1()(()))))))))
// +1(()))))))))
// +2()))))))))
//

// (()))(()))()())))
// +1(()))()())))
// +1()())))
// +1())))
// ))
// +1

// 上述解答错误，右括号需要时连续的

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const stack = new Stack();
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (ch === "(") {
      stack.push(ch);
    } else {
      // ")"
      const top = stack.peek();
      if (top === "(") {
        if (i + 1 < n && s[i + 1] === ")") i++;
        else ans++;
        stack.pop();
      } else {
        // top为空
        if (i + 1 < n && s[i + 1] === ")") {
          i++;
          ans++;
        } else ans += 2;
      }
    }
  }
  if (!stack.isEmpty()) ans += stack.size() * 2;
  return ans;
};
