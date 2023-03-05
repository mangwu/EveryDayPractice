/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-05 11:00:18                                                  *
 * @LastModifiedDate: 2023-03-05 12:35:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 nums ，下标从 0 开始。

// 如果在下标 i 处 分割 数组，其中 0 <= i <= n - 2 ，使前 i + 1 个元素的乘积和剩余元素的乘积互质，则认为该分割 有效 。

// 例如，如果 nums = [2, 3, 3] ，那么在下标 i = 0 处的分割有效，因为 2 和 9 互质，而在下标 i = 1 处的分割无效，因为 6 和 3 不互质。在下标 i = 2 处的分割也无效，因为 i == n - 1 。
// 返回可以有效分割数组的最小下标 i ，如果不存在有效分割，则返回 -1 。

// 当且仅当 gcd(val1, val2) == 1 成立时，val1 和 val2 这两个值才是互质的，其中 gcd(val1, val2) 表示 val1 和 val2 的最大公约数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function (nums) {
  const n = nums.length;
  if (n === 1) return -1;
  const prefixPoduct = new Array(n - 1).fill(0);
  const suffixProduct = new Array(n - 1).fill(0);
  prefixPoduct[0] = nums[0].toString();
  suffixProduct[0] = nums[n - 1].toString();
  for (let i = 1; i < n - 1; i++) {
    prefixPoduct[i] = multiply(prefixPoduct[i - 1], nums[i].toString());
    suffixProduct[i] = multiply(
      suffixProduct[i - 1],
      nums[n - i - 1].toString()
    );
  }
  for (let i = 0; i < n - 1; i++) {
    if (gcd(prefixPoduct[i], suffixProduct[n - 2 - i]) === "1") return i;
  }
  return -1;
};

/**
 * @description 大数取最小公倍数
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
var gcd = function (a, b) {
  if (b === "0") return a;
  return gcd(b, remainder(a, b));
};
// 解答超出时间限制

//
/**
 * @description 大数相乘
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == "0" || num2 == "0") {
    return "0";
  }
  const n1 = num1.length;
  const n2 = num2.length;
  if (n2 > n1) {
    return multiply(num2, num1);
  }
  const everyNums = [];
  for (let i = n2 - 1; i >= 0; i--) {
    let res = "";
    let carry = 0;
    for (let j = n1 - 1; j >= 0; j--) {
      let mul = num1[j] * num2[i] + carry;
      res = (mul % 10) + res;
      carry = Math.floor(mul / 10);
    }
    if (carry > 0) {
      res = carry + res;
    }
    everyNums.push(res + "0".repeat(n2 - i - 1));
  }
  const ans = everyNums.reduce((pre, cur) => {
    let lenp = pre.length;
    let lenc = cur.length;
    let carry = 0;
    let res = "";
    for (let i = lenp - 1, j = lenc - 1; i >= 0 || j >= 0; i--, j--) {
      const x = pre[i] !== undefined ? Number(pre[i]) : 0;
      const y = cur[j] !== undefined ? Number(cur[j]) : 0;
      let addition = x + y + carry;
      carry = Math.floor(addition / 10);
      res = (addition % 10) + res;
    }
    if (carry > 0) {
      res = carry + res;
    }
    return res;
  });
  return ans;
};
/**
 * @description 大数取余
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var remainder = function (num1, num2) {
  // 大数取余
  if (num1 === num2) return "1";
  if (comparison(num1, num2) === -1) return num1;
  const n1 = num1.length;
  const n2 = num2.length;
  let divisor = num1.slice(0, n2 - 1); // 除数（被除数为num2）
  // 预先求出num2的1-9乘积
  let nums2 = [num2];
  for (let i = 2; i < 10; i++) {
    nums2.push(multiply(num2, String(i)));
  }
  for (let i = n2 - 1; i < n1; i++) {
    divisor += num1[i];
    // 进行除法
    if (comparison(divisor, num2) === -1) {
      continue;
    }
    let x = 1;
    while (x < 9 && comparison(divisor, nums2[x]) >= 0) {
      x++;
    }
    divisor = subtraction(divisor, nums2[x - 1]);
  }
  return divisor ? divisor : "0";
};

/**
 * @description 大数比较
 * @param {string} num1
 * @param {string} num2
 * @return {number} 0 相等 1 num1大 -1num2大
 */
var comparison = function (num1, num2) {
  const n1 = num1.length;
  const n2 = num2.length;
  if (num1 === num2) return 0;
  if (n2 === n1) {
    for (let i = 0; i < n1; i++) {
      if (num1[i] > num2[i]) {
        return 1;
      } else if (num1[i] < num2[i]) {
        return -1;
      }
    }
  }
  return n1 > n2 ? 1 : -1;
};

/**
 * @description 大数减法
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var subtraction = function (num1, num2) {
  const numDigs1 = num1.split("");
  const numDigs2 = num2.split("");
  let borrow = false;
  const n1 = num1.length;
  const n2 = num2.length;
  for (let i = 1; i <= n1; i++) {
    let numDig1 = numDigs1[n1 - i];
    let numDig2 = n2 - i >= 0 ? numDigs2[n2 - i] : 0;
    if (borrow) {
      numDig1 = numDig1 - 1;
      borrow = false;
    }
    let cur = numDig1 - numDig2;
    if (cur < 0) {
      borrow = true;
      cur = cur + 10;
    }
    numDigs1[n1 - i] = cur;
  }
  // 去0;
  let idx = 0;
  while (numDigs1[idx] === 0) {
    idx++;
  }
  return numDigs1.slice(idx).join("");
};

console.log(
  remainder(
    "2771916792927601069273805198184408775548289513123152120932644713756276377044459",
    "833293"
  )
);
