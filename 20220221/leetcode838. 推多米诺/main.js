/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-21 08:44:17                                                  *
 * @LastModifiedDate: 2022-02-21 10:18:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// n 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。

// 每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。

// 如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。

// 就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。

// 给你一个字符串 dominoes 表示这一行多米诺骨牌的初始状态，其中：

// dominoes[i] = 'L'，表示第 i 张多米诺骨牌被推向左侧，
// dominoes[i] = 'R'，表示第 i 张多米诺骨牌被推向右侧，
// dominoes[i] = '.'，表示没有推动第 i 张多米诺骨牌。
// 返回表示最终状态的字符串。

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  // 多米诺牌特性：由于是同时推倒在遇到左右倒向的牌时，可以在中间形成相对平衡
  // 遍历dominoes，如果遇到L倒向的牌，前方如果没有相邻的R，则将其左边未倒向的牌全部制成L
  // 遇到R，记录右边的点个数，遇到L就计算中间值
  // 声明ans
  let ans = [];
  // 形成最后一个平衡的起始点
  let start = 0;
  // 前边是否有R
  let hasR = false;
  // 遍历
  for (let i = 0; i < dominoes.length; i++) {
    const ch = dominoes[i];
    if (ch === "L") {
      // 遇到L，检查前面是否有R
      if (hasR) {
        // 从start到i处形成平衡
        const mid = start + (i - start) / 2;
        for (let j = i; j > mid; j--) {
          ans[j] = "L";
        }
        // 中间值如果是整数就设为.
        if (mid == Math.floor(mid)) {
          ans[mid] = ".";
        }
      } else {
        // 从start到i全是L
        for (let j = i; j >= start; j--) {
          ans[j] = "L";
        }
      }
      start = i + 1;
      hasR = false;
    } else if (ch === "R") {
      hasR = true;
      // 更新
      start = i;
      ans[i] = "R";
    } else if (hasR) {
      // 有R就push R
      ans[i] = "R";
    } else {
      // 没有R就push点
      ans[i] = ".";
    }
  }
  return ans.join("");
};

pushDominoes(".L.R...LR..L..");

// 除此之外，还有一种解法，就是使用BFS，先找到所有的产生多米诺效应的牌源，入BFS队列
// 然后BFS遍历，每层传递，如果遇到点，就传递改变它的索引，如果遇到的是相同的L或是R，可以停止传递了
// 如果遇到相反的，说明平衡了
// 还需要注意一点，遇到点不要立即改变，应该判断它相邻的另一部分，如果是点就改变，如果是相反的方向字符，就停止改变

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes2 = function (dominoes) {
  // 使用BFS搜寻
  // 声明queue
  let queue = [];
  const darr = dominoes.split("");
  const len = darr.length;
  // 多米诺原点入队
  for (let i = 0; i < len; i++) {
    if (darr[i] !== ".") {
      queue.push([i, darr[i]]);
    }
  }
  // bfs
  while (queue.length > 0) {
    // 下一层序列
    const nxt = [];
    // 遍历queue
    for (const [i, ch] of queue) {
      // 修改
      // 额外判断R
      if (ch === "R") {
        if ((i + 1 < len && darr[i + 1] !== "L") || i + 1 >= len) {
          darr[i] = ch;
        }
      } else {
        darr[i] = ch;
      }
      if (ch == "L") {
        // 左边L，寻找点
        let ni = i - 1;
        // 左边是点
        if (ni >= 0 && darr[ni] === ".") {
          // 左边点的左边不能是L
          if ((ni - 1 >= 0 && darr[ni - 1] !== "R") || ni - 1 < 0) {
            nxt.push([ni, "L"]);
          }
        }
      } else {
        // 右边R，寻找点
        let ni = i + 1;
        // 右边是点
        if (ni < len && darr[ni] === ".") {
          // 在下一轮中判断右边的邻接点
          nxt.push([ni, "R"]);
        }
      }
    }
    console.log(nxt);
    queue = nxt;
  }
  return darr.join("");
};

pushDominoes2(".L.R.LR..L..R.");
