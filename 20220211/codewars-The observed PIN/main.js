/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-11 09:12:13                                                  *
 * @LastModifiedDate: 2022-02-11 14:12:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 0],
];
function getPINs(observed) {
  // TODO: This is your job, detective!

  // 1 2 3
  // 4 5 6
  // 7 8 9
  // e 0 e

  // 根据observed的长度（1-8），我们知道了要匹配的所有位置可能结果的位置
  // 如果被观察得到的密码为 258，那么需要组合[1, 2, 3, 5] [2, 4, 5, 6, 8] [5, 7, 8, 9, 0]这三个数组，有4 * 5 * 5 种结果
  // 查找数组很好做，关键在于如何快速的生成所有可能的结果
  // 声明键盘
  const keypad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [null, "0", null],
  ];
  // 数组个数
  const len = observed.length;
  const arr = [];
  for (let idx = 0; idx < len; idx++) {
    const i = observed[idx] === "0" ? 3 : Math.floor((observed[idx] - 1) / 3);
    const j = observed[idx] === "0" ? 1 : Math.floor((observed[idx] - 1) % 3);
    arr[idx] = [];
    for (const dir of DIRS) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (x >= 0 && y >= 0 && x < 4 && y < 3 && keypad[x][y] !== null) {
        arr[idx].push(keypad[x][y]);
      }
    }
  }
  // console.log(arr);
  let ans = arr[0];
  // 开始遍历
  for (let i = 1; i < len; i++) {
    const newArr = arr[i];
    const newNtx = [];
    for (const ch1 of ans) {
      for (const ch2 of newArr) {
        newNtx.push(ch1 + ch2);
      }
    }
    ans = newNtx;
  }
  // console.log(ans, ans.length);
  return ans;
}

// getPINs("369");

function getPINs2(observed) {
  // 通过数组生成字符的方法使用map，reduce等高阶函数可以更加简便

  // 声明键盘
  const keypad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [null, "0", null],
  ];
  // 数组个数
  const len = observed.length;
  const arr = [];
  for (let idx = 0; idx < len; idx++) {
    const i = observed[idx] === "0" ? 3 : Math.floor((observed[idx] - 1) / 3);
    const j = observed[idx] === "0" ? 1 : Math.floor((observed[idx] - 1) % 3);
    arr[idx] = [];
    for (const dir of DIRS) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (x >= 0 && y >= 0 && x < 4 && y < 3 && keypad[x][y] !== null) {
        arr[idx].push(keypad[x][y]);
      }
    }
  }
  // 由于数据量少，上述声明每个字符相邻字符的数组可以手写

  // 使用高阶函数
  return arr.reduce((pre, current) => {
    // console.log(pre.map((t) => current.map((g) => t + g)));
    // concat用于连接数组原始为一个，而上面的结果为一个二维数组
    // 直接组合会将二维数组中的元素进行结合，还是二维数组
    // 而使用apply则是为了将二维数组作为第二个参数以列表的形式依次传入到concat中
    // 第一个参数使用[]，而不能使用Array，表示this为[]，即表示[]调用concat传入参数arr中的元素执行合并
    return [].concat.apply(
      [],
      pre.map((t) => current.map((g) => t + g))
    );
  });
}

console.log(getPINs2("111"));
