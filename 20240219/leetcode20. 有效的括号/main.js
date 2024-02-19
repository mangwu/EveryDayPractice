// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

class Stack {
  #items = {}; // 私有属性
  #count = 0;
  push(...eles) {
    for (const ele of eles) {
      this.#items[this.#count++] = ele;
    }
  }
  size() {
    return this.#count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  pop() {
    if (this.isEmpty()) return undefined;
    const res = this.#items[--this.#count];
    delete this.#items[this.#count];
    return res;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.#items[this.#count - 1];
  }
  clear() {
    this.#count = 0;
    this.#items = {};
  }
  toString() {
    if (this.isEmpty()) return "";
    let str = this.#items[0] + "";
    for (let i = 1; i < this.#count; i++) str += `,${this.#items[i]}`;
    return str;
  }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = new Stack();
  for (const ch of s)
    if (stack.peek() === relativeBracket(ch)) stack.pop();
    else stack.push(ch);
  return stack.isEmpty();
};

function relativeBracket(bracket) {
  switch (bracket) {
    case ")":
      return "(";
    case "]":
      return "[";
    case "}":
      return "{";
    default:
      return "";
  }
}
