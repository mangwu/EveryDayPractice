// 题目
// 题目描述 某个开源社区希望将最近热度比较高的开源项目出一个榜单，推荐给社区里面的开发者。 对于每个开源项目，开发者可以进行关注（watch）、收藏（star）、fork、提issue、提交合并请求（MR）等。 数据库里面统计了每个开源项目关注、收藏、fork、issue、MR的数量，开源项目的热度根据这5个维度的加权求和进行排序。

// H = W(watch) x #watch + W(star) x #star + W(fork) x #fork + W(issue) x #issue + W(mr) x #mr
// H 表示热度值 W(watch)、W(star)、W(fork)、W(issue)、W(mr) 分别表示5个统计维度的权重 #watch、#star、#fork、#issue、#mr 分别表示5个统计维度的统计值 榜单按照热度值降序排序，对于热度值相等的，按照项目名字转换为全小写字母后的字典序排序（'a','b','c',...,'x','y','z'）。

// 输入描述
// 第一行输入为N，表示开源项目的个数，0 ＜ N ＜100。 第二行输入为权重值列表，一共 5 个整型值，分别对应关注、收藏、fork、issue、MR的权重，权重取值 0 < W ≤ 50。 第三行开始接下来的 N 行为开源项目的统计维度，每一行的格式为： name nr_watch nr_start nr_fork nr_issue nr_mr

// 其中 name 为开源项目的名字，由英文字母组成，长度 ≤ 50，其余 5 个整型值分别为该开源项目关注、收藏、fork、issue、MR的数量，数量取值 0 < nr ≤ 1000。

// 输出描述
// 按照热度降序，输出开源项目的名字，对于热度值相等的，按照项目名字转换为全小写后的字典序排序（'a' > 'b' > 'c' > ... > 'x' > 'y' > 'z'）。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const pr = inputs[1].split(" ").map((v) => parseInt(v));
  const arr = [];
  for (let i = 2; i < n + 2; i++) {
    const cur = inputs[i].split(" ");
    const name = cur[0];
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
      sum += parseInt(cur[i] * pr[i - 1]);
    }
    arr.push([name, sum]);
  }
  arr.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
  });
  for (const item of arr) {
    console.log(item[0]);
  }
}
solution();
