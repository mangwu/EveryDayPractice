/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-18 14:04:57                                                  *
 * @LastModifiedDate: 2022-10-18 15:34:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 牌组中的每张卡牌都对应有一个唯一的整数。你可以按你想要的顺序对这套卡片进行排序。

// 最初，这些卡牌在牌组里是正面朝下的（即，未显示状态）。

// 现在，重复执行以下步骤，直到显示所有卡牌为止：

// 从牌组顶部抽一张牌，显示它，然后将其从牌组中移出。
// 如果牌组中仍有牌，则将下一张处于牌组顶部的牌放在牌组的底部。
// 如果仍有未显示的牌，那么返回步骤 1。否则，停止行动。
// 返回能以递增顺序显示卡牌的牌组顺序。

// 答案中的第一张牌被认为处于牌堆顶部。

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const n = deck.length;
  let idxes = new Array(n).fill(0).map((v, i) => i);
  const ans = [];
  while (idxes.length > 0) {
    const len = idxes.length;
    const nxt = [];
    if (len % 2 == 0) {
      // 需要将第一个移动到尾部
      for (let i = 0; i < len; i += 2) {
        ans.push(idxes[i]);
        if (i !== 0 && i + 1 < len) {
          nxt.push(idxes[i + 1]);
        }
      }
      nxt.push(idxes[1]);
    } else {
      for (let i = 0; i < len; i += 2) {
        ans.push(deck[idxes[i]]);
        if (i + 1 < len) {
          nxt.push(idxes[i + 1]);
        }
      }
    }
    idxes = nxt;
  }
  return ans;
};
// 2 3 5 7 11 13 17

// 0 1 2 3 4 5 6

// 0 2 4 6
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const n = deck.length;
  deck.sort((a, b) => a - b);
  if (n == 1 || n == 2) {
    return deck;
  }
  const ans = [];
  let rest = [];
  for (let i = 0; i < n; i += 2) {
    ans[i] = deck[i];
    if (i + 1 < n) {
      rest.push(deck[i + 1]);
    }
  }
  const res = deckRevealedIncreasing(rest);
  for (let i = 1; i < n; i += 2) {
    ans[i] = res[Math.floor(i / 2)];
  }
  return ans;
};
// 1 3 5 7
// 0 1 2 3
// 上述的都是错误的
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const n = deck.length;
  const ans = [deck[n - 1]];
  // 倒序思想
  // 最后一个元素肯定是最大值
  // 当有两个元素的情况是到数第二大的值在当前数组首部
  // 而此时的最后一位应该移动到在其之后
  // 当有三个元素时，同理到数第三大的值在当前数组的首部
  // 而此时的最后一位应该移动到在其之后
  for (let i = n - 2; i >= 0; i--) {
    let last = ans.pop();
    ans.unshift(deck[i], last);
  }
  return ans;
};

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const n = deck.length;
  const ans = [];
  // 正向模拟，将数组排好序，初始结果为空，从头开始，间隔一个插入一个空位
  let queue = new Array(n).fill(0).map((_v, i) => i);
  let idx = 0;
  while (idx < n) {
    let first = queue.shift();
    let second = queue.shift();
    ans[first] = deck[idx++];
    if (second !== undefined) {
      queue.push(second);
    }
  }
  return ans;
};

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const n = deck.length;
  const ans = [];
  // 正向模拟，将数组排好序，初始结果为空，从头开始，间隔一个插入一个空位
  // 不使用shift
  let queue = new Array(n).fill(0).map((_v, i) => i);
  let idx = 0;
  while (idx < n) {
    const nxt = [];
    if (queue.length % 2 == 1) {
      // 奇数个，将第一个放在最后
      for (let i = 0; i < queue.length; i += 2) {
        ans[queue[i]] = deck[idx++];
        if (i !== 0 && i + 1 < queue.length) {
          nxt.push(queue[i + 1]);
        }
      }
      if (queue.length > 1) {
        nxt.push(queue[1]);
      }
    } else {
      // 偶数个，正常放置
      for (let i = 0; i < queue.length; i += 2) {
        ans[queue[i]] = deck[idx++];
        if (i + 1 < queue.length) {
          nxt.push(queue[i + 1]);
        }
      }
    }
    queue = nxt;
  }
  return ans;
};
// 0 1 2 3 4 5 6
