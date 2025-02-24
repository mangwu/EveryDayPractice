// 给你一个字符串 s ，它仅包含字符 'a' 和 'b'​​​​ 。

// 你可以删除 s 中任意数目的字符，使得 s 平衡 。当不存在下标对 (i,j) 满足 i < j ，且 s[i] = 'b' 的同时 s[j]= 'a' ，此时认为 s 是 平衡 的。

// 请你返回使 s 平衡 的 最少 删除次数。

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  // b全部在a的后面
  let leftA = 0;
  let leftB = 0;
  let rightA = 0;
  let rightB = 0;
  for (const ch of s) {
    if (ch === "a") rightA++;
    else rightB++;
  }
  let res = rightA;
  for (const ch of s) {
    if (ch === "a") {
      leftA++;
      rightA--;
    } else if (ch === "b") {
      leftB++;
      rightB--;
    }
    res = Math.min(res, leftB + rightA);
  }
  return res;
};
