// 设计一个支持下述操作的食物评分系统：

// 修改 系统中列出的某种食物的评分。
// 返回系统中某一类烹饪方式下评分最高的食物。
// 实现 FoodRatings 类：

// FoodRatings(String[] foods, String[] cuisines, int[] ratings) 初始化系统。
// 食物由 foods、cuisines 和 ratings 描述，长度均为 n 。
// foods[i] 是第 i 种食物的名字。
// cuisines[i] 是第 i 种食物的烹饪方式。
// ratings[i] 是第 i 种食物的最初评分。
// void changeRating(String food, int newRating) 修改名字为 food 的食物的评分。
// String highestRated(String cuisine) 返回指定烹饪方式 cuisine 下评分最高的食物的名字。
// 如果存在并列，返回 字典序较小 的名字。
// 注意，字符串 x 的字典序比字符串 y 更小的前提是：
// x 在字典中出现的位置在 y 之前，也就是说，要么 x 是 y 的前缀，或者在满足 x[i] != y[i] 的第一个位置 i 处，
// x[i] 在字母表中出现的位置在 y[i] 之前

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  const n = foods.length;
  // food -> {rating, cursine}

  // rating -> [food] //pq

  // cursines -> rating // pq
  const food2Cr = new Map();
  const rating2Foods = new Map();
  const cursines2Rating = new Map();
  for (let i = 0; i < n; i++) {
    food2Cr.set(foods[i], {
      rating: ratings[i],
      cuisine: cuisines[i],
    });
    if (rating2Foods.has(ratings[i])) {
      const pqr = rating2Foods.get(ratings[i]);
      pqr.addNewItem(foods[i]);
    } else {
      const pqr = new PriorityQueue(compare1);
      pqr.addNewItem(foods[i]);
      rating2Foods.set(ratings[i], pqr);
    }
    if (cursines2Rating.has(cuisines[i])) {
      const pqc = cursines2Rating.get(cuisines[i]);
      pqc.addNewItem(ratings[i]);
    } else {
      const pqc = new PriorityQueue();
      pqc.addNewItem(ratings[i]);
      cursines2Rating.set(cuisines[i], pqc);
    }
  }
  this.food2Cr = food2Cr;
  this.rating2Foods = rating2Foods;
  this.cursines2Rating = cursines2Rating;
  console.log(food2Cr);
  console.log(rating2Foods);
  console.log(cursines2Rating);
};

var compare1 = (a, b) => {
  // 比较字符大小
  if (a == b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  // a 在 b的前面
  return -1;
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  // 获取原始的rating 和cuisine
  const { rating, cuisine } = this.food2Cr.get(food);
  // 删除原始rating中的食物
  const pqr = this.rating2Foods.get(rating);
  pqr.deleteItem(food);
  const pqc = this.cursines2Rating.get(cuisine);
  pqc.deleteItem(rating);
  // 添加新rating
  pqc.addNewItem(newRating);
  this.food2Cr.set(food, { rating: newRating, cuisine });
  // 查看是否有newRating
  if (this.rating2Foods.has(newRating)) {
    const newPQr = this.rating2Foods.get(newRating);
    newPQr.addNewItem(food);
  } else {
    const newPQr = new PriorityQueue(compare1);
    newPQr.addNewItem(food);
    this.rating2Foods.set(newRating, newPQr);
  }
  console.log(this.food2Cr);
  console.log(this.rating2Foods);
  console.log(this.cursines2Rating);
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  const pqc = this.cursines2Rating.get(cuisine);
  const maxRating = pqc.tailer();
  console.log(maxRating);
  const pqr = this.rating2Foods.get(maxRating);
  if (pqr && pqr.size > 0) {
    console.log(pqr.header());
    return pqr.header();
  }
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */

class PriorityQueue {
  constructor(compare = (a, b) => a - b) {
    this.compare = compare;
    this.data = [];
    this.size = 0;
  }
  header() {
    if (this.size > 0) {
      return this.data[0];
    }
  }
  tailer() {
    if (this.size > 0) {
      return this.data[this.size - 1];
    }
  }
  addNewItem(val) {
    let idx = this.binarySearch(val);
    this.data.splice(idx, 0, val);
    this.size++;
  }
  deleteItem(val) {
    let idx = this.binarySearch(val);
    this.data.splice(idx, 1);
    this.size--;
  }
  binarySearch(val) {
    let left = 0;
    let right = this.size;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (val == this.data[mid]) {
        return mid;
      } else if (this.compare(val, this.data[mid]) > 0) {
        // val在mid后
        left = mid + 1;
      } else {
        // val在mid前
        right = mid;
      }
    }
    return right;
  }
}

// cuisines -> rating -> [food]
// {
//   rating: [food]
// }
