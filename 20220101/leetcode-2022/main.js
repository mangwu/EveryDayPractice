// leetcode 2022

给你一个下标从 0 开始的一维整数数组 original 和两个整数 m 和  n 。你需要使用 original 中 所有 元素创建一个 m 行 n 列的二维数组。

original 中下标从 0 到 n - 1 （都 包含 ）的元素构成二维数组的第一行，下标从 n 到 2 * n - 1 （都 包含 ）的元素构成二维数组的第二行，依此类推。

请你根据上述过程返回一个 m x n 的二维数组。如果无法构成这样的二维数组，请你返回一个空的二维数组。


/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
	// 1. 如果original的长度不等于m * n，直接放回空数组
	// 2. 否则正常遍历获得二维数组
	let len = original.length;
	if (len !== m * n) return [];
	// 声明保存二维数组的答案
	let ans = [];
	for (let i = 0; i < m; i++) {
		ans.push(original.slice(i * n, i * n + n));
	}
	return ans;
};

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray2 = function(original, m, n) {
	// 1. 如果original的长度不等于m * n，直接放回空数组
	// 2. 否则正常遍历获得二维数组
	let len = original.length;
	if (len !== m * n) return [];
	// 声明保存二维数组的答案
	let ans = new Array(m).fill(0);
	for (let i = 0; i < m; i++) {
		ans[i] = new Array(n).fill(0);
	}
	for (let i = 0;i < m; i++) {
		for (let j = 0; j < n; j++) {
			ans[i][j] = original[i * n + j];
		}
	}
	return ans;
};