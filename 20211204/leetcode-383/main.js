// 为了不在赎金信中暴露字迹，从杂志上搜索各个需要的字母，组成单词来表达意思。

// 给你一个赎金信 (ransomNote) 字符串和一个杂志(magazine)字符串，判断 ransomNote 能不能由 magazines 里面的字符构成。

// 如果可以构成，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  // 暴力解法 
  // 一个个比对ransomNote参照magazine中的字符串
  // 如果使用indexOf方法比对，如果不为 -1 就删除掉index位的magazine字符
  // 如果为 -1 就返回false
  // 这种解法的时间复杂度为m * n 因为需要使用indexOf对magazine进行遍历
  let i = 0;
  while(i < ransomNote.length) {
    const index = magazine.indexOf(ransomNote[i]);
    if (index !== -1) {
      // 删除index位的字符
      magazine = magazine.slice(0, index) + magazine.slice(index + 1);
      console.log(magazine);
    } else {
      return false;
    }
    i++;
  }
  return true;
};
console.log(canConstruct("abcd", "askjchbcd"));
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct2 = function(ransomNote, magazine) {
  // 由于字符必定是小写字符，就是26个字符，
  // 统计两个字符中各个字符的个数，如果magazine中的有字符数有小于ransonNote的，返回true
  // 如果magazine中的各个字符数量都大于ransomNote则返回true
  // 时间复杂度m + n 空间复杂度 26
  // 如果 字符数量ransomNote大于magazine，必定无法由magazine构成
  if (ransomNote.length > magazine.length) {
    return false;
  }
  // 保存 magazine中的每个字符的数量
  const c = new Array(26).fill(0);
  // 遍历magazine， 数出各个字符个数，利用charCodeAt()函数获取字符在anscii中的位置
  for (let m of magazine) {
    // charCodeAt()用于返回字符在表中位置，减去 'a'字符位置表示从0开始排序的顺位索引
    c[m.charCodeAt() - 'a'.charCodeAt()] ++;
  }
  // 遍历ransomNote
  for (let n of ransomNote) {
    c[n.charCodeAt() - 'a'.charCodeAt()] --;
    if (c[n.charCodeAt() - 'a'.charCodeAt()] < 0) {
      return false;
    }
  }
  return true;
}

console.log(canConstruct2("abcd", "askjchbcd"));