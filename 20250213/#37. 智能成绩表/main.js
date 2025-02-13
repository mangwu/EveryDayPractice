// 小明来到某学校当老师，需要将学生按考试总分或单科分数进行排名，你能帮帮他吗？

// 输入描述
// 第 1 行输入两个整数，学生人数 n 和科目数量 m。

// 0 < n < 100 0 < m < 10 第 2 行输入 m 个科目名称，彼此之间用空格隔开。

// 科目名称只由英文字母构成，单个长度不超过10个字符。 科目的出现顺序和后续输入的学生成绩一一对应。 不会出现重复的科目名称。 第 3 行开始的 n 行，每行包含一个学生的姓名和该生 m 个科目的成绩（空格隔开）

// 学生不会重名。 学生姓名只由英文字母构成，长度不超过10个字符。 成绩是0~100的整数，依次对应第2行种输入的科目。 第n+2行，输入用作排名的科目名称。若科目不存在，则按总分进行排序。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // 学生人数 科目数量
  const [n, m] = inputs[0].split(" ").map((v) => parseInt(v));
  const projects = inputs[1].split(" ");
  const targetPro = inputs[n + 2];
  const hasPro = projects.indexOf(targetPro) !== -1;
  const arr = [];
  for (let i = 2; i < n + 2; i++) {
    const curArr = inputs[i].split(" ");
    const name = curArr[0];
    const item = { name };
    for (let j = 1; j <= m; j++) {
      item[projects[j - 1]] = parseInt(curArr[j]);
    }
    arr.push(item);
  }
  arr.sort((a, b) => {
    if (hasPro) {
      if (a[targetPro] !== b[targetPro]) return b[targetPro] - a[targetPro];
    } else {
      // 总分排序
      let aSum = 0;
      let bSum = 0;
      for (const project of projects) {
        aSum += a[project];
        bSum += b[project];
      }
      if (aSum !== bSum) return bSum - aSum;
    }
    return a.name.localeCompare(b.name);
  });
  console.log(arr.map((v) => v.name).join(" "));
}

solution();
