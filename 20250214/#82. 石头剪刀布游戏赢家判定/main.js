/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 19:20:30                                                  *
 * @LastModifiedDate: 2025-02-14 19:30:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 石头剪刀布游戏有 3 种出拳形状：石头、剪刀、布。分别用字母A、B、C表示。 游戏规则： 1、出拳形状之间的胜负规则如下： A > B； B > C； C > A； ">" 左边一个字母，表示相对优势形状。右边一个字母，表示相对劣势形状。

// 2、当本场次中有且仅有一种出拳形状优于其他出拳形状，则该形状的玩家是胜利者。否则认为是平局。 例如1：三个玩家出拳分别是A，B，C。由于三方优势循环（即没有任何一方优于其他出拳者），判断为平局。 例如2：三个玩家出拳分别是A，B，B。出拳A的获胜。 例如3：三个玩家出拳全部是A。判为平局。

// 3、当发生平局，没有赢家。有多个胜利者时，同为赢家。

// 输入描述

// 在一场游戏中，每个玩家的信息为一行。玩家数量不超过1000。每个玩家信息有2个字段，用空格隔开； 玩家ID：一个仅由英文字母和数字组成的字符串 出拳形状：以英文大写字母表示，A、B、C形状。 出拳时间：正整数，越小表示时间越早

// 例如：

// abc1 A

// xyz B

// 解释：玩家abc1出拳为石头（A）。玩家xyz出拳为剪刀（B）

// 输出描述

// 输出为赢家的玩家ID列表（一个或多个），每个ID一行，按字符串升序排列。如果没有赢家，输出为”NULL“字符串。 例如：

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // 如果ABC三种都有，或者只有一种时，则没有赢家
  // 只有两种时，根据ABC之间的胜负关系决定赢家
  const hash = new Map();
  for (const input of inputs) {
    const [name, info] = input.split(" ");
    hash.has(info) ? hash.get(info).push(name) : hash.set(info, [name]);
    if (hash.size === 3) {
      console.log("NULL");
      return;
    }
  }
  if (hash.size === 1) {
    console.log("NULL");
    return;
  }
  const keys = [...hash.keys()];
  const printWinner = (key) => {
    const arr = hash.get(key).sort();
    for (const item of arr) console.log(item);
  };
  if (keys[0] === "A") {
    if (keys[1] === "B") printWinner(keys[0]);
    else printWinner(keys[1]);
  } else if (keys[0] === "B") {
    if (keys[1] === "C") printWinner(keys[0]);
    else printWinner(keys[1]);
  } else {
    if (keys[1] === "A") printWinner(keys[0]);
    else printWinner(keys[1]);
  }
}

solution();
