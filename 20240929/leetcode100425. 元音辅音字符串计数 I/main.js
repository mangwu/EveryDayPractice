// 给你一个字符串 word 和一个 非负 整数 k。

// 返回 word 的 子字符串 中，每个元音字母（'a'、'e'、'i'、'o'、'u'）至少 出现一次，并且 恰好 包含 k 个辅音字母的子字符串的总数。

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  // 滑动窗口
  const n = word.length;
  const vows = new Set(["a", "e", "i", "o", "u"]);
  let curCon = 0; // 当前辅音字母数量
  const curVow = new Map(); // 记录aeiou的数量
  let left = 0;
  let res = 0;
  while (right < n) {
    // 先找到包含全部元音字母的字符串
    while (curVow.size < 5 && right < n) {
      if (vows.has(word[right])) {
        curVow.set(word[right], (curVow.get(word[right]) | 0) + 1);
      } else curCon++;
      right++;
    }
    if (curVow.size < 5) return res; // 遍历完后没有全部的元音字母
    // 判断此时辅音字母的数量
    if (curCon < k) {
      // 需要继续向右遍历，
    }
  }
};

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  const n = word.length;
  const vows = new Set(["a", "e", "i", "o", "u"]);
  // 长度至少是k+5
  let curCon = 0; // 当前辅音字母数量
  const curVow = new Map(); // 记录aeiou的数量
  let right = 0;
  let res = 0;
  while (right < n && curVow.size < 5) {
    if (vows.has(word[right])) {
      curVow.set(word[right], (curVow.get(word[right]) | 0) + 1);
    } else curCon++;
    right++;
  }
  let left = 0;
  let preRight = right;
  while (left < n) {
    // 先判断以left开头的最短子字符串是否包含所有元音
    if (curVow.size < 5) return res;
    console.log(curVow);
    console.log("left", left);
    console.log("right", right);
    console.log("curCon", curCon);
    console.log("res", res);
    if (curCon === k) {
      // 当前辅音数量等于k
      res++;
      // 右移right，后面是元音就增加子字符串个数
      while (right < n && vows.has(word[right])) {
        curVow.set(word[right], (curVow.get(word[right]) | 0) + 1);
        res++;
        right++;
      }
      // 将当前left的字符减去
      if (vows.has(word[left])) {
        // 当前left是元音
        const num = curVow.get(word[left]);
        if (num === 1) {
          curVow.delete(word[left]);
          // 继续遍历，找到下一个包含所有元音的子字符串
          while (right < n && curVow.size < 5) {
            if (vows.has(word[right])) {
              curVow.set(word[right], (curVow.get(word[right]) | 0) + 1);
            } else curCon++;
            right++;
          }
          preRight = right;
        } else {
          curVow.set(word[left], num - 1);
          // 回滚，找到以left+1开头的最短包含所有元音的子字符串
          right--;
          while (right >= preRight - 1 && curVow.size === 5) {
            if (vows.has(word[right])) {
              const num = curVow.get(word[right]);
              if (num === 1) {
                right++;
                break;
              } else curVow.set(word[right], num - 1);
            } else curCon--;
            right--;
          }
          preRight = right;
        }
      } else {
        curCon--;
        preRight = right;
      }
      left++;
    } else if (curCon < k) {
      // 辅音数量过少，需要增加到k
      while (right < n && curCon < k) {
        if (vows.has(word[right])) {
          curVow.set(word[right], (curVow.get(word[right]) | 0) + 1);
        } else curCon++;
        right++;
      }
      if (curCon < k) return res; // 无法增加到k直接返回
      preRight = right;
    } else if (curCon > k) {
      // 辅音数量过多，需要减少到k
      while (left < right && curCon > k) {
        if (curVow.has(word[left])) {
          const num = curVow.get(word[left]);
          if (num === 1) {
            curVow.delete(word[left]);
          } else {
            curVow.set(word[left], num - 1);
          }
        } else curCon--;
        left++;
      }
      while (right < n && curVow.size < 5) {
        if (vows.has(word[right])) {
          curVow.set(word[right], (curVow.get(word[right]) | 0) + 1);
        } else curCon++;
        right++;
      }
      preRight = right;
    }
  }
  return res;
};

// ieaouqqieaouqq
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  const n = word.length;
  const vows = new Set(["a", "e", "i", "o", "u"]);
  // 长度至少是k+5
  let curCon = 0; // 当前辅音字母数量
  const curVow = new Map(); // 记录aeiou的数量
  let right = 0;
  let left = 0;
  let res = 0;
  const help = () => {
    while (right < n) {
      if (vows.has(word[right])) {
        curVow.set(word[right], (curVow.get(word[right]) | 0) + 1);
      } else curCon++;
      right++;
      if (curCon > k) {
        // 减去开头字符
        while (left < right && curCon > k) {
          const ch = word[left];
          if (vows.has(ch)) {
            curVow.set(ch, (curVow.get(ch) | 0) - 1);
            if (curVow.get(ch) === 0) curVow.delete(ch);
          } else curCon--;
          left++;
        }
      }
      if (curCon === k && curVow.size === 5) {
        res++;
        break;
      }
    }
  };
  help();
  while (left < n) {
    if (curCon !== k || curVow.size !== 5) break;
    // console.log(word.substring(left, right), curVow);
    let i = right;
    while (i < n && vows.has(word[i])) {
      res++;
      i++;
    }
    // console.log("res", res);
    const ch = word[left];
    left++;
    if (vows.has(ch)) {
      const num = curVow.get(ch);
      if (num === 1) {
        curVow.delete(ch);
        help();
      } else {
        res++;
        curVow.set(ch, num - 1);
      }
    } else {
      curCon--;
      help();
    }
  }
  return res;
};
console.log(countOfSubstrings("ouiaoe", 0));
