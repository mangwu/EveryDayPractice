// 题目描述
// 给你一个整数数组nums，请计算数组的中心位置。数组的中心位置是数组的一个下标， 其左侧所有元素相乘的积等于右侧所有元素相乘的积。数组第一个元素的左侧积为1，最后一个元素的右侧积为1。 如果数组有多个中心位置，应该返回最靠近左边的那一个，如果数组不存在中心位置，返回-1。

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const asyncFunc = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFunc())) {
    inputs.push(line);
  }
  const nums = inputs[0].split(" ").map((v) => parseInt(v));
  let prod = 1;
  for (const num of nums) {
    prod = prod * num;
  }
  let leftProd = 1;
  let rightProd = prod;
  let res = -1;
  for (let i = 0; i < nums.length; i++) {
    rightProd = rightProd / nums[i];
    if (leftProd === rightProd) {
      res = i;
      break;
    }
    leftProd = leftProd * nums[i];
  }
  console.log(res);
}
solution()
