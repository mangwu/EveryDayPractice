// 你正在参与祖玛游戏的一个变种。

// 在这个祖玛游戏变体中，桌面上有 一排 彩球，每个球的颜色可能是：
// 红色 'R'、黄色 'Y'、蓝色 'B'、绿色 'G' 或白色 'W' 。你的手中也有一些彩球。

// 你的目标是 清空 桌面上所有的球。每一回合：

// 从你手上的彩球中选出 任意一颗 ，然后将其插入桌面上那一排球中：两球之间或这一排球的任一端。
// 接着，如果有出现 三个或者三个以上 且 颜色相同 的球相连的话，就把它们移除掉。
// 如果这种移除操作同样导致出现三个或者三个以上且颜色相同的球相连，则可以继续移除这些球，直到不再满足移除条件。
// 如果桌面上所有球都被移除，则认为你赢得本场游戏。
// 重复这个过程，直到你赢了游戏或者手中没有更多的球。
// 给你一个字符串 board ，表示桌面上最开始的那排球。另给你一个字符串 hand ，表示手里的彩球。请你按上述操作步骤移除掉桌上所有球，计算并返回所需的 最少 球数。如果不能移除桌上所有的球，返回 -1 。

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
  const handLen = hand.length;
  let res = Infinity;
  const set = new Set();
  hand = hand.split("").sort().join(""); // 将相同的连续排列，用于减枝
  const dfs = (curBoard, curHand) => {
    const m = curBoard.length;
    const n = curHand.length;
    const visitedStr = curBoard + "-" + curHand;
    // 减枝操作1
    if (set.has(visitedStr)) return;
    set.add(visitedStr);
    // 减枝操作2
    if (handLen - n >= res) return;
    if (!m) {
      // 已经全部移除
      res = Math.min(res, handLen - n);
      return;
    }
    for (let j = 0; j < n; j++) {
      // 减枝条件一：手中相同的球只需要考虑一次
      if (j > 0 && curHand[j] === curHand[j - 1]) continue;
      const nextHand = curHand.substring(0, j) + curHand.substring(j + 1);
      // 加入curHand[j]到curBoard[i]前面
      for (let i = 0; i <= m; i++) {
        // 减枝条件二：手中球和上一个球的颜色一样只用插入开头即可
        if (i > 0 && curBoard[i - 1] === curHand[j]) continue;
        // 减枝条件三：只在适合的位置插入球
        let choose = false;
        // 情况一：当前选择球与后面的球颜色相同
        if (curHand[j] === curBoard[i]) choose = true;
        // 情况二：当前后颜色球相同且与当前球颜色不同
        if (curBoard[i - 1] === curBoard[i] && curHand[j] !== curBoard[i])
          choose = true;
        if (choose) {
          const nextBoard = processZumaSeries(
            curBoard.slice(0, i) + curHand[j] + curBoard.slice(i)
          );
          dfs(nextBoard, nextHand);
        }
      }
    }
  };
  dfs(board, hand);
  return res !== Infinity ? res : -1;
};

/**
 * @description 消除祖母游戏中当前的连续彩球
 * @param {string} board
 */
function processZumaSeries(board) {
  const stack = [];
  const n = board.length;
  for (let i = 0; i < n; i++) {
    if (board[i] === stack[stack.length - 1]) {
      let cur = 2; // 检查是否有连续的相同元素
      let preSrt = stack.length - 2;
      let nextSrt = i + 1;
      while (stack[preSrt] === board[i] || board[nextSrt] === board[i]) {
        if (stack[preSrt] === board[i]) {
          cur++;
          preSrt--;
        }
        if (board[nextSrt] === board[i]) {
          cur++;
          nextSrt++;
        }
      }
      if (cur >= 3) {
        // 可以消除
        while (stack.length > preSrt + 1) {
          stack.pop();
        }
        i = nextSrt - 1;
        continue;
      }
    }
    stack.push(board[i]);
  }
  return stack.join("");
}
findMinStep("WRRBBWBWRWW", "RRWBW");
// console.log(processZumaSeries("WRRBBWWBRWWWRWW"));

// 使用bfs解答此题
/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
  const m = board.length;
  const n = hand.length;
  hand = hand.split("").sort().join(""); // 将相同字符放在一起，方便剪枝
  let queue = [[board, hand]];
  const visited = new Set([board + "#" + hand]);
  let step = 0;
  while (queue.length) {
    const nxt = [];
    for (const [curBoard, curHand] of queue) {
      for (let j = 0; j < curHand.length; j++) {
        // 剪枝条件一：手中相同的彩球只用遍历一次
        if (j > 0 && curHand[j] === curHand[j - 1]) continue;
        const nextHand = curHand.substring(0, j) + curHand.substring(j + 1);
        for (let i = 0; i < curBoard.length; i++) {
          // 剪枝条件二：桌上上一个彩球和当前手上选择的彩球一样，可以不用进行本次插入（因为上次已经插入过）
          if (i > 0 && curBoard[i - 1] === curHand[j]) continue;
          let choose = false;
          // 剪枝条件三：经过两次剪枝后，当前插入只有三种情况，其中两种情况是可以进行插入的
          // 情况一：当前插入的球和右边的球颜色相同
          if (curHand[j] === curBoard[i]) choose = true;
          // 情况二：当前插入的球和左边右边的都不同，但是左右两边球颜色相同
          if (curBoard[i - 1] === curBoard[i] && curHand[j] !== curBoard[i])
            choose = true;
          // 情况三：当前插入的球和左右两边不同，且左右两边球颜色不同，这种情况只会额外增加需要插入的球数对消解没有帮助
          if (choose) {
            const nextBoard = processZumaSeries(
              curBoard.substring(0, i) + curHand[j] + curBoard.substring(i)
            );
            if (nextBoard === "") return step + 1;
            const code = nextBoard + "#" + nextHand;
            if (!visited.has(code)) {
              visited.add(code);
              nxt.push([nextBoard, nextHand]);
            }
          }
        }
      }
    }
    queue = nxt;
    step++;
  }
  return -1;
};
