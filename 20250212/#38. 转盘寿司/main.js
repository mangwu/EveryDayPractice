// 题目
// 寿司店周年庆，正在举办优惠活动回馈新老客户。 寿司转盘上总共有 n 盘寿司，prices[i] 是第 i 盘寿司的价格， 如果客户选择了第 i 盘寿司，寿司店免费赠送客户距离第 i 盘寿司最近的下一盘寿司 j，前提是 prices[j] < prices[i]，如果没有满足条件的 j，则不赠送寿司。 每个价格的寿司都可无限供应。

// 输入描述
// 输入的每一个数字代表每盘寿司的价格，每盘寿司的价格之间使用空格分隔，例如: 3 15 6 14

// 表示： 第 0 盘寿司价格 prices[0] 为 3 第 1 盘寿司价格 prices[1] 为 15 第 2 盘寿司价格 prices[2] 为 6 第 3 盘寿司价格 prices[3] 为 14 寿司的盘数 n 范围为：1 ≤ n ≤ 500 每盘寿司的价格 price 范围为：1 ≤ price ≤ 1000

// 输出描述
// 输出享受优惠后的一组数据，每个值表示客户选择第 i 盘寿司时实际得到的寿司的总价格。使用空格进行分隔，例如： 3 21 9 17

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(" ").map((v) => parseInt(v));
  const ans = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < n + i; j++) {
      // 找到下一个最近的寿司
      const index = j % n;
      if (arr[index] < sum) {
        sum += arr[index];
        break;
      }
    }
    ans.push(sum);
  }
  console.log(ans.join(" "));
}
solution();
