// 句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。

// 如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。

// 给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。



/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
	// 即只出现一次单词的个数
	// 保存全部单词
	const wordAll = new Set();
	// 只保存一个只有一个的单词
	const wordSet = new Set();
	// 获得每个单词的数组
	const words = (s1 + " " + s2).split(" ");
	for (const word of words) {
		if(wordAll.has(word)) {
			wordSet.delete(word);
		} else {
			wordAll.add(word);
			wordSet.add(word);
		}
	}
	return [...wordSet];

};
uncommonFromSentences("this apple is sweet as xac as", "this apple is sour");