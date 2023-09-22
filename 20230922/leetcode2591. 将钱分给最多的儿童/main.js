// 给你一个整数 money ，表示你总共有的钱数（单位为美元）和另一个整数 children ，表示你要将钱分配给多少个儿童。

// 你需要按照如下规则分配：

// 所有的钱都必须被分配。
// 每个儿童至少获得 1 美元。
// 没有人获得 4 美元。
// 请你按照上述规则分配金钱，并返回 最多 有多少个儿童获得 恰好 8 美元。如果没有任何分配方案，返回 -1 。

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  let res = children;
  if (money < children) return -1;
  if (money < children + 7) return 0;
  while (res) {
    // res个儿童获得8美元
    let cur = res * 8;
    if (money < cur) {
      res--;
      continue;
    } else if (money === cur) {
      if (res === children) return res;
      else res--;
    } else {
      // money大于cur
      let rest = money - cur;
      if (res === children) return res - 1;
      let restP = children - res;
      if (restP > rest) {
        res--;
        continue;
      }
      // 剩余人小于剩余钱
      if (restP === 1 && rest === 4) return res - 1;
      return res;
    }
  }
  return res;
};
