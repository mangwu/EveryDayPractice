/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 02:22:50                                                  *
 * @LastModifiedDate: 2025-02-15 02:59:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 将一个 csv 格式的数据文件中包含有单元格引用的内容替换为对应单元格内容的实际值。 comma separated values(CSV) 逗号分隔值，csv 格式的数据文件使用逗号 "," 作为分隔符将各单元的内容进行分隔。

// 输入描述

// 1、输入只有一行数据，用逗号分隔每个单元格，行尾没有逗号。最多26个单元格，对应编号A~Z。 2、每个单元格的内容包含字母和数字，以及使用 '<>' 分隔的单元格引用，例如：<A>表示引用第一个单元的值。 3、每个单元格的内容，在替换前和替换后均不超过100个字符。 4、引用单元格的位置不受限制，允许排在后面的单元格被排在前面的单元格引用。 5、不存在循环引用的情况，比如下面这种场景是不存在的：

// A单元恪：aCd<B>8U
// B单元格：KAy<A>uZq0
// 6、不存在多重 '<>' 的情况，一个单元只能引用一个其他单元格。比如下面这种场景是不存在的：

// A单元格：aCdOu
// B单元格：kAydzco
// C单元格：y<<A><B>>d
// 输出描述

// 输出替换后的结果

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const strArr = inputs[0].split(",");
  const n = strArr.length;
  // 记录包含引用的个数
  const nums = new Array(n).fill(0);
  let total = 0;
  const ACode = "A".charCodeAt();
  const ZCode = "Z".charCodeAt();
  const getQuote = (str) => {
    const res = [];
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "<" && str[j + 2] === ">") {
        const code = str[j + 1].charCodeAt();
        if (code >= ACode && code <= ZCode) res.push(str.substring(j, j + 3));
      }
    }
    return res;
  };
  for (let i = 0; i < n; i++) {
    const res = getQuote(strArr[i]);
    total += res.length;
    nums[i] = res.length;
  }
  while (total) {
    for (let i = 0; i < n; i++) {
      // 有引用
      if (nums[i]) {
        const quotes = getQuote(strArr[i]);
        for (const quote of quotes) {
          const idx = quote[1].charCodeAt() - ACode;
          if (!nums[idx]) {
            // 可以替换
            nums[i]--;
            total--;
            const j = strArr[i].indexOf(quote);
            strArr[i] =
              strArr[i].substring(0, j) +
              strArr[idx] +
              strArr[i].substring(j + 3);
          }
        }
      }
    }
  }
  console.log(strArr.join(","));
}
solution();
