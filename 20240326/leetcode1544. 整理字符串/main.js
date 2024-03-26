// 给你一个由大小写英文字母组成的字符串 s 。

// 一个整理好的字符串中，两个相邻字符 s[i] 和 s[i+1]，其中 0<= i <= s.length-2 ，要满足如下条件:

// 若 s[i] 是小写字符，则 s[i+1] 不可以是相同的大写字符。
// 若 s[i] 是大写字符，则 s[i+1] 不可以是相同的小写字符。
// 请你将字符串整理好，每次你都可以从字符串中选出满足上述条件的 两个相邻 字符并删除，直到字符串整理好为止。

// 请返回整理好的 字符串 。题目保证在给出的约束条件下，测试样例对应的答案是唯一的。

// 注意：空字符串也属于整理好的字符串，尽管其中没有任何字符。

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
 * @return {string}
 */
var makeGood = function (s) {
  const stack = new Stack();
  for (const ch of s) {
    if (stack.isEmpty()) stack.push(ch);
    else {
      const top = stack.peek();
      if (top !== ch && ch.toLocaleUpperCase() === top.toLocaleUpperCase()) {
        stack.pop();
      } else stack.push(ch);
    }
  }
  return stack.toString();
};
