/*
 * @Author: mangwu                                                             *
 * @File: recordInOutContent.js                                                *
 * @Date: 2024-04-09 14:01:58                                                  *
 * @LastModifiedDate: 2024-04-09 17:10:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function extractParamNames(func) {
  // 获取函数定义的字符串表示
  const funcString = func.toString();

  // 定义正则表达式匹配函数参数部分，即位于圆括号内的内容
  const argRegex = /\(([^)]+)\)/g;

  // 使用正则表达式匹配并提取参数部分
  const matchResult = argRegex.exec(funcString);
  if (matchResult && matchResult[1]) {
    // 分割参数字符串，得到参数名数组
    const argNames = matchResult[1].split(",").map((v) => v.trim());
    return argNames;
    // 遍历并打印参数名
  }
  return [];
}
/**
 * @description 执行输入输出时进行打印动作
 * @param {Function} func
 * @param  {...any} args
 */
function recordInOutContent(func, ...args) {
  console.log("---------------输入---------------");
  const argNames = extractParamNames(func);
  const len = argNames.length;
  for (let i = 0; i < len; i++) {
    console.log(`${argNames[i]}:`);
    console.log(args[i]);
  }
  console.log("---------------输出---------------");
  console.log(func.call(null, ...args));
}

module.exports = {
  recordInOutContent,
};
