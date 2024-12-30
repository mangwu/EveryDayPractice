// 给你一个字符串 word 和一个整数 numFriends。

// Alice 正在为她的 numFriends 位朋友组织一个游戏。游戏分为多个回合，在每一回合中：

// word 被分割成 numFriends 个 非空 字符串，且该分割方式与之前的任意回合所采用的都 不完全相同 。
// 所有分割出的字符串都会被放入一个盒子中。
// 在所有回合结束后，找出盒子中 字典序最大的 字符串。

// 字符串 a 的字典序 小于 字符串 b 的前提是：在两个字符串上第一处不同的位置上，a 的字母在字母表中的顺序早于 b 中对应的字母。
// 如果前 min(a.length, b.length) 个字符都相同，那么较短的字符串字典序更小。

/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function (word, numFriends) {
  const n = word.length;
  if (numFriends === 1) return word;
  // 求出范围子字符串的范围
  let min = 1;
  let max = 1 + (n - numFriends);
  // 找到word中排序靠后的字符然后比较
  let code = "a".charCodeAt();
  let strs = [];
  for (let i = 0; i < n; i++) {
    const curCode = word[i].charCodeAt();
    if (curCode > code) {
      code = curCode;
      strs = [word.slice(i, i + max)];
    } else if (curCode === code) {
      strs.push(word.slice(i, i + max));
    }
  }
  strs.sort((a, b) => {
    let i = 0;
    while (i < a.length || i < b.length) {
      if (a[i] !== b[i]) {
        if (!a[i]) return 1;
        if (!b[i]) return -1;
        const aCode = a[i].charCodeAt();
        const bCode = b[i].charCodeAt();
        return bCode - aCode;
      }
      i++;
    }
    return 0;
  });
  return strs[0];
};
