// 描述
// 有一个由按钮组成的矩阵，其中每行有6个按钮，共5行。每个按钮的位置上有一盏灯。
// 当按下一个按钮后，该按钮以及周围位置(上边、下边、左边、右边)的灯都会改变一次。
// 即，如果灯原来是点亮的，就会被熄灭；如果灯原来是熄灭的，则会被点亮。
// 在矩阵角上的按钮改变3盏灯的状态；在矩阵边上的按钮改变4盏灯的状态；其他的按钮改变5盏灯的状态。

// 在上图中，左边矩阵中用X标记的按钮表示被按下，右边的矩阵表示灯状态的改变。
// 对矩阵中的每盏灯设置一个初始状态。请你按按钮，直至每一盏等都熄灭。
// 与一盏灯毗邻的多个按钮被按下时，一个操作会抵消另一次操作的结果。
// 在下图中，第2行第3、5列的按钮都被按下，因此第2行、第4列的灯的状态就不改变。

// 请你写一个程序，确定需要按下哪些按钮，恰好使得所有的灯都熄灭。
// 根据上面的规则，我们知道
// 1）第2次按下同一个按钮时，将抵消第1次按下时所产生的结果。因此，每个按钮最多只需要按下一次；
// 2）各个按钮被按下的顺序对最终的结果没有影响；
// 3）对第1行中每盏点亮的灯，按下第2行对应的按钮，就可以熄灭第1行的全部灯。
// 如此重复下去，可以熄灭第1、2、3、4行的全部灯。同样，按下第1、2、3、4、5列的按钮，可以熄灭前5列的灯。

// 输入
// 5行组成，每一行包括6个数字（0或1）。相邻两个数字之间用单个空格隔开。
// 0表示灯的初始状态是熄灭的，1表示灯的初始状态是点亮的。
// 输出
// 5行组成，每一行包括6个数字（0或1）。相邻两个数字之间用单个空格隔开。
// 其中的1表示需要把对应的按钮按下，0则表示不需要按对应的按钮。
// 样例输入
// 0 1 1 0 1 0
// 1 0 0 1 1 1
// 0 0 1 0 0 1
// 1 0 0 1 0 1
// 0 1 1 1 0 0
// 样例输出
// 1 0 1 0 0 1
// 1 1 0 1 0 1
// 0 0 1 0 1 1
// 1 0 0 1 0 0
// 0 1 0 0 0 0

// /**
//  * @description 使所有灯被熄灭
//  * @param {number[][]} lights 灯的熄灭状态
//  */
// var lightsOut = function (lights) {
//   // 5行，6列
//   // 确定左上角为0或者1
//   // 那么相邻的两个按钮的组合只有两种情况
//   // 这样第三斜列的情况也好判断了
//   const m = lights.length; // 5
//   const n = lights[0].length; // 6

//   const ans = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
//   ans[0][0] = 1;
//   // 确认第一个按钮为1
//   // 然后确定斜着的第二排，第三排的按钮情况
//   for (let i = 1; i < m + n - 1; i++) {
//     let x = i < n ? 0 : i - n + 1;
//     let y = Math.min(i, n - 1);
//     // 根据上面和左边的值确定当前的值,要保证上面和左边的索引位置的灯熄灭
//     if (i < n) {
//       // 通过左边值，确定 ans[x][y]
//       let center1 = lights[x][y - 1];
//       let center2 = ans[x][y - 1];
//       let left = y - 2 >= 0 ? ans[x][y - 2] : 0;
//       let sum = center1 + center2 + left;
//       if (sum % 2 == 0) {
//         ans[x][y] = 0;
//       } else {
//         ans[x][y] = 1;
//       }
//       x++;
//       y--;
//       while (x >= 0 && y >= 0 && x < m && y < n) {
//         let a = x - 1;
//         let b = y;
//         let sum = lights[a][b] + ans[a][b];
//         for (const dir of DIRS) {
//           const newa = a + dir[0];
//           const newb = b + dir[1];
//           if (newa >= 0 && newb >= 0 && newa < m && newb < n) {
//             sum += ans[newa][newb];
//           }
//         }
//         if (sum % 2 == 0) {
//           ans[x][y] = 0;
//         } else {
//           ans[x][y] = 1;
//         }
//         x++;
//         y--;
//       }
//     } else {
//       // 通过上面的值确定下一个值
//       while (x >= 0 && y >= 0 && x < m && y < n) {
//         let a = x - 1;
//         let b = y;
//         let sum = lights[a][b] + ans[a][b];
//         for (const dir of DIRS) {
//           const newa = a + dir[0];
//           const newb = b + dir[1];
//           if (newa >= 0 && newb >= 0 && newa < m && newb < n) {
//             sum += ans[newa][newb];
//           }
//         }
//         if (sum % 2 == 0) {
//           ans[x][y] = 0;
//         } else {
//           ans[x][y] = 1;
//         }
//         x++;
//         y--;
//       }
//     }
//   }
//   console.log(ans);
//   return ans;
// };

// // 0 1 1 0 1 0
// // 1 0 0 1 1 1
// // 0 0 1 0 0 1
// // 1 0 0 1 0 1
// // 0 1 1 1 0 0

// // 1 1
// // 0
// //

// // 每一个单元的最终值由5部分组成
// // left right top bottom 和center

// // res = left

// // 0 1 1 0 1 0
// // 1 0 0 1 1 1
// // 0 0 1 0 0 1
// // 1 0 0 1 0 1
// // 0 1 1 1 0 0

// // lightsOut([
// //   [0, 1, 1, 0, 1, 0],
// //   [1, 0, 0, 1, 1, 1],
// //   [0, 0, 1, 0, 0, 1],
// //   [1, 0, 0, 1, 0, 1],
// //   [0, 1, 1, 1, 0, 0],
// // ]);

// // [1, 1, 1, 1, 0, 0],
// // [0, 0, 0, 0, 0, 0],
// // [0, 1, 1, 0, 1, 1],
// // [1, 0, 1, 0, 0, 1],
// // [0, 1, 0, 0, 0, 1];
// // 最后一行的值无法确定

// /**
//  * @description 使所有灯被熄灭
//  * @param {number[][]} lights 灯的熄灭状态
//  */
// var lightsOut = function (lights) {
//   // 5行，6列
//   // 确定左上角为0或者1
//   // 那么相邻的两个按钮的组合只有两种情况
//   // 这样第三斜列的情况也好判断了
//   const m = lights.length; // 5
//   const n = lights[0].length; // 6

//   let ans = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
//   const dfs = (res, i) => {
//     if (i == 0) {
//       // 第一个元素
//       const copy = res.slice();
//       res[0][0] = 0;
//       if (dfs(res, i + 1)) {
//         return;
//       } else {
//         copy[0][0] = 1;
//         dfs(copy, i + 1);
//       }
//     }
//     let x = i < n ? 0 : i - n + 1;
//     let y = Math.min(i, n - 1);
//     // 需要猜测的值
//     if (i < n) {
//       const copy = res.slice();

//       // 通过左边值，确定 ans[x][y]
//       res[x][y] = 0;
//       // 进行取舍
//       if (i == n - 1) {
//         getNext(x, y, res);
//         getNext(x, y, copy);
//         let a = Math.min(i, m - 1);
//         let b = i < m ? 0 : i - m + 1;
//         let sum = res[a][b] + lights[a][b];
//         let sum2 = copy[a][b] + lights[a][b];
//         for (const dir of DIRS) {
//           const newa = a + dir[0];
//           const newb = b + dir[1];
//           if (newa >= 0 && newb >= 0 && newa < m && newb < n) {
//             sum += res[newa][newb];
//             sum2 += copy[newa][newb];
//           }
//         }
//         if (sum % 2 == 0) {
//           if (dfs(res, i + 1)) {
//             return;
//           }
//         }
//         if (sum2 % 2 == 0) {
//           if (dfs(copy, i + 1)) {
//             return;
//           }
//         }
//         return false;
//       }
//       getNext(x, y, res);
//       if (dfs(res, i + 1)) {
//         return;
//       } else {
//         copy[x][y] = 1;
//         getNext(x, y, copy);
//         return dfs(copy, i + 1);
//       }
//     } else if (i < m + n - 1) {
//       // 需要进行判断，判断最后一个元素是否满足条件
//       getNext2(x, y, res);
//       let a = Math.min(i, m - 1);
//       let b = i < m ? 0 : i - m + 1;
//       let sum = res[a][b] + lights[a][b];
//       for (const dir of DIRS) {
//         const newa = a + dir[0];
//         const newb = b + dir[1];
//         if (newa >= 0 && newb >= 0 && newa < m && newb < n) {
//           sum += res[newa][newb];
//         }
//       }
//       if (sum % 2 == 0) {
//         return dfs(res, i + 1);
//       } else {
//         return false;
//       }
//     }
//     // 遍历完毕
//     if (i == m + n - 1) {
//       ans = res;
//       return true;
//     }
//   };
//   const getNext = (x, y, res) => {
//     x++;
//     y--;
//     while (x >= 0 && y >= 0 && x < m && y < n) {
//       let a = x - 1;
//       let b = y;
//       let sum = lights[a][b] + res[a][b];
//       for (const dir of DIRS) {
//         const newa = a + dir[0];
//         const newb = b + dir[1];
//         if (newa >= 0 && newb >= 0 && newa < m && newb < n) {
//           sum += res[newa][newb];
//         }
//       }
//       if (sum % 2 == 0) {
//         res[x][y] = 0;
//       } else {
//         res[x][y] = 1;
//       }
//       x++;
//       y--;
//     }
//   };
//   const getNext2 = (x, y, res) => {
//     // 通过上面的值确定下一个值
//     while (x >= 0 && y >= 0 && x < m && y < n) {
//       let a = x - 1;
//       let b = y;
//       let sum = lights[a][b] + res[a][b];
//       for (const dir of DIRS) {
//         const newa = a + dir[0];
//         const newb = b + dir[1];
//         if (newa >= 0 && newb >= 0 && newa < m && newb < n) {
//           sum += res[newa][newb];
//         }
//       }
//       if (sum % 2 == 0) {
//         res[x][y] = 0;
//       } else {
//         res[x][y] = 1;
//       }
//       x++;
//       y--;
//     }
//   };
//   dfs(ans, 0);
//   console.log(ans);
//   return ans;
// };
const { exit } = require("process");
// lightsOut([
//   [0, 1, 1, 0, 1, 0],
//   [1, 0, 0, 1, 1, 1],
//   [0, 0, 1, 0, 0, 1],
//   [1, 0, 0, 1, 0, 1],
//   [0, 1, 1, 1, 0, 0],
// ]);
// [
//   [ 1, 1, 1, 1, 1, 1 ],
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 1, 1 ],
//   [ 0, 0, 0, 0, 1, 0 ],
//   [ 0, 1, 1, 0, 0, 0 ]
// ]

// 0 1 1 0 1 0
// 1 0 0 1 1 1
// 0 0 1 0 0 1
// 1 0 0 1 0 1
// 0 1 1 1 0 0

// 1 0 1 0 0 1
// 1 1 0 1 0 1
// 0 0 1 0 1 1
// 1 0 0 1 0 0
// 0 1 0 0 0 0

// 输入输出
const readline = require("readline");

// 不相下添加
const DIRS2 = [
  [0, 1],
  [0, -1],
  [-1, 0],
];
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
/**
 * @description 使所有灯被熄灭
 * @param {number[][]} lights 灯的熄灭状态
 */
var lightsOut = function (lights) {
  const m = lights.length;
  const n = lights[0].length;
  const buttons = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  // 第一行的buttons有 64 种情况
  for (let i = 0; i < 64; i++) {
    // 获取第一行的情况
    let value = i;
    for (let j = 0; j < n; j++) {
      buttons[0][j] = value & 1;
      value = value >> 1;
    }
    // 获取剩下的 2 3 ... m - 1行的按钮情况
    // 为了保证前一行的每一行都为0，可以计算出对应的当前行的值
    for (let j = 1; j < m; j++) {
      for (let k = 0; k < n; k++) {
        const a = j - 1;
        const b = k;
        let sum = lights[a][b] + buttons[a][b];
        for (const dir of DIRS2) {
          const newA = a + dir[0];
          const newB = b + dir[1];
          if (newA >= 0 && newB >= 0 && newA < m && newB < n) {
            sum += buttons[newA][newB];
          }
        }
        if (sum % 2 == 0) {
          buttons[j][k] = 0;
        } else {
          buttons[j][k] = 1;
        }
      }
    }
    let isMeet = true;
    // 判断最后一行的情况
    for (let j = 0; j < n; j++) {
      const a = m - 1;
      const b = j;
      let sum = lights[a][b] + buttons[a][b];
      for (const dir of DIRS) {
        const newA = a + dir[0];
        const newB = b + dir[1];
        if (newA >= 0 && newB >= 0 && newA < m && newB < n) {
          sum += buttons[newA][newB];
        }
      }
      if (sum % 2 != 0) {
        isMeet = false;
        break;
      }
    }
    if (isMeet) {
      return buttons;
    }
  }
};

// 创建readline接口实例
let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lights = [];
r1.on("line", function (line) {
  lights.push(line.split(" ").map((v) => parseInt(v)));
  if (lights.length == 5) {
    const output = lightsOut(lights);
    for (const out of output) {
      console.log(out.join(" "));
    }
    exit();
  }
});
