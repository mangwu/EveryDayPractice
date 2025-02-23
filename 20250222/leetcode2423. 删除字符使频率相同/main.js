// 给你一个下标从 0 开始的字符串 word ，字符串只包含小写英文字母。你需要选择 一个 下标并 删除 下标处的字符，使得 word 中剩余每个字母出现 频率 相同。

// 如果删除一个字母后，word 中剩余所有字母的出现频率都相同，那么返回 true ，否则返回 false 。

// 注意：

// 字母 x 的 频率 是这个字母在字符串中出现的次数。
// 你 必须 恰好删除一个字母，不能一个字母都不删除。

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const hash = new Map();
  // 有一个是1，其他相同，删除那个1
  // 只有一个是x+1,其他都是x，删除多的那一个
  // 只有一种字符
  for (const ch of word) hash.set(ch, (hash.get(ch) || 0) + 1);
  const size = hash.size;
  if (size === 1) return true;
  const arr = [...hash].map((v) => v[1]).sort((a, b) => a - b);
  let res = false;
  if (arr[0] === 1) res = isSame(arr, 1, size - 1, arr[1]);
  return res || isSame(arr, 0, size - 2, arr[size - 1] - 1);
};
const isSame = (arr, start, end, num) => {
  for (let i = start; i <= end; i++) {
    if (arr[i] !== num) return false;
  }
  return true;
};
