// 给你一个字符串 s 和一个字符 letter ，返回在 s 中等于 letter 字符所占的 百分比 ，向下取整到最接近的百分比。

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  const n = s.length;
  let count = 0;
  for (const ch of s) {
    if (ch === letter) count++;
  }
  return Math.floor(count / n);
};
