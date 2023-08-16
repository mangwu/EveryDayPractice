/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-16 10:58:19                                                  *
 * @LastModifiedDate: 2023-08-16 16:29:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近 10 条推文。

// 实现 Twitter 类：

// Twitter() 初始化简易版推特对象
// void postTweet(int userId, int tweetId) 根据给定的 tweetId 和 userId 创建一条新推文。每次调用此函数都会使用一个不同的 tweetId 。
// List<Integer> getNewsFeed(int userId) 检索当前用户新闻推送中最近  10 条推文的 ID 。新闻推送中的每一项都必须是由用户关注的人或者是用户自己发布的推文。推文必须 按照时间顺序由最近到最远排序 。
// void follow(int followerId, int followeeId) ID 为 followerId 的用户开始关注 ID 为 followeeId 的用户。
// void unfollow(int followerId, int followeeId) ID 为 followerId 的用户不再关注 ID 为 followeeId 的用户。

class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  getParentIdx(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  insert(value) {
    if (value == null) return false;
    this.heap.push(value);
    this.shiftUp();
    return this;
  }
  shiftUp() {
    let idx = this.size() - 1;
    let pIdx = this.getParentIdx(idx);
    while (idx > 0 && this.compareFn(this.heap[idx], this.heap[pIdx]) < 0) {
      this.swap(idx, pIdx);
      idx = pIdx;
      pIdx = this.getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.heap.pop();
    this.swap(0, size - 1);
    const removeValue = this.heap.pop();
    this.shiftDown();
    return removeValue;
  }
  shiftDown() {
    let idx = 0;
    let size = this.size();
    let temp = idx;
    while (idx < size) {
      const lIdx = this.getLeftIdx(idx);
      const rIdx = this.getRightIdx(idx);
      if (lIdx < size && this.compareFn(this.heap[idx], this.heap[lIdx]) > 0) {
        idx = lIdx;
      }
      if (rIdx < size && this.compareFn(this.heap[idx], this.heap[rIdx]) > 0) {
        idx = rIdx;
      }
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

class Tweet {
  constructor(tweetId, num) {
    this.tweetId = tweetId;
    this.num = num;
  }
}

var Twitter = function () {
  this.num = 0; // 推文总数量
  this.data = new Map(); // 保存自己和关注的人的推文
  this.follows = new Map();
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.data.has(userId)
    ? this.data.get(userId).insert(new Tweet(tweetId, this.num))
    : this.data.set(
        userId,
        new MinHeap((a, b) => b.num - a.num).insert(
          new Tweet(tweetId, this.num)
        )
      );
  this.num++;
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const tweets = this.data.has(userId) ? [this.data.get(userId)] : [];
  const followees = this.follows.get(userId);
  if (followees) {
    for (const followee of followees) {
      if (this.data.has(followee)) {
        tweets.push(this.data.get(followee));
      }
    }
  }

  let res = [];
  const n = tweets.length;
  const polls = [];
  for (let i = 0; i < 10; i++) {
    let curIdx = -1;
    let curMax = new Tweet("", -1);
    const curPolls = [];
    for (let j = 0; j < n; j++) {
      const heap = tweets[j];
      if (!heap.isEmpty() && curMax.num < heap.peek().num) {
        curIdx = j;
        curMax = heap.poll();
        curPolls.push([curIdx, curMax]);
      }
    }
    console.log(curIdx, curMax);
    if (curIdx !== -1) {
      res.push(curMax);
      polls.push([curIdx, curMax]);
      for (const [idx, tweet] of curPolls) {
        if (idx !== curIdx) tweets[idx].insert(tweet);
      }
    } else break; // 没有任何推文可以直接退出
  }
  for (const [idx, tweet] of polls) {
    tweets[idx].insert(tweet);
  }
  return res.map((v) => v.tweetId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (this.follows.has(followerId)) {
    this.follows.get(followerId).add(followeeId);
  } else {
    this.follows.set(followerId, new Set([followeeId]));
  }
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.follows.has(followerId)) {
    this.follows.get(followerId).delete(followeeId);
  }
};

class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}
class NodeList {
  constructor(head = null, equalsFn = (a, b) => a === b) {
    this.head = head;
    this.equalsFn = equalsFn;
    this.count = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  getHead() {
    return this.head;
  }
  indexOf(ele) {
    let cur = this.head;
    let idx = 0;
    while (cur && idx < this.size()) {
      if (this.equalsFn(cur, ele)) return idx;
      cur = cur.next;
      idx++;
    }
    return -1;
  }
  remove(ele) {
    const idx = this.indexOf(ele);
    return this.removeAt(idx);
  }
  removeAt(pos) {
    if (pos === 0) {
      const res = this.head;
      this.head && (this.head = this.head.next);
      this.count && this.count--;
      return res;
    } else if (pos > 0 && pos < this.count) {
      const preNode = this.getNodeAt(pos - 1);
      const node = this.getNodeAt(pos);
      this.count--;
      preNode.next = node.next;
      node.next = null;
      return node;
    }
    return null;
  }
  getNodeAt(pos) {
    if (pos >= 0 && pos < this.count) {
      let node = this.head;
      while (pos) {
        node = node.next;
        pos--;
      }
      return node;
    }
    return undefined;
  }
  addHead(node) {
    node.next = this.head;
    this.head = node;
    return this;
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

var Twitter = function () {
  this.time = 0;
  this.data = new Map(); // 保存自己和关注的人的推文，使用链表
  this.follows = new Map();
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.data.has(userId)
    ? this.data.get(userId).addHead(new Node([this.time, tweetId]))
    : this.data.set(userId, new NodeList(new Node([this.time, tweetId])));
  const curNodeList = this.data.get(userId);
  this.time++; // 每次添加都增加一次计算时间
  if (curNodeList.size() > 10) {
    // 移除最后一个，节省空间
    curNodeList.removeAt(10);
  }
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const lists = this.data.has(userId) ? [this.data.get(userId)] : [];
  const followers = this.follows.get(userId); // userId关注的人
  if (followers) {
    for (const follower of followers) {
      if (this.data.has(follower)) {
        lists.push(this.data.get(follower));
      }
    }
  }
  const heap = new MinHeap((a, b) => b.val[0] - a.val[0]);
  lists.forEach((v) => {
    v.head && heap.insert(v.head);
  });
  // 相当于合并K个有序链表，取出前10个
  const res = [];
  while (!heap.isEmpty()) {
    const cur = heap.poll();
    cur.next && heap.insert(cur.next);
    res.push(cur.val[1]);
    if (res.length === 10) return res;
  }
  return res;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (this.follows.has(followerId)) {
    this.follows.get(followerId).add(followeeId);
  } else {
    this.follows.set(followerId, new Set([followeeId]));
  }
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.follows.has(followerId)) {
    this.follows.get(followerId).delete(followeeId);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
