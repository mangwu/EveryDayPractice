// 给你一个产品数组 products 和一个字符串 searchWord ，products  数组中每个产品都是一个字符串。

// 请你设计一个推荐系统，在依次输入单词 searchWord 的每一个字母后，推荐 products 数组中前缀与 searchWord 相同的最多三个产品。如果前缀相同的可推荐产品超过三个，请按字典序返回最小的三个。

// 请你以二维列表的形式，返回在输入 searchWord 每个字母后相应的推荐产品的列表。

class Trie {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEnd = false;
  }
  insert(word) {
    let node = this;
    for (const ch of word) {
      const code = ch.charCodeAt() - "a".charCodeAt();
      if (node.children[code] === null) node.children[code] = new Trie();
      node = node.children[code];
    }
    node.isEnd = true;
  }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const trie = new Trie();
  for (const product of products) trie.insert(product);
  const n = searchWord.length;
  const res = new Array(n).fill(0).map(() => new Array(0).fill(0));
  let node = trie;
  for (let i = 0; i < n; i++) {
    const ch = searchWord[i];
    const code = ch.charCodeAt() - "a".charCodeAt();
    if (node.children[code] === null) break;
    node = node.children[code];
    res[i].push(node);
  }
  return res.map((item, index) =>
    item.length
      ? getStrByNode(item[0]).map((str) => searchWord.slice(0, index + 1) + str)
      : []
  );
};

/**
 * @description
 * @param {Trie} node
 * @returns {string[]}
 */
function getStrByNode(node) {
  const res = [];
  let path = [];
  const dfs = (node) => {
    if (!node) return;
    if (res.length === 3) return;
    if (node.isEnd) res.push(path.join(""));
    for (let i = 0; i < 26; i++) {
      if (node.children[i]) {
        const ch = String.fromCharCode("a".charCodeAt() + i);
        path.push(ch);
        dfs(node.children[i]);
        path.pop();
      }
    }
  };
  dfs(node);
  return res;
}

// 上述的方法使用dfs搜索，实际上在插入时就可以记录每个字符串前缀包含的三个product字符串了，如下
class Trie {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEnd = false;
    this.suggests = [];
  }
  insert(word) {
    let node = this;
    for (const ch of word) {
      const code = ch.charCodeAt() - "a".charCodeAt();
      if (node.children[code] === null) node.children[code] = new Trie();
      node = node.children[code];
      if (node.suggests.length < 3) {
        node.suggests.push(word);
      }
    }
    node.isEnd = true;
  }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const trie = new Trie();
  products.sort(); // 为了保证字典树中的节点保存的建议按顺序排列
  for (const product of products) trie.insert(product);
  const n = searchWord.length;
  const res = new Array(n).fill(0).map(() => new Array(0).fill(0));
  let node = trie;
  for (let i = 0; i < n; i++) {
    const ch = searchWord[i];
    const code = ch.charCodeAt() - "a".charCodeAt();
    if (node.children[code] === null) break;
    node = node.children[code];
    res[i].push(...node.suggests);
  }
  return res;
};
