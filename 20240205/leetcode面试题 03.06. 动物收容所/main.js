// 动物收容所。有家动物收容所只收容狗与猫，且严格遵守“先进先出”的原则。在收养该收容所的动物时，收养人只能收养所有动物中“最老”（由其进入收容所的时间长短而定）的动物，或者可以挑选猫或狗（同时必须收养此类动物中“最老”的）。换言之，收养人不能自由挑选想收养的对象。请创建适用于这个系统的数据结构，实现各种操作方法，比如enqueue、dequeueAny、dequeueDog和dequeueCat。允许使用Java内置的LinkedList数据结构。

// enqueue方法有一个animal参数，animal[0]代表动物编号，animal[1]代表动物种类，其中 0 代表猫，1 代表狗。

// dequeue*方法返回一个列表[动物编号, 动物种类]，若没有可以收养的动物，则返回[-1,-1]。

var AnimalShelf = function () {
  // 使用三个队列，保存猫，狗和混合
  this.dogs = [];
  this.cats = [];
  this.mixs = [];
  this.delayShift = [0, 0];
};

/**
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function (animal) {
  if (animal[1] === 0) this.cats.push(animal);
  else this.dogs.push(animal);
  this.mixs.push(animal);
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function () {
  while (this.mixs.length && this.delayShift[this.mixs[0][1]]) {
    this.delayShift[this.mixs.shift()[1]]--;
  }
  if (!this.mixs.length) return [-1, -1];
  const animal = this.mixs.shift();
  if (animal[1] === 0) this.cats.shift();
  else this.dogs.shift();
  return animal;
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function () {
  if (!this.dogs.length) return [-1, -1];
  this.delayShift[1]++;
  return this.dogs.shift();
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function () {
  if (!this.cats.length) return [-1, -1];
  this.delayShift[0]++;
  return this.cats.shift();
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */

