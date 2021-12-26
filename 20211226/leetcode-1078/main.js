// leetcode-1078
// 给出第一个词 first 和第二个词 second，考虑在某些文本 text 中可能以 "first second third" 形式出现的情况
// 其中 second 紧随 first 出现，third 紧随 second 出现。

// 对于每种这样的情况，将第三个词 "third" 添加到答案中，并返回答案。

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
	// 1. 使用split分割text
	// 2. 遍历单词数组，查找与first相同的单词
	// 3. 将第三个单词推入数组中

	// 声明答案数组
	let ans = [];
	// 获得单词数组
	const textArr = text.split(" ");
	// 获得循环次数
	const num = textArr.length - 2;
	// 循环次数小于等于0就直接返回空数组
	if (num <= 0) return ans;
	// 遍历textArr
	for (let i = 0; i < num; i++) {
		if (textArr[i] === first && textArr[i+1] === second) {
			ans.push(textArr[i+2]);
		}
	}
	return ans;
};