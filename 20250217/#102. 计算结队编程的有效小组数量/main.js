// 某部门计划通过结队编程来进行项目开发，已知该部门有 N 名员工，每个员工有独一无二的职级，每三个员工形成一个小组进行结队编程，结队分组规则如下：

// 从部门中选出序号分别为 i、j、k 的3名员工，他们的职级分贝为 level[i]，level[j]，level[k]，结队小组满足 level[i] < level[j] < level[k] 或者 level[i] > level[j] > level[k]，其中 0 ≤ i < j < k < n。

// 请你按上述条件计算可能组合的小组数量。同一员工可以参加多个小组。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;
async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const levels = inputs[1].split(" ").map((v) => parseInt(v));
  const n = levels.length;
  // 计算每个元素右边有多少个元素更大
  const biger = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let num = 0;
    for (let j = i + 1; j < n; j++) {
      if (levels[j] > levels[i]) num++;
    }
    biger[i] = num;
  }
  let res = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (levels[j] > levels[i]) res += biger[j];
    }
  }
  console.log(res);
}
solution();
