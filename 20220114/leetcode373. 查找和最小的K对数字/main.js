/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-14 09:41:02                                                  *
 * @LastModifiedDate: 2022-01-17 17:13:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。

// 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。

// 请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  // 将nums1和nums2合并后排序，得到一个二者的排序数组，重要的是这个数组需要能够区分数属于哪一个nums
  // 遍历nums1/num2，查看它的值在合数组中的索引以判断数组对
  // num1    2 2   5 8     12     20
  // num2 1 1   2 4 5 10 11  12 18
  // 依次遍历，只能匹配它前面的非同数组数字

  // 声明ans
  const ans = [];
  const len1 = nums1.length;
  const len2 = nums2.length;
  // 插入排序
  const sumArr = [];
  // 记录插入排序的位置
  let idx = 0;
  for (let i = 0; i < len2; i++) {
    for (let j = idx; j < len1; j++) {
      // 数组2的值比当前的小，说明数组2先合入总数组
      if (nums2[i] < nums1[j]) {
        // 合入 sumArr 表明为数组1
        sumArr.push({
          value: nums2[i],
          type: 2,
        });
        // 记录位置
        idx = j;
        break;
      }
      if (nums2[i] >= nums1[j]) {
        // 数组2的值比当前的大，说明数组1先合入总数组继续遍历
        // 合入sumArr 表明为数组2
        sumArr.push({
          value: nums1[j],
          type: 1,
        });
      }
      if (j === 5) {
        idx++;
      }
    }
    // 插入到最后
    if (idx === len1) {
      sumArr.push({
        value: nums2[i],
        type: 2,
      });
    }
  }
  // 遍历合数组,获得k对数字
  // 保存前k个例子
  // 遍历合数组,获得k对数字
  // 保存前k个例子
  let m = k;
  const stack1 = [];
  const stack2 = [];
  for (let i = 0; i < sumArr.length && m > 0 - k; i++) {
    if (sumArr[i].type === 1) {
      stack1.push(sumArr[i].value);
      for (let j = 0; j < stack2.length && m > 0 - k; j++) {
        let ansPop = ans[ans.length - 1];
        if (ansPop && sumArr[i].value + stack2[j] < ansPop[0] + ansPop[1]) {
          ans.pop();
          ans.push([sumArr[i].value, stack2[j]]);
          ans.push(ansPop);
        } else {
          ans.push([sumArr[i].value, stack2[j]]);
        }

        m--;
      }
    }
    if (sumArr[i].type === 2) {
      stack2.push(sumArr[i].value);
      for (let j = 0; j < stack1.length && m > 0 - k; j++) {
        let ansPop = ans[ans.length - 1];
        if (ansPop && sumArr[i].value + stack1[j] < ansPop[0] + ansPop[1]) {
          ans.pop();
          ans.push([stack1[j], sumArr[i].value]);
          ans.push(ansPop);
        } else {
          ans.push([stack1[j], sumArr[i].value]);
        }
        m--;
      }
    }
  }
  return ans.splice(0, k);
};
// kSmallestPairs(
//   [2, 2, 5, 8, 12, 20],
//   [1, 1, 2, 4, 5, 10, 11, 12, 18, 20, 21, 22],
//   15
// );
// num1    2 3 5 8     12     20
// num2 1 1 2 4 5 10 11  12 18  20 21 22

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs2 = function (nums1, nums2, k) {
  // 贪心算法
  const ans = [];
  const len1 = nums1.length;
  const len2 = nums2.length;
  let idx1 = 0;
  let idx2 = 0;
  ans.push([nums1[idx1], nums2[idx2]]);
  k--;
  while (k > 0) {
    if (idx1 === len1 - 1) {
      // 直接添加
      ans.push([nums1[idx1], nums2[idx2 + 1]]);
      idx2++;
      k--;
      continue;
    }
    if (idx2 === len2 - 1) {
      // 直接添加
      ans.push([nums1[idx1 + 1], nums2[idx2]]);
      idx1++;
      k--;
      continue;
    }
    // 数组中的idx1 索引位置值与 nums2[0] 之和
    if (nums1[idx1 + 1] + nums2[0] > nums1[0] + nums2[idx2 + 1]) {
      // 添加数组一映射数组二
      for (let i = 0; i < idx1 + 1 && k > 0; i++) {
        ans.push([nums1[i], nums2[idx2 + 1]]);
        k--;
      }
      idx2++;
      console.log(ans);
      console.log("----------");
    } else if (nums1[idx1 + 1] + nums2[0] < nums1[0] + nums2[idx2 + 1]) {
      // 添加数组二映射数组一
      for (let i = 0; i < idx2 + 1 && k > 0; i++) {
        ans.push([nums1[idx1 + 1], nums2[i]]);
        k--;
      }
      idx1++;
      console.log(ans);
      console.log("----------");
    } else {
      // 相等时
      for (let i = 0; i < idx1 + 1 && k > 0; i++) {
        ans.push([nums1[i], nums2[idx2 + 1]]);
        k--;
      }
      for (let i = 0; i < idx2 + 1 && k > 0; i++) {
        ans.push([nums1[idx1 + 1], nums2[i]]);
        k--;
      }
      idx1++;
      idx2++;
      console.log(ans);
      console.log("----------");
    }
  }
  console.log(ans);
  return ans;
};
// kSmallestPairs2([1, 7, 11], [2, 4, 6], 9);

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs3 = function (nums1, nums2, k) {
  // 优先队列
  // 保存[idx1, 0]的索引
  // 声明ans
  const ans = [];
  // 声明优先队列
  const pq = new PriorityQueue(
    (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]]) < 0
  );
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    pq.offer([i, 0]);
  }
  console.log(pq.data);
  // 遍历pq出队
  while (pq.size > 0 && k-- > 0) {
    const newIdx = pq.poll();
    // 最小值进入答案
    ans.push([nums1[newIdx[0]], nums2[newIdx[1]]]);
    if (++newIdx[1] < nums2.length) {
      pq.offer(newIdx);
    }
  }
  return ans;
};

/**
 * @class PriorityQueue
 */
class PriorityQueue {
  /**
   * @constructor 构造函数
   * @param {Function} compare 比较函数
   */
  constructor(compare = (a, b) => a - b < 0) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }
  // 队尾元素
  tail() {
    return this.size > 0 ? this.data[this.size - 1] : null;
  }
  // 队首元素
  head() {
    return this.size > 0 ? this.data[0] : null;
  }
  // 元素出队
  poll() {
    if (this.size > 0) {
      this.size--;
      return this.data.shift();
    } else {
      return null;
    }
  }
  // 入队
  offer(val) {
    this.binaryInsert(this.size++, val);
  }
  // 二分插入
  binaryInsert(idx, val) {
    // 搜索区域 [0, length)
    let left = 0;
    let right = idx;
    let mid;
    // 遍历查找
    while (left < right) {
      // 中位数
      mid = Math.floor((left + right) / 2);
      if (this.compare(this.data[mid], val)) {
        // val比mid对应索引值小，选左边区域[mid+1, right)
        left = mid + 1;
      } else {
        // val比 mid对应索引的值大 ，选右边区域 [left, mid)
        right = mid;
      }
    }
    // 插入
    this.data.splice(left, 0, val);
  }
}
console.log(kSmallestPairs3([1, 7, 11], [2, 4, 6], 9));
