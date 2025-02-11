// 数组去重和排序
// 题目
// 给定一个乱序的数组，删除所有的重复元素，使得每个元素只出现一次，并且按照出现的次数从高到低进行排序，相同出现次数按照第一次出现顺序进行先后排序。

// 输入描述 一个数组

// 输出描述 去重排序后的数组

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const iterFunc = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await iterFunc())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(",");
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (map.has(num)) map.get(num)[0]++;
    else map.set(num, [1, i]);
  }
  const resArr = [...map].sort((a, b) => {
    if (a[1][0] !== b[1][0]) return b[1][0] - a[1][0];
    return a[1][1] - b[1][1];
  });
  console.log(resArr.map((v) => v[0]).join(","));
}
solution()