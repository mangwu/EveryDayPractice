// 给你一个下标从 0 开始的字符串 num ，表示一个非负整数。

// 在一次操作中，您可以选择 num 的任意一位数字并将其删除。请注意，如果你删除 num 中的所有数字，则 num 变为 0。

// 返回最少需要多少次操作可以使 num 变成特殊数字。

// 如果整数 x 能被 25 整除，则该整数 x 被认为是特殊数字。

/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function (num) {
  // 最后两位是25 50 75 00
  const n = num.length;
  let ans = n;
  let lastFive = num.lastIndexOf("5");
  if (lastFive !== -1 && lastFive !== 0) {
    let lastTwo = num.lastIndexOf("2", lastFive - 1);
    if (lastTwo !== -1) ans = Math.min(ans, n - lastTwo - 2);
    let lastSeven = num.lastIndexOf("7", lastFive - 1);
    if (lastSeven !== -1) ans = Math.min(ans, n - lastSeven - 2);
  }
  let lastZero = num.lastIndexOf("0");
  if (lastZero !== -1) {
    ans = Math.min(ans, n - 1); // 可以只留一个0
    if (lastZero !== 0) {
      let lastNextZero = num.lastIndexOf("0", lastZero - 1);
      if (lastNextZero !== -1) ans = Math.min(ans, n - lastNextZero - 2);
      let lastNextFive = num.lastIndexOf("5", lastZero - 1);
      if (lastNextFive !== -1) ans = Math.min(ans, n - lastNextFive - 2);
    }
  }
  return ans;
};

// 25 50 75 100
