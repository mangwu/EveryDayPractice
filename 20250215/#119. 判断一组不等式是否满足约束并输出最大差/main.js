// 给定一组不等式，判断是否成立并输出不等式的最大差(输出浮点数的整数部分)

// 要求:

// 不等式系数为 double类型，是一个二维数组 不等式的变量为 int类型，是一维数组; 不等式的目标值为 double类型，是一维数组 不等式约束为字符串数组，只能是:“>”,“>=”,“<”,“<=”,“=”，

// 例如，不等式组:

// a11x1+a12x2+a13x3+a14x4+a15x5<=b1;

// a21x1+a22x2+a23x3+a24x4+a25x5<=b2;

// a31x1+a32x2+a33x3+a34x4+a35x5<=b3;

// 最大差 = max{(a11x1+a12x2+a13x3+a14x4+a15x5-b1),(a21x1+a22x2+a23x3+a24x4+ a25x5-b2),(a31x1+a32x2+a33x3+a34x4+a35x5-b3)},

// 类型为整数(输出浮点数的整数部分)

// 输入描述

// a11,a12,a13,a14,a15,a21,a22,a23,a24,a25, a31,a32,a33,a34,a35,x1,x2,x3,x4,x5,b1,b2,b3,<=,<=,<=

// 1)不等式组系数(double类型):

// a11,a12,a13,a14,a15

// a21,a22,a23,a24,a25

// a31,a32,a33,a34,a35

// 2)不等式变量(int类型):x1,x2,x3,x4,x5

// 3)不等式目标值(double类型):b1,b2,b3

// 4)不等式约束(字符串类型):<=,<=,<=

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const strArr = inputs[0].split(";");
  const ops = strArr[strArr.length - 1].split(",");
  const n = ops.length; // n组不等式
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(strArr[i].split(",").map((v) => parseFloat(v)));
  }
  const xArr = strArr[n].split(",").map((v) => parseFloat(v));
  const targetArr = strArr[n + 1].split(",").map((v) => parseFloat(v));
  let maxDiff = -Infinity;
  let flag = true;
  const check = (num1, num2, op) => {
    if (num1 === num2) return op.indexOf("=") !== -1;
    if (num1 > num2) return op.indexOf(">") !== -1;
    if (num1 < num2) return op.indexOf("<") !== -1;
  };
  for (let i = 0; i < n; i++) {
    const curArr = arr[i];
    const m = curArr.length;
    let leftSum = 0;
    for (let j = 0; j < m; j++) {
      leftSum += curArr[j] * xArr[j];
    }
    const rightTarget = targetArr[i];
    flag = flag && check(leftSum, rightTarget, ops[i]);
    maxDiff = Math.max(maxDiff, leftSum - rightTarget);
  }
  console.log(flag, Math.floor(maxDiff));
}
solution();
