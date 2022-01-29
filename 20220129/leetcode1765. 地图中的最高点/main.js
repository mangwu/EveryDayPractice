// 给你一个大小为 m x n 的整数矩阵 isWater ，它代表了一个由 陆地 和 水域 单元格组成的地图。

// 如果 isWater[i][j] == 0 ，格子 (i, j) 是一个 陆地 格子。
// 如果 isWater[i][j] == 1 ，格子 (i, j) 是一个 水域 格子。
// 你需要按照如下规则给每个单元格安排高度：

// 每个格子的高度都必须是非负的。
// 如果一个格子是是 水域 ，那么它的高度必须为 0 。
// 任意相邻的格子高度差 至多 为 1 。当两个格子在正东、南、西、北方向上相互紧挨着，就称它们为相邻的格子。（也就是说它们有一条公共边）
// 找到一种安排高度的方案，使得矩阵中的最高高度值 最大 。

// 请你返回一个大小为 m x n 的整数矩阵 height ，其中 height[i][j] 是格子 (i, j) 的高度。如果有多种解法，请返回 任意一个 。

// 四周
const fourAround = [[0,1],[0,-1],[1,0],[-1,0]]
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
	// 水域格子的高度值必为0，其四周相邻的格子如果不是水域格子,必然为1
	// 如果要设计出对高度没有要求的其余高度值都为1即可
	// 当时需求高度最大，所以使用BFS算法层序遍历搜索

	// 声明 BFS算法队列
	let queue = [];
	// 长度
	let m = isWater.length;
	let n = isWater[0].length;
	// 声明访问队列
	const visited = []
	// ans
	const ans = new Array(m).fill(0); 
	// 遍历一遍,找出水域
	for (let i = 0; i< m; i++) {
		// 一并初始化ans 和visited
		ans[i] = new Array(n).fill(0);
		for (let j = 0; j < n; j++) {
			if (isWater[i][j] === 1) {
				// 水域
				queue.push([i, j]);
				visited[i * n + j] = 1;
			}
		}
	}
	// 声明记录当前高度，从1开始
	let height = 1;
	while(queue.length > 0) {
		// 声明新队列
		const ntx = [];
		// 出队
		for (const q of queue) {
			// 遍历四周
			for (const fr of fourAround) {
				const newI = q[0] + fr[0];
				const newJ = q[1] + fr[1];
				// console.log(newI, newJ);
				// 未访问
				if (!visited[newI * n + newJ] && newI >= 0 && newI < m && newJ >=0 && newJ < n) {
					// 设置为已被访问并设置高度
					visited[newI * n + newJ] = 1;
					// ans[newI][newJ] = height;
					ans[newI][newJ] = height;
					// 入队
					ntx.push([q[0] + fr[0], q[1] + fr[1]]);
				}
			}
		}
		// 高度加1
		height++;
		// 新队列
		queue = ntx;
	}
	console.log(ans);
	return ans;
};
highestPeak([[0,1,0,0,0,1],[0,0,0,0,0,0],[1,0,0,0,0,0],[0,0,1,0,0,0],[0,0,0,0,0,0]]);