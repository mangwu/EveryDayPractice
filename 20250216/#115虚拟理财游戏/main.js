// 在一款虚拟游戏中生活，你必须进行投资以增强在虚拟游戏中的资产以免被淘汰出局。 现有一家Bank，它提供有若干理财产品 m 个，风险及投资回报不同，你有 N（元）进行投资，能接收的总风险值为X。 你要在可接受范围内选择最优的投资方式获得最大回报。

// 备注： 在虚拟游戏中，每项投资风险值相加为总风险值； 在虚拟游戏中，最多只能投资2个理财产品； 在虚拟游戏中，最小单位为整数，不能拆分为小数； 投资额*回报率=投资回报

// 输入描述

// 第一行：

// 产品数（取值范围[1,20]） 总投资额（整数，取值范围[1, 10000]） 可接受的总风险（整数，取值范围[1,200]） 第二行：产品投资回报率序列，输入为整数，取值范围[1,60] 第三行：产品风险值序列，输入为整数，取值范围[1, 100] 第四行：最大投资额度序列，输入为整数，取值范围[1, 10000]

// 输出描述

// 每个产品的投资额序列

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const [m, maxMoney, maxRisk] = inputs[0].split(" ").map((v) => parseInt(v));
  // 投资回报率
  const returnRates = inputs[1].split(" ").map((v) => parseInt(v));
  // 风险
  const risks = inputs[2].split(" ").map((v) => parseInt(v));
  // 最大投资额
  const maxInvests = inputs[3].split(" ").map((v) => parseInt(v));
  // 因为只能购买两个，所以可以暴力解决
  // 记录投资回报
  let maxReturnNum = 0;
  let res = [];
  for (let i = 0; i < m; i++) {
    const curInvest = Math.min(maxInvests[i], maxMoney);
    let returnNum = returnRates[i] * curInvest;
    if (risks[i] <= maxRisk && maxReturnNum <= returnNum) {
      maxReturnNum = returnNum;
      res = [[i, curInvest]];
    }
    for (let j = i + 1; j < m; j++) {
      const curRisk = risks[i] + risks[j];
      if (curRisk <= maxRisk) {
        // 优先选择投资回报率大的
        if (returnRates[i] > returnRates[j]) {
          let invest = Math.min(maxMoney, maxInvests[i]);
          let restInvest = Math.min(maxMoney - invest, maxInvests[j]);
          const curReturnNum =
            invest * returnRates[i] + restInvest * returnRates[j];
          if (curReturnNum > maxReturnNum) {
            maxReturnNum = curReturnNum;
            res = [
              [i, invest],
              [j, restInvest],
            ];
          }
        } else {
          let invest = Math.min(maxMoney, maxInvests[j]);
          let restInvest = Math.min(maxMoney - invest, maxInvests[i]);
          const curReturnNum =
            invest * returnRates[j] + restInvest * returnRates[i];
          if (curReturnNum > maxReturnNum) {
            maxReturnNum = curReturnNum;
            res = [
              [j, invest],
              [i, restInvest],
            ];
          }
        }
      }
    }
  }
  const ans = new Array(m).fill(0);
  for (const [idx, invest] of res) {
    ans[idx] = invest;
  }
  console.log(ans.join(" "));
}
solution();
