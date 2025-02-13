/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 20:54:46                                                  *
 * @LastModifiedDate: 2025-02-13 22:55:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在做物理实验时，为了计算物体移动的速率，通过相机等工具周期性的采样物体移动距离。

// 由于工具故障，采样数据存在误差甚至错误的情况。

// 需要通过一个算法过滤掉不正确的采样值。

// 不同工具的故障模式存在差异，算法的各类门限会根据工具类型做相应的调整。

// 请实现一个算法，计算出给定一组采样值中正常值的最长连续周期。

// 判断第 i 个周期的采样数据 S[i] 是否正确的规则如下（假定物体移动速率不超过10个单元，前一个采样周期 S[i-1] )：

// S[i] <= 0，即为错误值 S[i] < S[i-1]，即为错误值 S[i] - S[i-1] >= 10，即为错误值 其它情况为正常值 判断工具是否故障的规则如下：

// 在M个周期内，采样数据为错误值的次数为T（次数可以不连续），则工具故障。 判断故障恢复的条件如下：

// 产生故障后的P个周期内，采样数据一直为正常值，则故障恢复。 错误采样数据的处理方式：

// 检测到故障后，丢弃从故障开始到故障恢复的采样数据。 在检测到工具故障之前，错误的采样数据，则由最近一个正常值代替；如果前面没有正常的采样值，则丢弃此采样数据。 给定一段周期的采样数据列表S，计算正常值的最长连续周期。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // m:故障确认周期,t:确认出现故障的最小次数,p：恢复正常的连续正常数据次数
  const [m, t, p] = inputs[0].split(" ").map((v) => parseInt(v));
  const arr = inputs[1].split(" ").map((v) => parseInt(v));
  const n = arr.length;
  // [val, true] 正常值
  // [val, false] 遗弃值
  const res = [];
  // 判断是否错误的函数
  const isFault = (i, pre) => {
    if (arr[i] <= 0) return true;
    if (arr[i] >= pre && arr[i] - pre < 10) return false;
    return true;
  };
  let pre = 0; // 上一个最近的正常值

  for (let i = 0; i < n; i++) {
    let cycle = m;
    let errorNum = 0; // 在m周期内的故障次数
    // 进行一个周期的判断
    while (cycle && i < n) {
      if (isFault(i, pre)) {
        errorNum++;
      } else pre = arr[i]; // 修改最近的正常值
      res.push([pre, Boolean(pre)]);
      i++;
      cycle--;
      if (errorNum === t) {
        // 需要进行故障恢复
        let k = 0; // 连续正常值的需要p次
        while (i < n && k !== p) {
          if (isFault(i, pre)) {
            k = 0;
          } else k++;
          i++;
          res.push([pre, false]); // 正确错误都被遗弃的值
        }
        break; // 恢复正常后重新开始一个周期
      }
    }
    i--;
  }
  let ans = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i][1]) {
      let j = i + 1;
      while (j < res.length && res[j][1]) {
        j++;
      }
      let curRes = j - i;
      i = j - 1;
      ans = Math.max(curRes, ans);
    }
  }
  console.log(ans);
}
solution();
