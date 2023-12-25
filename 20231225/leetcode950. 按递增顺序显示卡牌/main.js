// 牌组中的每张卡牌都对应有一个唯一的整数。你可以按你想要的顺序对这套卡片进行排序。

// 最初，这些卡牌在牌组里是正面朝下的（即，未显示状态）。

// 现在，重复执行以下步骤，直到显示所有卡牌为止：

// 从牌组顶部抽一张牌，显示它，然后将其从牌组中移出。
// 如果牌组中仍有牌，则将下一张处于牌组顶部的牌放在牌组的底部。
// 如果仍有未显示的牌，那么返回步骤 1。否则，停止行动。
// 返回能以递增顺序显示卡牌的牌组顺序。

// 答案中的第一张牌被认为处于牌堆顶部。

class Dqueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  enqueueFront(value) {
    if (value == null) return false;
    this.items[this.lowest--] = value;
    return true;
  }
  enqueueBack(value) {
    if (value == null) return false;
    this.items[this.highest++] = value;
    return true;
  }
  pollFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  pollBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  // 双端队列逆向操作
  // 假设 [1,2,3,4] 是显示的递增序列
  // 初始牌组是[4]
  // 将4的上一张牌3要还原到上一次拿牌的情况，需要进行如下操作
  // 将当前牌组的队尾元素出队，从队首入队到牌组，然后再在队首入队3
  // [4] => [4] => [3,4]
  // [3,4] => [4,3] => [2,4,3]
  // [2,4,3] => [3,2,4] => [1,3,2,4]
  // 当前牌组的队尾元素是上一个牌组的第二元素出队首后入队尾的元素，所以需要反向操作
  deck.sort((a, b) => a - b);
  const dq = new Dqueue();
  dq.enqueueBack(deck.pop());
  while (deck.length) {
    dq.enqueueFront(dq.pollBack());
    dq.enqueueFront(deck.pop());
  }
  while (!dq.isEmpty()) {
    deck.push(dq.pollFront());
  }
  return deck;
};
