// 子串匹配
// 给你一个字符串s和一个字符串p，请问最少去掉s中的多少个字符，才能使得p是s的子串呢？
// 解答要求时间限制：1000ms, 内存限制：100MB
// 输入
// 两行，第一行为字符串s，第二行为字符串p。(s和p只包含小写英文字母,s的长度不超过2000,p的长度不超过10,且保证有解）
// 输出
// 最少去掉的字符个数。
// 样例
// 输入样例 1 复制
// axb
// ab
// 输出样例 1
// 1
// 提示样例 1

// 提示
// 只要枚举最终匹配的子串是从s中的哪个字符开始的就好了，并记录最小值。

/**
 * @description
 * @param {string} s
 * @param {string} p
 * @returns {number}
 */
function solution(s, p) {
  const m = s.length;
  const n = p.length;
  let res = m;
  for (let i = 0; i < m; i++) {
    // 从i开始匹配
    let j = i;
    let flag = true; // 是否匹配成功
    for (let k = 0; k < n; k++) {
      while (j < m && s[j] !== p[k]) j++;
      if (s[j] === p[k]) {
        j++;
        continue;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      // 匹配成功
      // [i, j]
      const len = j - i;
      res = Math.min(res, len - n);
    }
  }
  return res;
}
console.log(solution("axxbaxbss", "ab"));
console.log(solution("aaa", "aa"));
