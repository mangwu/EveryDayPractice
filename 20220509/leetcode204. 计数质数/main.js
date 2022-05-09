/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-09 07:52:45                                                  *
 * @LastModifiedDate: 2022-05-09 10:04:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      ans++;
    }
  }
  return ans;
};

// 0 和 1 不是质数
// 判断一个数是否是质数
const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // 埃氏筛 => 一个质数的2倍数，3倍数，...x倍数一定不是质数
  // => 初始时假设所有数在判断上都是质数，以2这个质数开始通过筛去非质数
  // => 后序的非质数不会被误判为质数，因为如果是非质数，那么一定有x * y = cur，
  // 对于所有x，y, x < y一定存在质数的x（非质数的x可以进一步分解），那么在遍历到x时就已经标记了cur为非质数了
  // => 可以从x * x开始进行标记，而不是从2开始，因为对于2 * x 等 它肯定已经被之前的2或者其它质数标记过了
  const isPrime = new Array(n).fill(1);
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ans++;
      let j = i;
      while (i * j < n) {
        isPrime[i * j] = 0;
        j++;
      }
    }
  }
  return ans;
};

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // 埃式筛的时间复杂度为O(nloglogn)
  // 在标记后序的非质数元素时，仍然会有重复标记
  // 如45 会被3 5 标记两次，这就增加了时间复杂度
  // 为了保证每个非质数只被标记一次，需要知晓非负整数的一下性质
  // 1. 非负整数要么是质数，要么不是质数
  // 2. 非质数的一个非1最小约数一定是质数，非本身最大约数可能是质数也可能是非质数
  // 为了完成一次标记，不再仅对x为质数数进行倍数标记，而是对所有整数都要进行一种有规则标记

  // 证明1: 非质数一定都能通过一种方式被标记
  // 由性质2可知，非质数的非1最小约数一定是质数，所以对于已经存在的质数，可以与当前数相乘得到标记数
  // 所有的非质数都会被标记，因为从小到大遍历了一遍数，那么，由性质2可知，非质数都被标记了

  // 证明2：不存在未被延后标记的非质数
  // 如果一个非质数a未被标记，那么存在x * y  x是非1的最小质数，
  // 再遍历到y时,由于x这个质数已经存在，故而a一定是被标记过的

  // 证明3：遍历相乘质数时应该保证到x mod prime(i) = 0时停止
  // 为了保证只标记一次非质数，应该遵守本条件，如果不限制质数遍历条件
  // 假设prime(i) * a = x ，prime(i)是x的最小约数,继续遍历 使得prime(i + 1) * x 被标记
  // 这个时候后序的遍历数 a * prime(i + 1) 再遍历到prime(i)时，就会再次标记prime(i + 1) * x
  // 因为 a * prime(i+1) * prime(i) = x * prime(i+1)， 这种标记是不必要的

  const isPrime = new Array(n).fill(1);
  const primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
    // 每一个数都有标记后面的数
    for (let j = 0; j < primes.length && i * primes[j] < n; j++) {
      isPrime[i * primes[j]] = 0;
      // 遍历到primes[j]是i的最小约数
      if (i % primes[j] == 0) {
        break;
      }
    }
  }
  return primes.length;
};
