// 给你一个字符串 word ，你可以向其中任何位置插入 "a"、"b" 或 "c" 任意次，返回使 word 有效 需要插入的最少字母数。

// 如果字符串可以由 "abc" 串联多次得到，则认为该字符串 有效 。

/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  const n = word.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (word[i] === "a") {
      let cur = 2;
      if (word[i + 1] === "b") {
        cur--;
        if (word[i + 2] === "c") cur--;
      } else if (word[i + 1] === "c") cur--;
      ans += cur;
      i += 2 - cur;
    } else if (word[i] === "b") {
      let cur = 2;
      if (word[i + 1] === "c") cur--;
      ans += cur;
      i += 2 - cur;
    } else {
      ans += 2;
    }
  }
  return ans;
};

// baabbababbacbcbbcbabcbacbabcbabcaacbcbbccccabababc
// 2+ 2 + 1 + 2 +
