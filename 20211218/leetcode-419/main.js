// 给你一个大小为 m x n 的矩阵 board 表示甲板，其中，每个单元格可以是一艘战舰 'X' 或者是一个空位 '.' ，返回在甲板 board 上放置的 战舰 的数量。

// 战舰 只能水平或者垂直放置在 board 上。换句话说，战舰只能按 1 x k（1 行，k 列）或 k x 1（k 行，1 列）的形状建造，其中 k 可以是任意大小。

// 两艘战舰之间至少有一个水平或垂直的空位分隔 （即没有相邻的战舰）。

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
	// 1.战舰连续摆放组成一个战舰
	// 2.遍历扫描的时候判断该是否已经是记录过的战舰
	// 3. 判断方式：计算其左边和上面是否是相同的X即可

	// 记录长宽
	const m = board[0].length;
	const n = board.length;

	// 声明结果
	let ans = 0;

	// 遍历扫描board
	for (let i = 0; i< n; i++) {
		for (let j = 0; j < m; j++) {
			const grid = board[i][j];
			if (grid === ".") continue;
			if (grid === "X") {
				// 向上比较
				if (j > 0 && board[i][j-1] === "X") {
					continue;
				}
				// 向左比较
				if (i > 0 && board[i-1][j] === "X") {
					continue;
				}
				ans++;
			}
		}
	}
	return ans;
};

console.log(countBattleships([["X",".",".","X"],[".","X",".","X"],[".",".",".","X"],["X","X",".", "X"]]))