// 给你一个下标从 0 开始的字符串数组 words 。

// 定义一个 布尔 函数 isPrefixAndSuffix ，它接受两个字符串参数 str1 和 str2 ：

// 当 str1 同时是 str2 的前缀（prefix）和后缀（suffix）时，isPrefixAndSuffix(str1, str2) 返回 true，否则返回 false。
// 例如，isPrefixAndSuffix("aba", "ababa") 返回 true，因为 "aba" 既是 "ababa" 的前缀，也是 "ababa" 的后缀，但是 isPrefixAndSuffix("abc", "abcd") 返回 false。

// 以整数形式，返回满足 i < j 且 isPrefixAndSuffix(words[i], words[j]) 为 true 的下标对 (i, j) 的 数量 。

/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  // 统计所有前后缀
  const preffix = new Map();
  const suffix = new Map();
  for (const word of words) {
    let preCur = "";
    let suCur = "";
    for (let i = 0; i < word.length; i++) {
      preCur += word[i];
      suCur = word[word.length - i - 1] + suCur;
      preffix.set(preCur, (preffix.get(preCur) | 0) + 1);
      suffix.set(suCur, (suffix.get(suCur) | 0) + 1);
    }
  }
  let ans = 0;
  for (const word of words) {
    const pre = preffix.get(word) - 1;
    const su = suffix.get(word) - 1;
    ans += Math.min(pre, su);
  }
  return ans;
};

// ["a","aba","ababa","aa", ""]

// 前缀
// a : 4
// aa : 1
// ab : 2
// aba : 2
// abab: 1
// ababa : 1

// 后缀
// a : 4
// aa : 1
// ba: 2
// aba: 2
// baba: 1
// ababa: 1

// a: 4 - 1
// aba : 2 - 1
// ababa : 1 - 1
// aa : 1 - 1



// ["a","aba","bbaba","aa"]

// 前缀
// a : 3
// aa : 1
// ab : 2
// aba : 2
// abab: 1
// ababa : 1

// 后缀
// a : 4
// aa : 1
// ba: 2
// aba: 2
// baba: 1
// ababa: 1

// a: 4 - 1
// aba : 2 - 1
// ababa : 1 - 1
// aa : 1 - 1