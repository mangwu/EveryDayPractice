/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-07 08:46:04                                                  *
 * @LastModifiedDate: 2023-03-07 21:54:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果你熟悉 Shell 编程，那么一定了解过花括号展开，它可以用来生成任意字符串。

// 花括号展开的表达式可以看作一个由 花括号、逗号 和 小写英文字母 组成的字符串，定义下面几条语法规则：

// 如果只给出单一的元素 x，那么表达式表示的字符串就只有 "x"。R(x) = {x}
// 例如，表达式 "a" 表示字符串 "a"。
// 而表达式 "w" 就表示字符串 "w"。
// 当两个或多个表达式并列，以逗号分隔，我们取这些表达式中元素的并集。R({e_1,e_2,...}) = R(e_1) ∪ R(e_2) ∪ ...
// 例如，表达式 "{a,b,c}" 表示字符串 "a","b","c"。
// 而表达式 "{{a,b},{b,c}}" 也可以表示字符串 "a","b","c"。
// 要是两个或多个表达式相接，中间没有隔开时，我们从这些表达式中各取一个元素依次连接形成字符串。R(e_1 + e_2) = {a + b for (a, b) in R(e_1) × R(e_2)}
// 例如，表达式 "{a,b}{c,d}" 表示字符串 "ac","ad","bc","bd"。
// 表达式之间允许嵌套，单一元素与表达式的连接也是允许的。
// 例如，表达式 "a{b,c,d}" 表示字符串 "ab","ac","ad"​​​​​​。
// 例如，表达式 "a{b,c}{d,e}f{g,h}" 可以表示字符串 "abdfg", "abdfh", "abefg", "abefh", "acdfg", "acdfh", "acefg", "acefh"。
// 给出表示基于给定语法规则的表达式 expression，返回它所表示的所有字符串组成的有序列表。

// 假如你希望以「集合」的概念了解此题，也可以通过点击 “显示英文描述” 获取详情。

/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
  // const set = new Set(); // 去重
  // 要考虑的情况：
  // 1. 正常组合
  // 2. 字符与{}相乘
  // 3. {}与{}相乘
  const dfs = (expression) => {
    let index = expression.indexOf("{");
    if (index === -1) {
      return [...new Set(expression.split(","))];
    }
    const n = expression.length;
    let brackets = 0;
    let flag = index === 0;
    if (flag) {
      for (let i = 0; i < n; i++) {
        if (expression[i] === "{") {
          brackets++;
        } else if (expression[i] === "}") {
          brackets--;
        }
        if (brackets === 0 && i !== n - 1) {
          flag = false;
          break;
        }
      }
    }
    // 嵌套关系处理
    if (flag) {
      let pre = 1;
      let res = [];
      let brackets = 0;
      for (let i = 1; i < n - 1; i++) {
        if (expression[i] == "{") brackets++;
        if (expression[i] == "}") brackets--;
        if (expression[i] === "," && brackets === 0) {
          res = res.concat(dfs(expression.substring(pre, i)));
          pre = i + 1;
        } else if (i == n - 2) {
          res = res.concat(dfs(expression.substring(pre, i + 1)));
        }
      }
      return [...new Set(res)];
    } else {
      const res = [];
      for (let i = 0; i < n; i++) {
        if (expression[i] === "{") {
          let brackets = 1;
          let start = i;
          i++;
          while (brackets !== 0) {
            if (expression[i] === "{") {
              brackets++;
            } else if (expression[i] === "}") {
              brackets--;
            }
            i++;
          }
          res.push(dfs(expression.substring(start, i)));
          i--;
        } else {
          let start = i;
          while (expression[i] !== "{" && i < n) {
            i++;
          }
          res.push([expression.substring(start, i)]);
          i--;
        }
      }
      return [
        ...new Set(
          res.reduce((pre, cur) => {
            const newData = [];
            for (const item1 of pre) {
              for (const item2 of cur) {
                newData.push(item1 + item2);
              }
            }
            return newData;
          })
        ),
      ];
    }
  };
  return dfs(expression).sort();
};
// {a, b} {a}
// a
// a{a, b} => a , {a, b}
// a{{a,c},b{a,c}}d => a {a, c} b {a, c} d
// "cd{{a,z},a{b,c}{d,k},{ab,z}}{c,d{e,f}}e"

const a = [
  "acdccsa",
  "acdccsads",
  "acdccsadspof",
  "acdccsadssof",
  "acdccsadsfof",
  "acdccsas",
  "acdccsaotysad",
  "acdccsaotydfgso",
  "acdccsaotydfgs",
  "acdcccas",
  "acdcccaotysad",
  "acdcccaotydfgso",
  "acdcccaotydfgs",
  "acdccdas",
  "acdccdaotysad",
  "acdccdaotydfgso",
  "acdccdaotydfgs",
];
a.sort();
const b = [
  "acdcccaotydfgs",
  "acdcccaotydfgso",
  "acdcccaotysad",
  "acdcccas",
  "acdccdaotydfgs",
  "acdccdaotydfgso",
  "acdccdaotysad",
  "acdccdas",
  "acdccsa",
  "acdccsads",
  "acdccsadsfof",
  "acdccsadspof",
  "acdccsadssof",
  "acdccsaotydfgs",
  "acdccsaotydfgso",
  "acdccsaotysad",
  "acdccsas",
];
b.sort();
