/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 21:22:07                                                  *
 * @LastModifiedDate: 2025-02-15 21:53:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 你收到了一串由两端设备传递的TLV格式的消息，现在你需要根据这串消息生成一个对应的(tag, length, valueOffset)列表。

// 这串消息其实是由许多小组成的，每一小组里包含了tag、length、value。其中，tag和length都只占1个字节。

// 需要你生成一个结果数组，这个数组里有我们提前给出的一些tag。你需要为这些tag找出它们在消息里对应的length和valueOffset。这里的valueOffset指的是value在整串消息里的起始位置（从0开始数）。

// 如果有些tag在消息里找不到，就用0填充它们的length和valueOffset。

// 这串消息有时可能会不完整，如果发现消息里的一组TLV不完整，请直接忽略它。

// 输入

// 第一行：一串消息，长度不超过10000。 这串消息用十六进制来表示，例如：0F04ABABABAB。这表示tag是15（十六进制的0F），length是4，接着的8个字符是value的内容。

// 第二行：一个数字n，表示我们给出的tag的数量（0 < n < 1000）。 接下来的n行：我们给出的n个tag，按递增顺序排列。

// 输出

// 输出n行，每行对应给出tag的length和valueOffset。

// 示例

// 输入

// 0F04ABABABAB 1 15

// 输出

// 4 2

// 说明 tag是15，对应的数据长度为4，value从第3个字节开始，所以偏移量为2。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // 一个字节是8位，可以用两个十六进制数字表示
  // tag和length都是一个字节，也就是两位
  const str = inputs[0];
  const n = str.length;
  const hash = new Map();
  for (let i = 0; i < n; 11) {
    const tag = parseInt(str.substring(i, i + 2), 16);
    const length = parseInt(str.substring(i + 2, i + 4), 16);
    hash.set(tag, [length, (i + 4) / 2]);
    i = length * 2 + 4;
  }
  for (let i = 2; i < inputs.length; i++) {
    console.log(hash.get(parseInt(inputs[i])).join(" "));
  }
}
solution();
