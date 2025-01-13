// 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words， 返回所有二维网格上的单词 。

// 单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

class Trie {
  constructor() {
    this.children = {};
  }
  search(word) {
    let node = this.children;
    for (const ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return true;
  }
}

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const m = board.length;
  const n = board[0].length;
  const trie = new Trie();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const visited = new Array(m)
        .fill(false)
        .map((v) => new Array(n).fill(false));
      visited[i][j] = true;
      dfs(trie.children, board, [i, j], visited);
    }
  }
  const res = [];
  for (const word of words) {
    if (trie.search(word)) res.push(word);
  }
  return res;
};

function dfs(trie, board, point, visited) {
  const m = board.length;
  const n = board[0].length;
  const [x, y] = point;
  const ch = board[x][y];
  let node = trie;
  if (!node[ch]) node[ch] = {};
  node = node[ch];
  for (const dir of DIRS) {
    const i = x + dir[0];
    const j = y + dir[1];
    if (i >= 0 && i < m && j >= 0 && j < n && !visited[i][j]) {
      visited[i][j] = true;
      dfs(node, board, [i, j], visited);
      visited[i][j] = false;
    }
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const m = board.length;
  const n = board[0].length;
  const DIRS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const res = [];
  const hash = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      hash.has(board[i][j])
        ? hash.get(board[i][j]).push([i, j])
        : hash.set(board[i][j], [[i, j]]);
    }
  }
  const dfs = (i, word, cur, visited) => {
    const [x, y] = cur;
    const ch = board[x][y];
    if (i === word.length - 1) return word[i] === ch;
    if (word[i] !== ch) return false;
    let res = false;
    for (const dir of DIRS) {
      const nx = x + dir[0];
      const ny = y + dir[1];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
        visited[nx][ny] = true;
        res = res || dfs(i + 1, word, [nx, ny], visited);
        visited[nx][ny] = false;
        if (res) return res;
      }
    }
    return res;
  };
  for (const word of words) {
    const starts = hash.get(word[0]) || [];
    if (
      starts.some((start) => {
        const visited = new Array(m)
          .fill(false)
          .map((v) => new Array(n).fill(false));
        visited[start[0]][start[1]] = true;
        return dfs(0, word, start, visited);
      })
    ) {
      res.push(word);
    }
  }
  console.log(res);
  return res;
};

findWords(
  [
    ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"],
    ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"],
    ["o", "b", "d", "e", "v", "s", "h", "i", "j", "d", "l", "z"],
    ["p", "b", "d", "v", "l", "x", "h", "i", "z", "a", "l", "a"],
    ["s", "b", "d", "v", "l", "x", "h", "i", "z", "a", "l", "a"],
    ["c", "b", "d", "v", "l", "x", "h", "i", "z", "a", "l", "a"],
    ["x", "b", "d", "v", "l", "x", "h", "i", "z", "a", "l", "a"],
    ["v", "b", "d", "v", "l", "x", "h", "i", "z", "a", "l", "a"],
    ["b", "b", "d", "v", "l", "x", "h", "i", "z", "a", "l", "a"],
    ["n", "b", "d", "v", "l", "x", "h", "i", "z", "a", "l", "a"],
    ["m", "b", "d", "v", "l", "x", "h", "i", "z", "a", "l", "a"],
    ["p", "b", "d", "v", "l", "x", "h", "i", "z", "a", "l", "a"],
  ],
  [
    "abcd",
    "acd",
    "ad",
    "ascg",
    "egv",
    "asvd",
    "lllll",
    "ascc",
    "lloo",
    "xhizalaaalazih",
  ]
);
