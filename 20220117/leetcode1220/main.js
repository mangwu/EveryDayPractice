/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-17 18:31:30                                                  *
 * @LastModifiedDate: 2022-01-17 19:03:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n，请你帮忙统计一下我们可以按下述规则形成多少个长度为 n 的字符串：

// 字符串中的每个字符都应当是小写元音字母（'a', 'e', 'i', 'o', 'u'）
// 每个元音 'a' 后面都只能跟着 'e'
// 每个元音 'e' 后面只能跟着 'a' 或者是 'i'
// 每个元音 'i' 后面 不能 再跟着另一个 'i'
// 每个元音 'o' 后面只能跟着 'i' 或者是 'u'
// 每个元音 'u' 后面只能跟着 'a'
// 由于答案可能会很大，所以请你返回 模 10^9 + 7 之后的结果。
const modNumber = Math.pow(10, 9) + 7;
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  // n = 1时有五种情况
  // n = 2时，五种情况之后的情况各自相加，a开头只有一种情况，e开头有两种情况，i开头有四种情况，o开头有两种情况，u开头只有一种情况
  // 即 a: 1 e:2 i:4 o:2 u:1
  // n = 3 时 在n等于二的继基础上，
  // a开头的情况：1(a) * 2(e), 2
  // e开头的情况(1(a) + 4(i)), 5
  // i开头的情况(1(a) + 2(e) + 2(o) + 1(u)), 6
  // o开头的情况(4(i) + 1(u)),5
  // u开头的情况(1(a)) 1
  // 合为 19
  // a => 1e
  // e => 1a + 1i
  // i => 1a + 1e + 1o + 1u
  // o => 1i + 1u
  // u => 1a
  // 3a + 2e + 2i + 1o + 2u

  let a = 1,
    e = 1,
    i = 1,
    o = 1,
    u = 1;
  for (let k = 1; k < n; k++) {
    // 保留上一轮各自的数量
    const prea = a;
    const pree = e;
    const prei = i;
    const preo = o;
    const preu = u;
    // 通过上一轮计算下一轮各自的数量
    a = (pree + prei + preu) % modNumber;
    e = (prei + prea) % modNumber;
    i = (pree + preo) % modNumber;
    o = (prei) % modNumber;
    u = (prei + preo) %modNumber;
  }
  // 最终结果为aeiou之和
  return (
    ((a % modNumber) +
      (e % modNumber) +
      (i % modNumber) +
      (o % modNumber) +
      (u % modNumber)) %
    modNumber
  );
};
console.log(countVowelPermutation(20000));
