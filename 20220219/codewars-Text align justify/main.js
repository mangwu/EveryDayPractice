/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-19 22:53:45                                                  *
 * @LastModifiedDate: 2022-02-20 01:19:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// monaspace font

// 给出一段字符串text，和一行的宽度width，返回text的等宽字符串

// 等宽文本字符：
// 每行宽度固定，经可能多的在一行使用单词
// 使用'\n'换行，但是\n不占用位置
// 每行单词间的空格长度近可能相等，最多一个（最后一个）间隔不等
// 让大空格在前，小空格在后
// 一行的最后一个字符为字符（不考虑\n）
// 最后一行空格长度为1
// 最后一行不包括\n
// 单个单词不需要空格

function justify(text, width) {
  // 如果小于width直接返回即可
  if (text.length <= width) {
    return text;
  }
  // 每一行的开头
  let start = 0;
  let str = "";
  // 先分割text
  const strArr = text.split(/\s+/);
  // 遍历
  for (let i = 0; i < strArr.length; i++) {
    // 得出每一行
    if (strArr.slice(start, i + 1).join(" ").length > width) {
      // 这个时候就要更新 选择的应该是start 到 i
      // 计算间隔, 间隔数为
      const nums = i - 1 - start;
      // 计算单词的长度
      const len = strArr.slice(start, i).join("").length;
      // 计算总空格长度
      const spaceLen = width - len;
      // 如果不是一个单词
      if (nums >= 1) {
        if (spaceLen % nums == 0) {
          // 整除
          let average = spaceLen / nums;
          str = str + strArr.slice(start, i).join(" ".repeat(average)) + "\n";
        } else {
          // 非整除
          let average = Math.floor(spaceLen / nums);
          let restSpace = spaceLen % nums;
          let s = strArr[start];
          for (let j = 0; j < nums; j++) {
            if (restSpace > 0) {
              s += " ".repeat(average + 1) + strArr[start + j + 1];
              restSpace--;
            } else {
              s += " ".repeat(average) + strArr[start + j + 1];
            }
          }
          str = str + s + "\n";
        }
      } else {
        // 是一个单词就不需要gaps
        str = str + strArr[i - 1] + "\n";
      }
      // 更新start
      start = i;
    }
  }
  // 加上最后一行
  str = str + strArr.slice(start).join(" ");
  // console.log(str);
  return str;
}

justify("215 511 55555 asjkcb n ajsc k ascjh asjg bashgcvahsgc jshcjas", 13)