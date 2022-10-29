/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-29 13:12:42                                                  *
 * @LastModifiedDate: 2022-10-29 13:19:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 items ，其中 items[i] = [typei, colori, namei] ，描述第 i 件物品的类型、颜色以及名称。

// 另给你一条由两个字符串 ruleKey 和 ruleValue 表示的检索规则。

// 如果第 i 件物品能满足下述条件之一，则认为该物品与给定的检索规则 匹配 ：

// ruleKey == "type" 且 ruleValue == typei 。
// ruleKey == "color" 且 ruleValue == colori 。
// ruleKey == "name" 且 ruleValue == namei 。
// 统计并返回 匹配检索规则的物品数量 。
const KEY = {
  type: 0,
  color: 1,
  name: 2,
};
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let idx = KEY[ruleKey];
  let ans = 0;
  for (const item of items) {
    if (item[idx] === ruleValue) {
      ans++;
    }
  }
  return ans;
};
