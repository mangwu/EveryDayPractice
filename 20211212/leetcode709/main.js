// 给你一个字符串 s ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。

// 使用toLocaleLower即可
// [a-z]: 97-122
// [A-Z]: 65-90
// 中间间距 32
// 遇到大写字母，将其与32进行或运算即可 如 A(65)  0100 0001 | 0010 0000  => a(97) 0110 0001
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let ans = '';
    for (let i of s) {
        if (i.charCodeAt()>=65 && i.charCodeAt() <=90) {
            ans+=(String.fromCharCode(i.charCodeAt() | 32));
            continue;
        }
        ans+=i;
    }
    return ans;
    // return s.toLocaleLower();
};