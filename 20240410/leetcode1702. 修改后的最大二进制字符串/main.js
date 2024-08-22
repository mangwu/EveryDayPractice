// 给你一个二进制字符串 binary ，它仅有 0 或者 1 组成。你可以使用下面的操作任意次对它进行修改：

// 操作 1 ：如果二进制串包含子字符串 "00" ，你可以用 "10" 将其替换。
// 比方说， "00010" -> "10010"
// 操作 2 ：如果二进制串包含子字符串 "10" ，你可以用 "01" 将其替换。
// 比方说， "00010" -> "00001"
// 请你返回执行上述操作任意次以后能得到的 最大二进制字符串 。如果二进制字符串 x 对应的十进制数字大于二进制字符串 y 对应的十进制数字，那么我们称二进制字符串 x 大于二进制字符串 y 。

/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function (binary) {
  // 11011001011
  // 可以通过将10转换为01把字符串中的0往前移动
  let firstZero = -1;
  const n = binary.length;
  let zeroNums = 0;
  for (let i = 0; i < n; i++) {
    if (binary[i] === "0") {
      zeroNums++;
      if (firstZero === -1) firstZero = i;
    }
  }
  if (zeroNums === 0) return binary;
  return (
    "1".repeat(firstZero + zeroNums - 1) +
    "0" +
    "1".repeat(n - firstZero - zeroNums)
  );
};
