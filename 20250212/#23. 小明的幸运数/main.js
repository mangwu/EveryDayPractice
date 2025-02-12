// 题目
// 小明在玩一个游戏，游戏规则如下： 在游戏开始前，小明站在坐标轴原点处（坐标值为0）. 给定一组指令和一个幸运数，每个指令都是一个整数，小明按照指令前进指定步数或者后退指定步数。前进代表朝坐标轴的正方向走，后退代表朝坐标轴的负方向走。 幸运数为一个整数，如果某个指令正好和幸运数相等，则小明行进步数+1。

// 例如： 幸运数为3，指令为[2,3,0,-5] 指令为2，表示前进2步； 指令为3，正好和幸运数相等，前进3+1=4步； 指令为0，表示原地不动，既不前进，也不后退。 指令为-5，表示后退5步。 请你计算小明在整个游戏过程中，小明所处的最大坐标值。

// 输入描述 第一行输入1个数字，代表指令的总个数 n（1 ≤ n ≤ 100） 第二行输入1个数字，代表幸运数m（-100 ≤ m ≤ 100） 第三行输入n个指令，每个指令的取值范围为：-100 ≤ 指令值 ≤ 100

// 输出描述 输出在整个游戏过程中，小明所处的最大坐标值。异常情况下输出：12345

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const lukyNum = parseInt(inputs[1]);
  const arr = inputs[2].split(" ").map((v) => parseInt(v));
  let pos = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] != undefined && !isNaN(arr[i])) {
      if (arr[i] === lukyNum) arr[i]++;
      pos += arr[i];
      res = Math.max(res, pos);
    } else {
      console.log(12345);
      return;
    }
  }
  console.log(res)
}
solution();
