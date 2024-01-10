// 给你一个仅由 大写 英文字符组成的字符串 s 。

// 你可以对此字符串执行一些操作，在每一步操作中，你可以从 s 中删除 任一个 "AB" 或 "CD" 子字符串。

// 通过执行操作，删除所有 "AB" 和 "CD" 子串，返回可获得的最终字符串的 最小 可能长度。

// 注意，删除子串后，重新连接出的字符串可能会产生新的 "AB" 或 "CD" 子串。

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  let arr = s.split("");
  const hasABCD = () => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === "A" && arr[i + 1] === "B") return true;
      if (arr[i] === "C" && arr[i + 1] === "D") return true;
    }
    return false;
  };
  while (hasABCD()) {
    const nxtArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "A" && arr[i + 1] === "B") {
        i++;
        continue;
      }
      if (arr[i] === "C" && arr[i + 1] === "D") {
        i++;
        continue;
      }
      nxtArr.push(arr[i]);
    }
    arr = nxtArr;
  }
  return arr.length;
};

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  let arrStack = [];
  for (const ch of s) {
    if (
      ch === "B" &&
      arrStack.length &&
      arrStack[arrStack.length - 1] === "A"
    ) {
      arrStack.pop();
      continue;
    }
    if (
      ch === "D" &&
      arrStack.length &&
      arrStack[arrStack.length - 1] === "C"
    ) {
      arrStack.pop();
      continue;
    }
    arrStack.push(ch);
  }
  return arrStack.length;
};
