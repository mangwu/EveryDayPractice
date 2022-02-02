// 当一个字符串 s 包含的每一种字母的大写和小写形式 同时 出现在 s 中，就称这个字符串 s 是 美好 字符串。比方说，"abABB" 是美好字符串，因为 'A' 和 'a' 同时出现了，且 'B' 和 'b' 也同时出现了。然而，"abA" 不是美好字符串因为 'b' 出现了，而 'B' 没有出现。

// 给你一个字符串 s ，请你返回 s 最长的 美好子字符串 。如果有多个答案，请你返回 最早 出现的一个。如果不存在美好子字符串，请你返回一个空字符串。


/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
	// 错误解答，只能得出连续的字符串有效
	// 遍历一遍s，记录当前的字符
	// 使用双指针
	// 记录最大长度
	let maxLen = 0;
	let ans = "";
	// 添加一个后缀
	s = s + "#";
	// 长度
	const len = s.length;
	// 开始指针
	let idxStart = 0;
	// 记录当前的字符
	let currentChar = s[0];
	// 记录当前是否同时出现大小写
	let flag = false;
	for (let i = 1; i < len; i++) {
		// 计算两个字符串是否是同一字符
		const offset = Math.abs(s[i].charCodeAt() - currentChar.charCodeAt());
		// 不为0或者32 
		if (offset !== 0 && offset !== 32) {
			// 是完美字符串，更新
			if(flag) {
				flag = false;
				if (i - idxStart > maxLen) {
					maxLen = i - idxStart;
					ans = s.substring(idxStart, i);
				}
			} else {
				// 不是完美字符串就更新i
				idxStart = i;
			}
			// 更新当前字符
			currentChar = s[i];
			continue;
		}
		if (offset === 32) {
			flag = true;
		}
	}
	return ans;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
	// 使用递归，遍历
	// 如果一个字符没有对应的大小写，那么最大的子字符串就在其左右两边
	// 如果不存在这种字符那么整个字符串就是一个完美字符
	if (s.length < 2) {
		return "";
	}
	// 遍历s，找到一个只存在一个字符，否则返回整个字符串
	for (let i = 0; i < s.length; i++) {
		// 获取指定索引的字符ASCII码
		const c = s.charCodeAt(i);
		// A 97 a 65 小于97说明是小写字母，大于97说明是大写字母
		if ((c < 97 && s.indexOf(String.fromCharCode(c + 32)) === -1) || (c >= 97 && s.indexOf(String.fromCharCode(c - 32)) === -1)) {
			// 如果当前字母只有一个，那么返回左边或者右边的最大的完美字符串
			const s1 = longestNiceSubstring(s.substring(0, i))
			const s2 = longestNiceSubstring(s.substring(i + 1));
			if (s1.length >= s2.length) {
				return s1;
			} 
			return s2;
		}
	}
	// 遍历一遍没有只有一个的就返回整个字符串
	return s;
};