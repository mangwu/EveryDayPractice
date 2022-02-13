// 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。

// 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  // 用hash表记录b a l o n的数目，取最小值
  // 当然，对于l和o，除以2后对比取最小值
  const hash = new Map([
    ["b", 0],
    ["a", 0],
    ["l", 0],
    ["o", 0],
    ["n", 0],
  ]);
  let ans = Number.MAX_VALUE;
  for (const ch of text) {
    if (hash.has(ch)) {
      hash.set(ch, hash.get(ch) + 1);
    }
  }
  // 遍历hash
  for (let [key, value] of hash) {
    if (key === "l" || key === "o") {
      value = Math.floor(value / 2);
    }
    ans = Math.min(value, ans);
  }
  return ans;
};

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  // 使用数组进行保存
  const arr = new Array(5).fill(0);
  // 变量字符串
  for (const ch of text) {
    if (ch == "b") {
      arr[0] += 1;
      continue;
    }
    if (ch == "a") {
      arr[1] += 1;
      continue;
    }
    if (ch == "l") {
      arr[2] += 1;
      continue;
    }
    if (ch == "o") {
      arr[3] += 1;
      continue;
    }
    if (ch == "n") {
      arr[4] += 1;
    }
  }
  // l和o字符减半
  arr[2] = Math.floor(arr[2] / 2);
  arr[3] = Math.floor(arr[3] / 2);
  return Math.min.apply(null, arr);
};
