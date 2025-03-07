// 请你设计一个带光标的文本编辑器，它可以实现以下功能：

// 添加：在光标所在处添加文本。
// 删除：在光标所在处删除文本（模拟键盘的删除键）。
// 移动：将光标往左或者往右移动。
// 当删除文本时，只有光标左边的字符会被删除。光标会留在文本内，也就是说任意时候 0 <= cursor.position <= currentText.length 都成立。

// 请你实现 TextEditor 类：

// TextEditor() 用空文本初始化对象。
// void addText(string text) 将 text 添加到光标所在位置。添加完后光标在 text 的右边。
// int deleteText(int k) 删除光标左边 k 个字符。返回实际删除的字符数目。
// string cursorLeft(int k) 将光标向左移动 k 次。返回移动后光标左边 min(10, len) 个字符，其中 len 是光标左边的字符数目。
// string cursorRight(int k) 将光标向右移动 k 次。返回移动后光标左边 min(10, len) 个字符，其中 len 是光标左边的字符数目。

class DLinkedNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
  insertNext(node) {
    const next = this.next;
    this.next = node;
    node.next = next;
    node.prev = this;
    next && (next.prev = node);
    return node;
  }
  insertPrev(node) {
    const prev = this.prev;
    this.prev = node;
    node.next = this;
    node.prev = prev;
    prev && (prev.next = node);
    return node;
  }
  remove() {
    const prev = this.prev;
    const next = this.next;
    this.prev = null;
    this.next = null;
    prev && (prev.next = next);
    next && (next.prev = prev);
    return prev;
  }
}

var TextEditor = function () {
  this.header = new DLinkedNode(-1); // 头节点
  this.p = this.header; // 指针位置
};

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function (text) {
  for (const ch of text) {
    this.p = this.p.insertNext(new DLinkedNode(ch));
  }
};

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function (k) {
  let cnt = 0;
  while (k && this.p.val !== -1) {
    this.p = this.p.remove();
    k--;
    cnt++;
  }
  return cnt;
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function (k) {
  while (this.p.prev && k) {
    k--;
    this.p = this.p.prev;
  }
  let res = [];
  let node = this.p;
  while (res.length < 10 && node.val !== -1) {
    res.push(node.val);
    node = node.prev;
  }
  return res.reverse().join("");
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function (k) {
  while (this.p.next && k) {
    k--;
    this.p = this.p.next;
  }
  let res = [];
  let node = this.p;
  while (res.length < 10 && node.val !== -1) {
    res.push(node.val);
    node = node.prev;
  }
  return res.reverse().join("");
};

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

// 链表实现

// leetpractice
