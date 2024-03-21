// 你正在参与祖玛游戏的一个变种。

// 在这个祖玛游戏变体中，桌面上有 一排 彩球，每个球的颜色可能是：红色 'R'、黄色 'Y'、蓝色 'B'、绿色 'G' 或白色 'W' 。你的手中也有一些彩球。

// 你的目标是 清空 桌面上所有的球。每一回合：

// 从你手上的彩球中选出 任意一颗 ，然后将其插入桌面上那一排球中：两球之间或这一排球的任一端。
// 接着，如果有出现 三个或者三个以上 且 颜色相同 的球相连的话，就把它们移除掉。
// 如果这种移除操作同样导致出现三个或者三个以上且颜色相同的球相连，则可以继续移除这些球，直到不再满足移除条件。
// 如果桌面上所有球都被移除，则认为你赢得本场游戏。
// 重复这个过程，直到你赢了游戏或者手中没有更多的球。
// 给你一个字符串 board ，表示桌面上最开始的那排球。另给你一个字符串 hand ，表示手里的彩球。请你按上述操作步骤移除掉桌上所有球，计算并返回所需的 最少 球数。如果不能移除桌上所有的球，返回 -1 。

// /**
//  * @param {string} board
//  * @param {string} hand
//  * @return {number}
//  */
// var findMinStep = function (board, hand) {
//   const hash = new Map();
//   for (const ch of hand) {
//     hash.set(ch, (hash.get(ch) | 0) + 1);
//   }
//   // 完成board消除需要的最小次数
//   const dfs = (str) => {
//     const m = str.length;
//     if (!m) return 0;
//     // 选择连续的两个或单个进行合并消除
//     let res = Infinity;
//     for (let i = 0; i < m; i++) {
//       // 消除str[i]
//       if (str[i + 1] === str[i] && hash.has(str[i])) {
//         // 可以进行消除
//         const iNum = hash.get(str[i]);
//         iNum === 1 ? hash.delete(str[i]) : hash.set(str[i], iNum - 1);
//         // 消除后可能的连锁消除
//         for (const nextStr of autoRemove(str, i - 1, i + 2)) {
//           res = Math.min(res, dfs(nextStr) + 1);
//         }
//         // 记忆化搜索
//         hash.set(str[i], iNum);
//       } else if (hash.has(str[i]) && hash.get(str[i]) >= 2) {
//         // 可以进行消除
//         const iNum = hash.get(str[i]);
//         iNum === 2 ? hash.delete(str[i]) : hash.set(str[i], iNum - 2);
//         // 消除后可能的连锁消除
//         for (const nextStr of autoRemove(str, i - 1, i + 1)) {
//           res = Math.min(res, dfs(nextStr) + 2);
//         }
//         // 记忆化搜索
//         hash.set(str[i], iNum);
//       }
//     }
//     return res;
//   };
//   const ans = dfs(board);
//   return ans === Infinity ? -1 : ans;
// };
// // 上面的这个方法没有考虑到预先插入彩球以预判合并的时候
// /**
//  * @description 自动消除
//  * @param {string} str
//  * @param {number} left
//  * @param {number} right
//  * @returns {string[]}
//  */
// function autoRemove(str, left, right) {
//   const m = str.length;
//   const ans = [];
//   if (left >= 0 && right < m && str[left] === str[right]) {
//     let sameWord = str[left];
//     let sameNum = 2;
//     left--;
//     right++;
//     while (true) {
//       while (left >= 0 && str[left] === sameWord) {
//         sameNum++;
//         left--;
//       }
//       while (right < m && str[right] === sameWord) {
//         sameNum++;
//         right++;
//       }
//       if (sameNum >= 3) {
//         // 可以消除，判断下一个连锁
//         if (left >= 0 && right < m && str[left] === str[right]) {
//           sameWord = str[left];
//           sameNum = 2;
//           left--;
//           right++;
//         } else break;
//       } else {
//         // 不可以消除，直接退出循环
//         left++;
//         right--;
//         break;
//       }
//     }
//   }
//   ans.push(str.slice(0, left + 1) + str.slice(right));
//   return ans;
// }

// RRWWRRBBRR  WB
// 这种情况是需要用一个B提前隔离一个连续的R，
// "RRWWRRBBRR" "WB" "R[B]RWWRRBBRR" "W" "RBRW[W]WRRBBRR" -> RBR{WWW}RRBBRR -> RB{RRR}BBRR -> R{BBB}RR -> RRR ->""

// RRYGGYYRRYYGGYRR
// GGBBB
// "RRYGGYYRRYYGGYRR" => "RRYGGYYR[B]RYYGGYRR" => +G "[B]RYYGGYRR" => +G "[B]" => "[BB]" => ""

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
  const map = new Map();
  for (const ch of hand) {
    map.set(ch, (map.get(ch) | 0) + 1);
  }
  const keys = [...map.keys()];
  // 5种球，每种球最多有5种使用次数
  // 完成board消除需要的最小次数
  const cache = new Set(); // 记录当前搜索过的结果，并减枝
  let ans = Infinity;
  const dfs = (str, count) => {
    const m = str.length;
    if (!m) {
      ans = Math.min(ans, count);
      return;
    }
    if (cache.has(str + count)) return;
    let preStr = "";
    cache.add(str + count);
    for (let i = 0; i <= m; i++) {
      // 在str[i]前插入一个彩珠
      for (const key of keys) {
        if (map.has(key)) {
          // 插入key
          const iNum = map.get(key);
          iNum === 1 ? map.delete(key) : map.set(key, iNum - 1);
          dfs(autoRemove(preStr + key + str.substring(i)), count + 1);
          map.set(key, iNum);
        }
      }
      preStr += str[i];
    }
  };
  dfs(board, 0);
  return ans === Infinity ? -1 : ans;
};
/**
 * @description 自动消除
 * @param {string} str
 * @returns {string}
 */
function autoRemove(str) {
  // 快慢指针
  for (let slow = (fast = 0); fast <= str.length; fast++) {
    if (str[fast] === str[slow]) continue; // 相同字符串
    // 不同字符串，判断二者之差
    if (fast - slow > 2) {
      // 消除超过3个的连续字符
      str = str.substring(0, slow) + str.substring(fast);
      fast = 0;
    }
    slow = fast;
  }
  return str;
}

// RYYRRYYR YYYYY
const RICES = ["R", "Y", "B", "G", "W"];
const random = require("../../publicFunc/random/random.js");

// RYYRRYYR => RYYR[Y]RYYR => RR[Y]RYYR => RR[Y]RR => RR[YY]RR => ""
// findMinStep("RYYRRYYR", "YYYYY");
