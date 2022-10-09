/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-09 10:44:19                                                  *
 * @LastModifiedDate: 2022-10-09 11:27:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s 和一个机器人，机器人当前有一个空字符串 t 。执行以下操作之一，直到 s 和 t 都变成空字符串：

// 删除字符串 s 的 第一个 字符，并将该字符给机器人。机器人把这个字符添加到 t 的尾部。
// 删除字符串 t 的 最后一个 字符，并将该字符给机器人。机器人将该字符写到纸上。
// 请你返回纸上能写出的字典序最小的字符串。

/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  const ap = new Array(26).fill(0).map((v) => {
    return [];
  });
  const n = s.length;
  for (let i = 0; i < n; i++) {
    ap[s[i].charCodeAt() - "a".charCodeAt()].push(i);
  }
  const stack = ap[0];
  if (stack.length == 0 || stack[stack.length] !== n - 1) {
    for (let i = 1; i < 26; i++) {
      for (const idx of ap[i]) {
        if (
          stack.length === 0 ||
          stack[stack.length - 1] < idx ||
          idx === stack[stack.length - 1] - 1
        ) {
          stack.push(idx);
        }
      }
    }
  }
  console.log(stack);
  let ans = "";
  for (const idx of stack) {
    ans += s[idx];
  }
  const set = new Set(stack);
  // 在处理最后一个字符时，需要判断第一个字符字符前的非字符是否满足可选条件
  let first = stack[0] - 1;
  const lastCh = s[stack[stack.length - 1] - 1];
  console.log(first, lastCh)
  if (stack.length > 1 && first >= 0 && s[first] <= lastCh) {
    while (s[first] <= lastCh && first >= 0) {
      ans += s[first];
      set.add(first);
      first--;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (!set.has(i)) {
      ans += s[i];
    }
  }
  return ans;
};

// s => azdc => zdc => dc => c  =>
// t =>      => a   => z  => zd => zdc
// p =>      =>     => a  => a  => acdz

//
//  s => hbasaabcmsvba =>
//  t =>          => ddccbbaa
//  p =>          =>

// "vzhofnpo"

// "fnopohzv"
// 预期：
// "fnohopzv"

// vzhofnpo  => npo   => po    => po   => po    =>
//           => vzhof => vzhon => vzho => vz    => vzpo
//                    => f     => fn   => fnoh  => fnoh => fnohopzv
