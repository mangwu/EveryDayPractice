// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const res = [];
  const numArr1 = num1
    .split("")
    .reverse()
    .map((v) => parseInt(v));
  const numArr2 = num2
    .split("")
    .reverse()
    .map((v) => parseInt(v));
  let add = 0;
  let i = 0;
  const len = Math.max(numArr1.length, numArr2.length);
  while (add || i < len) {
    const d1 = numArr1[i] || 0;
    const d2 = numArr2[i] || 0;
    const sum = d1 + d2 + add;
    add = Math.floor(sum / 10);
    res.push(sum % 10);
    i++;
  }
  return res.reverse().join("");
};
