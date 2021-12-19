// 在一个小镇里，按从 1 到 n 为 n 个人进行编号。传言称，这些人中有一个是小镇上的秘密法官。

// 如果小镇的法官真的存在，那么：

// 小镇的法官不相信任何人。
// 每个人（除了小镇法官外）都信任小镇的法官。
// 只有一个人同时满足条件 1 和条件 2 。
// 给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示编号为 a 的人信任编号为 b 的人。

// 如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的编号。否则，返回 -1。

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
	// 可能的法官是被所有人信任的人
	// 小镇的法官不相信他人
	// 声明答案，默认为-1
	// 该题目实际上就是记录每个人的入读和出读，只有法官的入读为n-1出度为0
	let ans = -1;
	// 记录每个人信任的人数 减去它信任的人数
  // 只有法官被其全部人信任且不信任其他人，所有为n-1
	let du = new Array(n).fill(0);
	for (let i = 0; i < trust.length; i++) {
		du[trust[i][0] - 1]--;
		du[trust[i][1] - 1]++;
	}
	console.log(du);
	for (let i = 0; i < n; i++) {
		if (du[i] === n-1) {
			ans = i + 1;
			return ans;
		}
	}
	return ans;
};
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]));
console.log(findJudge(5, [[1,3],[1,4],[2,3],[2,4],[4,3],[5,1]]));