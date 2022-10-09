/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-09 10:44:19                                                  *
 * @LastModifiedDate: 2022-10-09 14:46:37                                      *
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
          (idx === stack[stack.length - 1] - 1 && idx)
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
  console.log(first, lastCh);
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

// "vzhofnpo"

// "fnopohzv"
// 预期：
// "fnohopzv"

// vzhofnpo  => npo   => po    => po   => po    =>
//           => vzhof => vzhon => vzho => vz    => vzpo
//                    => f     => fn   => fnoh  => fnoh => fnohopzv

/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  let ap = new Array(26).fill(0).map((v) => {
    return [];
  });
  const n = s.length;
  for (let i = 0; i < n; i++) {
    ap[s[i].charCodeAt() - "a".charCodeAt()].push(i);
  }
  // 过滤掉不存在的字符
  ap = ap.filter((v) => v.length !== 0);
  const len = ap.length;
  // 模拟
  let ans = "";
  let t = [];
  let pre = 0;
  let preIdx = 0;
  outer: for (let i = 0; i < len; i++) {
    const m = ap[i].length;
    for (let k = 0; k < m; k++) {
      for (let j = pre; j < ap[i][k]; j++) {
        t.push(s[j]);
      }
      if (ap[i][k] == n - 1) {
        ans += s[ap[i][k]];
        break outer;
      }
      if (ap[i][k] < preIdx) {
        continue;
      }
      preIdx = ap[i][k];
      pre = ap[i][k] + 1;
      ans += s[ap[i][k]];
      // t中的字符能不能选是一个问题
      // 当前最后一个字符
      if (k === m - 1) {
        // 找到符合条件的a，b
        let a = 1;
        let b = 0;
        outer2: for (; a + i < len; a++) {
          b = 0;
          for (; b < ap[i + a].length; b++) {
            if (ap[i + a][b] < ap[i][k]) {
              continue;
            } else {
              break outer2;
            }
          }
        }
        let nextCh = i < len - 1 && k === m - 1 ? s[ap[i + a][b]] : "A";
        while (t.length > 0 && t[t.length - 1] <= nextCh) {
          ans += t.pop();
        }
      }
    }
  }
  while (t.length > 0) {
    ans += t.pop();
  }
  return ans;
};
