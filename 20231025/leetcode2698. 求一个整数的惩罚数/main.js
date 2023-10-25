// 给你一个正整数 n ，请你返回 n 的 惩罚数 。

// n 的 惩罚数 定义为所有满足以下条件 i 的数的平方和：

// 1 <= i <= n
// i * i 的十进制表示的字符串可以分割成若干连续子字符串，且这些子字符串对应的整数值之和等于 i 。

const PUNISHMENT_NUMBER = [];

// 遍历1-1000，找出其中的惩罚数

function getPunishmentNumbers() {
  for (let i = 1; i <= 1000; i++) {
    if (isPunishmentNumber(i)) PUNISHMENT_NUMBER.push(i);
  }
}

/**
 * @description 判断num是否是惩罚数
 * @param {number} num
 * @returns {boolean}
 */
function isPunishmentNumber(num) {
  const productStr = (num * num).toString();
  const n = productStr.length;
  //
  const dfs = (i, preSum, preNumStr) => {
    if (preSum > num) return false;
    if (i === n) {
      if (preNumStr) {
        preSum += parseInt(preNumStr);
      }
      return preSum === num;
    }
    preNumStr = preNumStr + productStr[i];
    // 选择当前num或不选择当前num
    return (
      dfs(i + 1, preSum + parseInt(preNumStr), "") ||
      dfs(i + 1, preSum, preNumStr)
    );
  };
  return dfs(0, 0, "");
}
getPunishmentNumbers();
console.log(PUNISHMENT_NUMBER);

/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let ans = 0;
  for (const item of PUNISHMENT_NUMBER) {
    if (n >= item) {
      ans += item * item;
    } else break;
  }
  return ans;
};
