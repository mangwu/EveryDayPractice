// 给你一个字符串 s 和两个整数 x 和 y 。你可以执行下面两种操作任意次。

// 删除子字符串 "ab" 并得到 x 分。
// 比方说，从 "cabxbae" 删除 ab ，得到 "cxbae" 。
// 删除子字符串"ba" 并得到 y 分。
// 比方说，从 "cabxbae" 删除 ba ，得到 "cabxe" 。
// 请返回对 s 字符串执行上面操作若干次能得到的最大得分。

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  // 删除ab或ba
  const stack = [];
  let ans = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const top = stack[stack.length - 1];
    if (s[i] === "a") {
      // 当前字符是"a"
      if (top && top === "b") {
        // 能够组成ba，且删除ba得分不弱于删除ab
        if (y >= x) {
          ans += y;
          stack.pop();
          continue;
        } else {
          // 检查s[i+1]是否是b，或者存在连续的ab
          let left = i + 1;
          let right = i + 2;
          while (right < n && s[left] + s[right] === "ab") {
            ans += x;
            right += 2;
            left += 2;
          }
          // 和当前s[i]可以组成ab
          if (s[left] === "b") {
            ans += x;
            i = left;
            continue;
          } else {
            // 与top组成ba
            ans += y;
            stack.pop();
            i = left - 1;
            continue;
          }
        }
      }
    } else if (s[i] === "b") {
      // 当前字符是"b"
      if (top && top === "a") {
        // 能够组成ab，且删除ab得分不弱于删除ba
        if (x >= y) {
          ans += x;
          stack.pop();
          continue;
        } else {
          // 检查s[i+1]是否是a，或者存在连续的ba
          let left = i + 1;
          let right = i + 2;
          while (right < n && s[left] + s[right] === "ba") {
            ans += x;
            right += 2;
            left += 2;
          }
          if (s[left] === "a") {
            ans += y;
            i = left;
            continue;
          } else {
            // 与top组成ab
            ans += x;
            stack.pop();
            i = left - 1;
            continue;
          }
        }
      }
    }
    stack.push(s[i]);
  }
  return ans;
};
// ab     ba
// x = 4, y = 5
// cdbcbbaaabab
const {
  recordInOutContent,
} = require("../../publicFunc/recordInOutContent/recordInOutContent");

const { randomArr, randomNum } = require("../../publicFunc/random/random");
// recordInOutContent(maximumGain, "abbababaabaabbabbbbbbbbbbaabaabba", 14, 10);
// 上述解答错误

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  // 删除ab或ba
  let ans = 0;
  if (x > y) {
    // 优先匹配ab
    const [res, str] = matchCh(s, x, "ab");
    ans = res + matchCh(str, y, "ba")[0];
  } else {
    // 优先匹配ba
    const [res, str] = matchCh(s, y, "ba");
    ans = res + matchCh(str, x, "ab")[0];
  }
  return ans;
};

// 匹配ab
/**
 * @description 进行字符匹配
 * @param {string} s
 * @param {number} score
 * @param {"ab" | "ba"} matchStr
 * @returns {[number, str]}
 */
function matchCh(s, score, matchStr = "ab") {
  const stack = [];
  let ans = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const top = stack[stack.length - 1];
    if (s[i] === matchStr[1] && top === matchStr[0]) {
      stack.pop();
      ans += score;
    } else stack.push(s[i]);
  }
  return [ans, stack.join("")];
}
recordInOutContent(maximumGain, "abbababaabaabbabbbbbbbbbbaabaabba", 14, 10);

for (let i = 0; i < 20; i++) {
  recordInOutContent(
    maximumGain,
    randomArr(randomNum(30, 80), "a".charCodeAt(), "a".charCodeAt() + 26)
      .map((v) =>
        String.fromCharCode(randomNum() ? "a".charCodeAt() + randomNum() : v)
      )
      .join(""),
    randomNum(1, 20),
    randomNum(1, 20)
  );
}
