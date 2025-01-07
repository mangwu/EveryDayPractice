// 两种前缀树/字典树的
class Trie1 {
  constructor() {
    // 使用一个对象实现
    this.children = {};
  }
  /**
   * @description 在字典树中插入字符串
   * @param {string} word 插入的字符串
   * @returns {void}
   */
  insert(word) {
    let node = this.children;
    for (const ch of word) {
      if (!node[ch]) node[ch] = {};
      node = node[ch];
    }
    node.isEnd = true;
  }
  getChildren() {
    return this.children;
  }
  /**
   * @description 查找字符串
   * @param {string} word
   * @returns {number} 0:没有相关字符串;1:有以word为前缀的字符串;2:有相关字符串
   */
  #find(word) {
    let node = this.children;
    for (const ch of word) {
      if (!node[ch]) return 0; // 查找失败，没有相关路径
      node = node[ch];
    }
    return node.isEnd ? 2 : 1; // 检查是否是结束节点
  }
  /**
   * @description 检查是否包含word字符串
   * @param {string} word
   * @returns {boolean}
   */
  search(word) {
    return this.#find(word) === 2;
  }
  /**
   * @description 检查是否有相关前缀字符串
   * @param {string} prefix 前缀字符串
   * @returns {boolean}
   */
  startsWith(prefix) {
    return this.#find(prefix) !== 0;
  }
}

// 另一种前缀树，通过26位数组保存
class Trie2 {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEnd = false;
  }
  insert(word) {
    let node = this;
    for (const ch of word) {
      const idx = ch.charCodeAt() - "a".charCodeAt();
      if (node.children[idx] === null) node.children[idx] = new Trie2();
      node = node.children[idx];
    }
    node.isEnd = true;
  }
  #find(word) {
    let node = this;
    for (const ch of word) {
      const idx = ch.charCodeAt() - "a".charCodeAt();
      if (node.children[idx] === null) return 0;
      node = node.children[idx];
    }
    return node.isEnd ? 2 : 1;
  }
  search(word) {
    return this.#find(word) === 2;
  }
  startsWith(prefix) {
    return this.#find(prefix) !== 0;
  }
  getChildren() {
    return this.children;
  }
}
module.exports = { Trie: Trie1 };

const trie = new Trie2();

// trie.insert("abcd");
// trie.insert("abdc");
// trie.insert("abce");
// trie.insert("acde");
// trie.insert("abdc");
// trie.insert("abbc");
// trie.insert("accd");
// trie.insert("acdc");
// trie.insert("acdb");
// trie.insert("abdc");
// console.log(trie.getChildren());
// console.table({
//   search: {
//     abcd: trie.search("abcd"),
//     acdb: trie.search("acdb"),
//     accb: trie.search("accb"),
//   },
//   startsWith: {
//     abc: trie.startsWith("abc"),
//     acd: trie.startsWith("acd"),
//     acc: trie.startsWith("acc"),
//   },
// });
