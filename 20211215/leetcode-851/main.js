/**
 * @description 喧闹和富有
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-15 18:41:37
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  有一组 n 个人作为实验对象，从 0 到 n - 1 编号，其中每个人都有不同数目的钱，以及不同程度的安静值（quietness）。为了方便起见，我们将编号为 x 的人简称为 "person x "。

//  给你一个数组 richer ，其中 richer[i] = [ai, bi] 表示 person ai 比 person bi 更有钱。另给你一个整数数组 quiet ，其中 quiet[i] 是 person i 的安静值。richer 中所给出的数据 逻辑自恰（也就是说，在 person x 比 person y 更有钱的同时，不会出现 person y 比 person x 更有钱的情况 ）。

//  现在，返回一个整数数组 answer 作为答案，其中 answer[x] = y 的前提是，在所有拥有的钱肯定不少于 person x 的人中，person y 是最安静的人（也就是安静值 quiet[y] 最小的人）。

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  // 1. quiet为每个人的安静程度
  // 2. 需要返回的ans数组表示为：比第i个人富有的人中最安静的人
  // 3. 遍历quiet， i值为当前作为比较的人
  // 4. 遍历richer，得出比i更富有的人 如果使用暴力解法，需要正序遍历一遍，逆序遍历一遍
  // 5. 两遍原因在于：可能之前的富有人通过X间接比i富有，但是X在之后才比较出比i富有，进入富有人的行列
  // 6. 比i更富有的人中，最安静的人保存下来，如果没有比i更富有的人，那么i就是最本次最安静的人
  // 保存答案
  let ans = [];

  // 遍历quiet
  for (let i = 0; i < quiet.length; i++) {
    // 保存比i更富有的人的数组,包括i
    let richerman = [i];
    // 声明保存最小安全值
    let quietValue = quiet[i];
    // 声明保存拥有最小安全值的人
    let quietPerson = i;
    // 先正序遍历,寻找比i富有的人
    for (r of richer) {
      // 比其中的人更富有且不包含在richerman中
      if (richerman.includes(r[1]) && !richerman.includes(r[0])) {
        richerman.push(r[0]);
        // 如果该富有的人比最小安全值还小
        if (quiet[r[0]] < quietValue) {
          quietPerson = r[0];
          quietValue = quiet[r[0]];
        }
      }
    }
    // 再反序遍历
    for (let j = richer.length - 1; j >= 0; j--) {
      // 比其中的人更富有且不包含在richerman中
      if (
        richerman.includes(richer[j][1]) &&
        !richerman.includes(richer[j][0])
      ) {
        richerman.push(richer[j][0]);
        // 如果该富有的人比最小安全值还小
        if (quiet[richer[j][0]] < quietValue) {
          quietPerson = richer[j][0];
          quietValue = quiet[richer[j][0]];
        }
      }
    }
    // 一轮找到了比i富有的最安静的人
    ans.push(quietPerson);
  }
  return ans;
};
console.log(
  loudAndRich(
    [
      [0, 1],
      [1, 2],
    ],
    [0, 1, 2]
  )
);
// console.log(loudAndRich([], [3, 2, 5, 4, 6, 1, 7, 0]));

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich2 = function (richer, quiet) {
  // 1. quiet为每个人的安静程度
  // 2. 需要返回的ans数组表示为：比第i个人富有的人中最安静的人
  // 3. 遍历quiet， i值为当前作为比较的人
  // 4. 遍历richer，得出比i更富有的人 使用深度优先遍历的方式
  // 5. 因为richer可以组成一个无循环的有向图，通过深度优先遍历可以从任意结点出发获取到比x富有的人
  // 6. 比i更富有的人中，最安静的人保存下来，如果没有比i更富有的人，那么i就是最本次最安静的人
  // 生成邻接表
  const g = new Array(quiet.length).fill(0);
  for (let i = 0; i < quiet.length; i++) {
    g[i] = [];
  }
  for (const r of richer) {
    // 比r[1]有钱的人即r[1] -> r[0]
    g[r[1]].push(r[0]);
  }
  const ans = new Array(quiet.length).fill(-1);
  for (let i = 0; i < quiet.length; i++) {
    dfs(i, g, ans, quiet);
  }
  return ans;
};

/**
 *
 * @param {Number} x 结点，表示第x个人
 * @param {Number[]} g 邻接表
 * @param {Number[]} ans 最安静的人的结果
 * @param {Number[]} quiet 安静值列表
 */
var dfs = (x, g, ans, quiet) => {
  // 避免重复运算，ans[x]值可以直接返回
  if (ans[x] !== -1) {
    return;
  }
  // 默认最安静的值是自己
  ans[x] = x;
  // 查找比自己更富有的人，邻接结点
  for (const y of g[x]) {
    // 因为是有向无环图，所以无需判断是否已经访问，
    dfs(y, g, ans, quiet);
    // 判断是否比自己安静
    if (quiet[ans[y]] < quiet[ans[x]]) {
      ans[x] = ans[y];
    }
  }
};

console.log(
  loudAndRich2(
    [
      [0, 1],
      [1, 2],
    ],
    [0, 1, 2]
  )
);
