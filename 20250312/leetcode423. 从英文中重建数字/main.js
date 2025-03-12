// 给你一个字符串 s ，其中包含字母顺序打乱的用英文单词表示的若干数字（0-9）。按 升序 返回原始的数字。

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const cnts = new Map();
  for (const ch of s) cnts.set(ch, (cnts.get(ch) || 0) + 1);
  const isBigger = (cnts1, cnts2) => {
    for (const [key, value] of cnts2) {
      if (!cnts1.has(key) || cnts1.get(key) < value) return false;
    }
    return true;
  };
  let res = [];
  for (let i = 0; i < 10; i++) {
    const curCnts = new Map();
    for (const ch of arr[i]) {
      curCnts.set(ch, (curCnts.get(ch) || 0) + 1);
    }
    // 未考虑多种情况，应该使用回缩
    while (isBigger(cnts, curCnts)) {
      for (const [key, value] of curCnts) {
        cnts.set(key, cnts.get(key) - value);
      }
      res.push(i);
    }
  }
  return res.join("");
};
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ].map((v) => {
    const curCnts = new Map();
    for (const ch of v) {
      curCnts.set(ch, (curCnts.get(ch) || 0) + 1);
    }
    return curCnts;
  });

  const cnts = new Map();
  for (const ch of s) cnts.set(ch, (cnts.get(ch) || 0) + 1);
  const isBigger = (cnts1, cnts2) => {
    for (const [key, value] of cnts2) {
      if (!cnts1.has(key) || cnts1.get(key) < value) return false;
    }
    return true;
  };
  const addCnts = (cnts1, cnts2) => {
    for (const [key, value] of cnts2) {
      cnts1.set(key, (cnts1.get(key) || 0) + value);
    }
  };
  const deleteCnts = (cnts1, cnts2) => {
    for (const [key, value] of cnts2) {
      cnts1.set(key, cnts1.get(key) - value);
      if (cnts1.get(key) === 0) cnts1.delete(key);
    }
  };
  let res = [];
  const memo = new Map();
  const dfs = (i) => {
    if (i === 10) {
      if (cnts.size === 0) {
        return res.join("");
      }
      return "";
    }
    const key = [...cnts].sort();
    if (memo.has(key)) return memo.get(key);
    let curRes = "";
    if (isBigger(cnts, arr[i])) {
      deleteCnts(cnts, arr[i]);
      res.push(i);
      curRes = curRes || dfs(i);
      res.pop();
      addCnts(cnts, arr[i]);
    }
    // 不选择当前值
    curRes = curRes || dfs(i + 1);
    memo.set(key, curRes);
    return curRes;
  };
  return dfs(0);
};

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  // 上述解法超时
  const cnts = new Map();
  for (const ch of s) cnts.set(ch, (cnts.get(ch) || 0) + 1);
  // 每个字母对应的数字：
  // e: 0 1 3 5 7 8 9
  // f: 4 5
  // g: 8
  // h: 3 8
  // i: 5 6 8 9
  // n: 1 7 9
  // o: 0 1 2 4
  // r: 0 3 4
  // s: 6 7
  // t: 2 3 8
  // u: 4
  // v: 5 7
  // w: 2
  // x: 6
  // z: 0
  // 先确定0,2,4,6,8的个数
  const arr = new Array(10).fill(0);
  arr[0] = cnts.get("z") || 0;
  arr[2] = cnts.get("w") || 0;
  arr[4] = cnts.get("u") || 0;
  arr[6] = cnts.get("x") || 0;
  arr[8] = cnts.get("g") || 0;
  // 通过已知信息，可以确定3 5 7 9的个数
  arr[3] = (cnts.get("r") || 0) - arr[0] - arr[4];
  arr[5] = (cnts.get("f") || 0) - arr[4];
  arr[7] = (cnts.get("s") || 0) - arr[6];
  arr[9] = (cnts.get("i") || 0) - arr[5] - arr[6] - arr[8];
  // 最后确定1的个数
  arr[1] = (cnts.get("o") || 0) - arr[0] - arr[2] - arr[4];
  return arr.map((v, i) => i.toString().repeat(v)).join("");
};
