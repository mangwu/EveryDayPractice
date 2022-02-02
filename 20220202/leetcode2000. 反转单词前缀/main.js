// 给你一个下标从 0 开始的字符串 word 和一个字符 ch 。找出 ch 第一次出现的下标 i ，反转 word 中从下标 0 开始、
// 直到下标 i 结束（含下标 i ）的那段字符。如果 word 中不存在字符 ch ，则无需进行任何操作。

// 例如，如果 word = "abcdefd" 且 ch = "d" ，那么你应该 反转 从下标 0 开始、直到下标 3 结束（含下标 3 ）。
// 结果字符串将会是 "dcbaefd" 。
// 返回 结果字符串 。


/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
	// 使用indexOf能够找到ch所在的索引
	// 使用reverse反转前面的字符然后拼在一起即可

	const idx = word.indexOf(ch);
	let reverseStr = '';
	if (idx !== - 1) {
		reverseStr = word.substring(0, idx + 1).split('').reverse().join('');
	}
	return reverseStr + word.substring(idx+1);
};


/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
	// 使用栈方法
	const len = word.length;
	// 保存ch所在位置
	let idx = -1;
	// 保存字符的栈
	const stack = [];
	for (let i = 0; i < len; i++) {
		// 入栈
		stack[i] = word[i];
		// 是同一字符就退出
		if (word[i] === ch) {
			idx = i;
			break;
		}
	}
	let reverseStr = ''
	console.log(idx);
	// 获得结果
	if (idx !== -1) {
		reverseStr = stack.reverse().join('');
	}
	// 返回结果
	return reverseStr + word.substring(idx+1);
	
};