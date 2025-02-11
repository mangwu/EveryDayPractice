// 题目
// 某个产品当前迭代周期内有 N 个特性（F1,F2,......FN）需要进行覆盖测试，每个特性都被评估了对应的优先级，特性使用其 ID 作为下标进行标识。

// 设计了 M 个测试用例（T1,T2,......,TM），每个测试用例对应一个覆盖特性的集合，测试用例使用其 ID 作为下标进行标识，测试用例的优先级定义为其覆盖的特性的优先级之和。

// 在开展测试之前，需要制定测试用例的执行顺序，规则为：优先级大的用例先执行，如果存在优先级相同的用例，用例 ID 小的先执行。

// 输入描述 第一行输入为 N 和 M，N 表示特性的数量，0 < N ≤ 100，M 表示测试用例的数量，0 < M ≤ 100，之后 N 行表示特性 ID=1 到特性 ID=N 的优先级，再接下来 M 行表示测试用例 ID=1 到测试用例 ID=M 关联的特性的 ID 的列表。

// 输出描述 按照执行顺序（优先级从大到小）输出测试用例的 ID，每行一个ID。

// 测试用例覆盖的 ID 不重复。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const [n, m] = inputs[0].split(" ").map((v) => parseInt(v));
  const pr = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    pr[i] = parseInt(inputs[i]);
  }
  const cases = [];
  for (let i = n + 1; i < n + m + 1; i++) {
    cases.push(inputs[i].split(" "));
  }
  const idxes = new Array(m).fill(0).map((v, i) => i);
  idxes.sort((a, b) => {
    const aPr = cases[a].reduce((pre, cur) => pre + pr[cur], 0);
    const bPr = cases[b].reduce((pre, cur) => pre + pr[cur], 0);
    if (aPr !== bPr) return bPr - aPr;
    return a - b;
  });
  for (const idx of idxes) {
    console.log(idx + 1);
  }
}
solution();
