/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-25 15:43:35                                                  *
 * @LastModifiedDate: 2022-02-27 23:26:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 从金字塔滑下来的最长路径

//     /3/
//    \7\ 4
//   2 \4\ 6
//  8 5 \9\ 3

// => 从1到n的n层金字塔构造
// => 从顶层开始，每次选取一个尽可能大的值，构成最大路径
// => 限制条件是选择的值只能是左右两边的数字（当前层索引为1, 则下一层只能选择索引为1和2的值）
// => 金字塔以 [[x], [x1, x2], [x1, x2, x3]...]的形式给出
const DIRS = [
  [1, 0],
  [1, 1],
];

function longestSlideDown(pyramid) {
  // 贪心算法
  // [3], 0 0 => 0
  // [7, 4], 1 0 => 1  1 1 => 2 1^2
  // [2, 4, 6],
  // [8, 5, 9, 11]  3 ^ 2 = 9
  // 每次只能选择其下或者其右的元素
  // 深度优先搜索可以遍历整个金字塔，找到最大值, 这种方法的事件复杂度最高
  const stack = [[0, 0]];
  const visited = [];
  visited[0] = 1;
  // 使用栈的DFS 错误解答，
  let max = pyramid[0][0];
  let cur = max;
  let isPush = false;
  while (stack.length > 0) {
    // 栈顶元素
    const top = stack[stack.length - 1];
    isPush = false;
    // 遍历获取元素
    for (const dir of DIRS) {
      const x = top[0] + dir[0];
      const y = top[0] + dir[1];
      // 未访问
      if (x < pyramid.length && !visited[x + y]) {
        isPush = true;
        visited[x + y] = 1;
        cur = cur + pyramid[x][y];
        stack.push([x, y]);
        if (cur > max) {
          max = cur;
        }
        break;
      }
    }
    // console.log(stack);
    // 是否入栈
    if (!isPush) {
      // 没有就回退
      const p = stack.pop();
      cur = cur - pyramid[p[0]][p[1]];
    }
  }
  console.log(max);
  return max;
}

// 错误解答 DFS通过栈遍历无法得到最大值
longestSlideDown([
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
]);

// DFS递归方法

/**
 * @description 从金字塔上滑下来
 * @param {Array} pyramid 金字塔
 * @returns max 最大路径值
 */
function longestSlideDown2(pyramid) {
  // 贪心算法
  // [3], 0 0 => 0
  // [7, 4], 1 0 => 1  1 1 => 2 1^2
  // [2, 4, 6],
  // [8, 5, 9, 11]  3 ^ 2 = 9
  // 每次只能选择其下或者其右的元素
  const visited = [];
  // 使用栈的DFS 错误解答，
  let max = dfs(0, 0, pyramid, visited);
  console.log(max);
  return max;
}

const dfs = (x, y, pyramid, visited) => {
  // 滑倒最后一层以后，或者已被访问
  if (x >= pyramid.length || visited[x + y]) {
    return 0;
  }
  // 当前起点的最大值
  let mx = 0;
  // 设置为已访问
  visited[x + y] = 1;
  for (const dir of DIRS) {
    const i = x + dir[0];
    const j = y + dir[1];
    mx = Math.max(mx, dfs(i, j, pyramid, visited));
  }
  // 回溯
  visited[x + y] = 0;
  return mx + pyramid[x][y];
};

longestSlideDown2([
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
]);
// dfs递归算法正确但是超时

// 使用动态规划
/**
 * @description 从金字塔上滑下来
 * @param {Array} pyramid 金字塔
 * @returns max 最大路径值
 */
function longestSlideDown3(pyramid) {
  // 动态规划的思想是通过路径段的部分求路径长的部分
  // 要求顶层到最后一层路径的最大值，那么求出第二层的两个结点到最后一层的路径最大值
  // 选择第二层中两个节点路径最大值的更大则即可
  // 同理可以求出第三层...选择第三层的最大值可以得到第二层的最大值
  // 所以可以倒过来，从倒数第二层出发，求出每个的倒数第二层的最大值路径，然后依次遍历求出即可
  // 例如
  //     /3/
  //    \7\ 4
  //   2 \4\ 6
  //  8 5 \9\ 3
  // =>
  //     /3/
  //    \7\ 4
  //   10 \13\ 15
  //  8 5 \9\ 3
  //= >
  //     /3/
  //    \20\ 21
  //   10 \13\ 15
  // => 3+21
  let len = pyramid.length;
  while (len >= 2) {
    // 求出倒数第二层的最大值
    const floorlen = pyramid[len - 2].length;
    for (let i = 0; i < floorlen; i++) {
      // 选择大的相加
      pyramid[len - 2][i] += Math.max(
        pyramid[len - 1][i],
        pyramid[len - 1][i + 1]
      );
    }
    len--;
  }
  return pyramid[0][0];
}

console.log(
  longestSlideDown3([
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ])
);

// 使用动态规划
/**
 * @description 从金字塔上滑下来
 * @param {Array} pyramid 金字塔
 * @returns max 最大路径值
 */
function longestSlideDown3(pyramid) {
  // 使用reduceRight高阶函数
  // 从最后一层开始遍历
  return pyramid.reduceRight((last, current) => {
    return current.map((v, i) => v + Math.max(last[i], last[i + 1]));
  })[0];
}
