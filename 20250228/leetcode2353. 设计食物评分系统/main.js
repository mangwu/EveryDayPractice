// 设计一个支持下述操作的食物评分系统：

// 修改 系统中列出的某种食物的评分。
// 返回系统中某一类烹饪方式下评分最高的食物。
// 实现 FoodRatings 类：

// FoodRatings(String[] foods, String[] cuisines, int[] ratings) 初始化系统。食物由 foods、cuisines 和 ratings 描述，长度均为 n 。
// foods[i] 是第 i 种食物的名字。
// cuisines[i] 是第 i 种食物的烹饪方式。
// ratings[i] 是第 i 种食物的最初评分。
// void changeRating(String food, int newRating) 修改名字为 food 的食物的评分。
// String highestRated(String cuisine) 返回指定烹饪方式 cuisine 下评分最高的食物的名字。如果存在并列，返回 字典序较小 的名字。
// 注意，字符串 x 的字典序比字符串 y 更小的前提是：x 在字典中出现的位置在 y 之前，也就是说，要么 x 是 y 的前缀，或者在满足 x[i] != y[i] 的第一个位置 i 处，x[i] 在字母表中出现的位置在 y[i] 之前。

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  peek() {
    return this.items[0];
  }
  insert(value) {
    this.items.push(value);
    this.shiftUp();
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compare(idx, parentIdx) < 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return;
    const size = this.size();
    if (size === 1) return this.items.pop();
    this.swap(0, size - 1);
    const res = this.items.pop();
    this.shiftDown();
    return res;
  }
  shiftDown() {
    const size = this.size();
    let idx = 0;
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  const n = foods.length;
  const foodRate = new Map();
  const cuisineRate = new Map();
  for (let i = 0; i < n; i++) {
    foodRate.set(foods[i], [ratings[i], cuisines[i]]); // key: food, value: [rate, cuisine]
    const pq =
      cuisineRate.get(cuisines[i]) ||
      new PQ((a, b) =>
        a.rate !== b.rate ? b.rate - a.rate : a.food.localeCompare(b.food)
      );
    pq.insert({ rate: ratings[i], food: foods[i] });
    cuisineRate.set(cuisines[i], pq); // key: cuisin, value: pq(rate, food)
  }
  this.foodRate = foodRate;
  this.cuisineRate = cuisineRate;
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  const arr = this.foodRate.get(food);
  if (arr[0] !== newRating) {
    arr[0] = newRating;
    this.cuisineRate.get(arr[1]).insert({ rate: newRating, food });
  }
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  const pq = this.cuisineRate.get(cuisine);
  while (!pq.isEmpty()) {
    const { food, rate } = pq.peek();
    if (this.foodRate.get(food)[0] !== rate) {
      pq.poll();
    } else {
      return food;
    }
  }
  return "";
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */

const obj = new FoodRatings(
  ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
  ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
  [9, 12, 8, 15, 14, 7]
);
console.log("--------cur keys--------");
console.log(obj.foodRate);
console.log(obj.cuisineRate.get("korean").items);
console.log("--------cur keys end--------");
console.log("------change kimchi 7-------");
obj.changeRating("kimchi", 7);
console.log(obj.cuisineRate.get("korean").items);
console.log("------change kimchi 7end-------");
console.log(obj.highestRated("korean"));
console.log(obj.cuisineRate.get("korean").items);
