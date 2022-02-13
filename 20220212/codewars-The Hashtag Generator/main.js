/**
 * @description  main.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-02-13 01:08:55
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  The marketing team is spending way too much time typing in hashtags.
//  Let's help them with our own Hashtag Generator!

//  Here's the deal:

//  It must start with a hashtag (#).
//  All words must have their first letter capitalized.
//  If the final result is longer than 140 chars it must return false.
//  If the input or the result is an empty string it must return false

// 生成hash标签
// 标签字符数量大于0小于等于140，否则返回false
// 例子 " I am a boring man " => "#IAmABoringMan"
function generateHashtag(str) {
  const arr = str.split(/\s+/g);
  const newStr =
    "#" +
    arr
      .map((v) => {
        if (v.length >= 1) {
          return v[0].toLocaleUpperCase() + v.substring(1);
        }
      })
      .join("");
  console.log(newStr.length);
  console.log(newStr.length > 1 && newStr.length <= 140 ? newStr : false);
  return newStr.length > 1 && newStr.length <= 140 ? newStr : false;
}

generateHashtag("");
generateHashtag("Do We have A Hashtag");
