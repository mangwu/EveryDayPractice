// 你要开发一座金矿，地质勘测学家已经探明了这座金矿中的资源分布，并用大小为 m * n 的网格 grid 进行了标注。每个单元格中的整数就表示这一单元格中的黄金数量；如果该单元格是空的，那么就是 0。

// 为了使收益最大化，矿工需要按以下规则来开采黄金：

// 每当矿工进入一个单元，就会收集该单元格中的所有黄金。
// 矿工每次可以从当前位置向上下左右四个方向走。
// 每个单元格只能被开采（进入）一次。
// 不得开采（进入）黄金数目为 0 的单元格。
// 矿工可以从网格中 任意一个 有黄金的单元格出发或者是停止。
//  

// 邻接节点
const around = [[0, 1], [1, 0], [0, -1], [-1, 0]];
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
	// dfs深度遍历
	// 从每一个有黄金的单元格出发进行dfs遍历
	// 不断更新最大值，最终得到结果
	let ans = 0;
	// 长
	let m = grid.length;
	let n = grid[0].length;
	const dfs = (grid, start) => {
		// 当前的值
		let current = grid[start[0]][start[1]];
		// 如果大于ans就直接更新
		if (current > ans) {
			ans = current;
		}
		// 声明已访问的对象
		const visited = [];
		// 声明已访问
		visited[n * start[0] + start[1]] = 1;
		// 声明栈用于保存dfs访问节点
		let stack = [start];
		// 声明本轮是否push
		let isPush = false;
		// 开始dfs遍历, 当栈中一有元素时即可一直遍历
		while(stack.length > 0) {
			// 重置push状态
			isPush = false;
			console.log(current, isPush);
			// 获得栈顶元素
			const top = stack[stack.length - 1];
			// 开始遍历邻接节点
			for (const offset of around) {
				// 新节点
				const newM = top[0] + offset[0];
				const newN = top[1] + offset[1];
				// 未访问过，未超出边界，有值则可以入栈
				if (!visited[n * newM + newN] && newM >= 0 && newN >= 0 && newM < m && newN < n && grid[newM][newN]) {
					isPush = true;
					// 设置为已访问
					visited[n * newM + newN] = 1;
					// 入栈
					stack.push([newM, newN]);
					// 更新current和ans
					// console.log(offset, current, ans, grid[newM][newN]);
					current = current + grid[newM][newN];
					if (current > ans) {
						ans = current;
						// console.log(current, ans);
					}
					break;
				}
			}
			// 没有push就需要pop
			if (!isPush) {
				// 更新current
				current = current - grid[top[0]][top[1]];
				// 回溯
				stack.pop();
			}
		}
	};
	// 遍历进行dfs
	for (let i = 0; i < m; i++) {
		for (let j = 0; j <n; j++) {
			if (grid[i][j]) {
				// console.log("---每次dfs遍历----")
				dfs(grid, [i, j]);
			}
		}
	}
	return ans;
};


// 只使用dfs遍历的问题在于不能确保遍历出最优路线


getMaximumGold([[1,0,7,2,0,0,5],[2,2,1,2,1,0,3],[0,2,0,5,6,8,0]]);
console.log("-----------")
// getMaximumGold([[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]);
// [1, 0, 7, 2, 0, 0, 5]
// [2, 2, 1, 2, 1, 0, 3]
// [0, 2, 0, 5, 6, 8, 0]

/**
 * @param {number[][]} grid
 * @return {number}
 */
const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
var getMaximumGold = function(grid) {
    const m = grid.length, n = grid[0].length
    let ans = 0

    dfs = function(x, y) {
        if(x < 0 || y < 0 || x == m || y == n || grid[x][y] == 0)
            return 0
        const cur = grid[x][y]
        let mx = 0
        grid[x][y] = 0
        for(const dir of DIRS)
            mx = Math.max(mx, dfs(x + dir[0], y + dir[1]))
        grid[x][y] = cur
        return cur + mx
    }

    for(let i = 0; i < m; i++)
        for(let j = 0; j < n; j++)
            ans = Math.max(ans, dfs(i, j))
    return ans
};
