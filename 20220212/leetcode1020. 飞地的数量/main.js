// 给你一个大小为 m x n 的二进制矩阵 grid ，其中 0 表示一个海洋单元格、1 表示一个陆地单元格。

// 一次 移动 是指从一个陆地单元格走到另一个相邻（上、下、左、右）的陆地单元格或跨过 grid 的边界。

// 返回网格中 无法 在任意次数的移动中离开网格边界的陆地单元格的数量。

const DIRS = [[0, 1],[1, 0], [0,-1], [-1, 0]];
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
	// 搜索路径，能到达边界就不用统计
	// 边界的特点，x或者y等于0或者网格的索引的最大值
	// 遍历grid，每个陆地做dfs搜索，搜到的单元属于边界就可以不用计数了
	const m = grid.length;
	const n = grid[0].length;
	let ans = 0;
	for(let i = 0; i < m; i++) {
		for(let j = 0; j < n; j++) {
			if (grid[i][j]) {
				if(i == 0 || j == 0 || i == m - 1 || j == n - 1) {
					continue;
				}
				// console.log("-------每一次dfs遍历---------------", i, j);
				// console.log(dfs(grid, i, j))
				if(!dfs(grid, i, j)) {
					// 不能到达边界就加1
					ans++;
				}
			}
		}
	}
	console.log(ans)
	return ans;
};

const dfs = (grid, x, y) => {
	const visited = [];
	const m = grid.length;
	const n = grid[0].length;
	// 栈
	const stack = [[x,y]];
	// 已访问
	visited[x * n + y] = 1;
	// 是否入栈
	let isPush = false;
	while(stack.length > 0) {
		isPush = false;
		// 访问栈顶元素
		const top = stack[stack.length - 1];
		// 遍历DIRS
		// console.log("----------每一次遍历周围-------")
		for (const dir of DIRS) {
			const i = dir[0] + top[0];
			const j = dir[1] + top[1];
			// 要是陆地且未访问过
			if (i >= 0 && j >= 0 && i < m && j < n && grid[i][j] && !visited[i * n + j]) {
				// console.log(i,j);
				if (i == 0 || j == 0 || i == m - 1 || j == n - 1) {
				// 能到达边界
					return true;
				}
				isPush = true;
				// 标记已访问
				visited[i * n + j] = 1;
				stack.push([i,j]);
				break;
			}
		}
		// 没有就出栈
		if (!isPush) {
			stack.pop();
		}
	}
	// 不能到达边界
	return false;
}

// numEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0],[1, 0, 1, 1],[0,1,1,0],[0,0,0,1],[0,1,0,1]])

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves2 = function(grid) {
	// 优化， 不必对所有单元进行bfs遍历
	// 设置一个visited数组，遍历未访问过的元素
	const visited = [];
	let ans = 0;
	const m = grid.length;
	const n = grid[0].length;
	for(let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			// 未访问过且是陆地单元
			if (grid[i][j] && !visited[i *n + j]) {
				// console.log("----------每一次bfs遍历----------")
				ans = ans + bfs(grid, i, j, visited);
			}
		}
	}
	console.log(ans);
	return ans;
}
const bfs = (grid, x, y, visited) => {
	const m = grid.length;
	const n = grid[0].length;
	const queue = [[x, y]];
	visited[x * n + y] = 1;
	let hasBorder = false;
	let num = 0;
	while(queue.length > 0) {
		// 出队
		num++;
		const ele = queue.shift();
		// 判断是否是边界
		if(ele[0] == 0 || ele[0] == m - 1 || ele[1] == 0 || ele[1] == n - 1) {
			hasBorder = true;
		}
		// console.log(ele);
		// 遍历周围
		for(const dir of DIRS) {
			const i = ele[0] + dir[0];
			const j = ele[1] + dir[1];
			if (i >= 0 && j >= 0 && i < m && j < n && !visited[i * n + j] && grid[i][j]) {
				visited[i * n + j] = 1; // 访问过
				queue.push([i,j]);
			}
		}
	}
	// console.log("------本次dfs遍历的结果------", hasBorder, num);
	return hasBorder ? 0 : num;
}


numEnclaves2([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0],[1, 0, 1, 1],[0,1,1,0],[0,0,0,1],[0,1,0,1]])

// 0 0 0 0
// 1 0 1 0
// 0 1 1 0
// 0 0 0 0
// 1 0 1 1
// 0 1 1 0
// 0 0 0 1
// 0 1 0 1