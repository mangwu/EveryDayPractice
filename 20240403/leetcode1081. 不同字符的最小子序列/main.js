// 返回 s 字典序最小的
// 子序列
// ，该子序列包含 s 的所有不同字符，且只包含一次。

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
  enqueueFront(value) {
    this.items[this.lowest--] = value;
  }
  enqueueBack(value) {
    this.items[this.highest++] = value;
  }
  peekFront() {
    if (this.isEmpty()) return;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return;
    return this.items[this.highest - 1];
  }
  dequeueFront() {
    if (this.isEmpty()) return;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  // 选择当前 字典序最小但是后续仍然有
  const aphla = new Array(26).fill(-1).map(() => new Dqueue());
  const n = s.length;
  const aCode = "a".charCodeAt();
  for (let i = 0; i < n; i++) aphla[s[i].charCodeAt() - aCode].enqueueBack(i);
  const ansArr = [];
  const check = (alphaIdx, strIdx) => {
    for (let i = 0; i < 26; i++) {
      if (i !== alphaIdx && !aphla[i].isEmpty()) {
        if (aphla[i].peekBack() < strIdx) return false;
      }
    }
    for (let i = 0; i < 26; i++) {
      if (i !== alphaIdx && !aphla[i].isEmpty()) {
        while (aphla[i].peekFront() <= strIdx) aphla[i].dequeueFront();
      }
    }
    return true;
  };
  while (true) {
    let hasMatch = false;
    for (let i = 0; i < 26; i++) {
      if (!aphla[i].isEmpty()) {
        // 检查是否可以选取aphla[i]中的某一项作为结果
        if (check(i, aphla[i].peekFront())) {
          // 可以
          ansArr.push(String.fromCharCode(aCode + i));
          aphla[i] = new Dqueue();
          hasMatch = true;
          break;
        }
      }
    }
    if (!hasMatch) break;
  }
  return ansArr.join("");
};
