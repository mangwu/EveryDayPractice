// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const data = new Array(numRows).fill(0).map(() => new Array(0));
  let i = 0;
  let sI = 0;
  const n = s.length;
  while (sI < n) {
    // 竖直向下
    while (sI < n && i < numRows) data[i++].push(s[sI++]);
    i -= 2;
    // 斜向 numRows -2
    while (sI < n && i > 0) data[i--].push(s[sI++]);
  }
  return data.reduce((pre, cur) => pre + cur.join(""), "");
};
