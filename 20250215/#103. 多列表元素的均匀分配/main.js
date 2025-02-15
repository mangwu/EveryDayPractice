/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 18:26:46                                                  *
 * @LastModifiedDate: 2025-02-15 19:04:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 推荐多样性需要从多个列表中选择元素，一次性要返回 N 屏数据（窗口数量），每屏展示 K 个元素（窗口大小），选择策略：

// 1、各个列表元素需要做穿插处理，即先从第一个列表中为每屏选择一个元素，再从第二个列表中为每屏选择一个元素，依次类推

// 2、每个列表的元素尽量均分为 N 份，如果不够 N 个，也要全部分配完，参考样例图：

// （1）从第一个列表中选择 4 条 0 1 2 3，分别放到 4 个窗口中

// （2）从第二个列表中选择 4 条 10 11 12 13，分别放到 4 个窗口中

// （3）从第三个列表中选择 4 条 20 21 22 23，分别放到 4 个窗口中

// （4）再从第一个列表中选择 4 条 4 5 6 7，分别放到 4 个窗口中

// （5）再从第一个列表中选择，由于数量不足 4 条，取剩下的 2 条，放到 窗口1 和 窗口2

// （6）再从第二个列表中选择，由于数量不足 4 条并且总的元素数达到窗口要求，取 18 19 放到 窗口3 和 窗口4

// 输入描述

// 第一行输入为 N，表示需要输出的窗口数量，取值范围 [1, 10]

// 第二行输入为 K，表示每个窗口需要的元素数量，取值范围 [1, 100]

// 之后的行数不定（行数取值范围 [1, 10]），表示每个列表输出的元素列表。元素之间以空格隔开，已经过排序处理，每个列表输出的元素数量取值范围 [1, 100]

// 输出描述

// 输出元素列表，元素数量 = 窗口数量 * 窗口大小，元素之间以空格分隔，多个窗口合并为一个列表输出，参考样例：

// 先输出窗口1的元素列表，再输出窗口2的元素列表，再输出窗口3的元素列表，最后输出窗口4的元素列表

// 备注

// 1、每个列表会保证元素数量满足窗口要求，不需要考虑元素不足情况

// 2、每个列表的元素已去重，不需要考虑元素重复情况

// 3、每个列表的元素列表均不为空，不需要考虑列表为空的情况

// 4、每个列表的元素列表已经过排序处理，输出结果要保证不改变同一个列表的元素顺序

// 5、每个列表的元素数量可能是不同的

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
  const n = parseInt(inputs[0]); // n个窗口
  const k = parseInt(inputs[1]); // 每个窗口包含k个元素
  const list = [];
  for (let i = 2; i < inputs.length; i++) {
    list.push(
      inputs[i]
        .split(" ")
        .map((v) => parseInt(v))
        .reverse()
    );
  }
  const res = new Array(n).fill(0).map(() => new Array(k).fill(0));
  let total = n * k;
  const m = list.length; // 备选列表个数
  let i = 0; // 行索引
  let j = 0; // 列索引
  while (total) {
    // 从第一个列表开始选择
    for (let x = 0; x < m; x++) {
      const arr = list[x];
      let num = n;
      // 选择n个到窗口中
      while (arr.length && num && total) {
        res[i++][j] = arr.pop();
        num--;
        total--;
        if (i === n) {
          i = 0;
          j++; // 列数索引增加
          break;
        }
      }
      if (!total) break;
    }
  }
  console.log(res.map((v) => v.join(" ")).join(" "));
}
solution();
