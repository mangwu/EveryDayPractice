// 圣诞活动预热开始啦，汉堡店推出了全新的汉堡套餐。为了避免浪费原料，请你帮他们制定合适的制作计划。

// 给你两个整数 tomatoSlices 和 cheeseSlices，分别表示番茄片和奶酪片的数目。不同汉堡的原料搭配如下：

// 巨无霸汉堡：4 片番茄和 1 片奶酪
// 小皇堡：2 片番茄和 1 片奶酪
// 请你以 [total_jumbo, total_small]（[巨无霸汉堡总数，小皇堡总数]）的格式返回恰当的制作方案，使得剩下的番茄片 tomatoSlices 和奶酪片 cheeseSlices 的数量都是 0。

// 如果无法使剩下的番茄片 tomatoSlices 和奶酪片 cheeseSlices 的数量为 0，就请返回 []。

/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  if (cheeseSlices === 0) {
    if (tomatoSlices === 0) return [0, 0];
    return [];
  }
  // cheeseSlices有值
  const ratio = tomatoSlices / cheeseSlices;
  if (ratio >= 2 && ratio <= 4) {
    // 4x + 2y = t;
    // x + y = c; => 2x + 2y = 2c
    // 2x = t - 2c; x = (t-2c) / 2
    // y = c - (t-2c)/2
    const x = (tomatoSlices - 2 * cheeseSlices) / 2;
    if (x % 2 === 0.5 || x % 2 === 1.5) return [];
    return [x, cheeseSlices - x];
  }
  return [];
};
