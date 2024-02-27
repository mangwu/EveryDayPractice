// 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

class Dqueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  enqueueFront(val) {
    this.items[this.lowest--] = val;
  }
  enqueueBack(val) {
    this.items[this.highest++] = val;
  }
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // 记录每个字符的索引位置
  const alpha = new Array(26).fill(0).map(() => new Dqueue());
  const aCode = "a".charCodeAt();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    alpha[s[i].charCodeAt() - aCode].enqueueBack(i);
  }
  let len = alpha.reduce((pre, cur) => pre + (!cur.isEmpty() ? 1 : 0), 0);
  let ans = "";
  const check = (i) => {
    const select = alpha[i].peekFront();
    for (let j = 0; j < n; j++) {
      const cur = alpha[j];
      if (j !== i && !cur.isEmpty()) {
        if (cur.peekBack() < select) return false;
      }
    }
    for (let j = 0; j < n; j++) {
      const cur = alpha[j];
      if (j !== i && !cur.isEmpty()) {
        while (!cur.isEmpty() && cur.peekFront() <= select) cur.dequeueFront();
      }
    }
    return true;
  };
  while (len) {
    // 选择其中一个字典序最大，且后续都有索引的
    for (let i = 0; i < 26; i++) {
      if (!alpha[i].isEmpty()) {
        // 可以选择String.charCodeAt(i)
        if (check(i)) {
          console.log(i);
          ans += String.fromCharCode(i + aCode);
          alpha[i] = new Dqueue();
          break;
        }
      }
    }
    len--;
  }
  return ans;
};

// "zzchnazgcza"
