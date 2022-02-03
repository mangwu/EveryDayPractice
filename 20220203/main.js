// 1414. 和为 K 的最少斐波那契数字数目
// 给你数字 k ，请你返回和为 k 的斐波那契数字的最少数目，其中，每个斐波那契数字都可以被使用多次。

// 斐波那契数字定义为：

// F1 = 1
// F2 = 1
// Fn = Fn-1 + Fn-2 ， 其中 n > 2 。
// 数据保证对于给定的 k ，一定能找到可行解。


/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
	// 此题的关键在于数字k的斐波那契选择的数列应该是那几个
	// 需要通过证明每次选择都以最靠近k数值的数进行选择
	// 但减去数为0时就可以不用增加选择记录了
	// 即贪心算法
	// 选择最大数的原因在于斐波那契是有传递性的，选择的数一定能由后面两个数组成
	// 所以尽量选择最大数

	// 声明选择次数
	let ans = 1;
	// 声明斐波那契的初始化变量
	let f1 = 1;
	let f2 = 1;
	// 保存前n个变量
	const F = [f1, f2];
	// 当fn > k时离开循环
	while(true) {
		const fn = f1 + f2;
		if (fn > k) {
			break;
		}
		F.push(fn);
		f1 = f2;
		f2 = fn;
	}
	// fn长度
	const len = F.length;
	// 弹出最后一个
	let maxFn = F[len - 1];
	let dividor = k - maxFn;
	
	// 当dividor大于0时开始遍历查找第二个最大值
	while(dividor > 0) {
		for (let i = 0; i < len; i++) {
			if (F[i] <= dividor && F[i+1] > dividor) {
				dividor = dividor - F[i];
				ans++;
				break;
			}
		}
	}
	return ans;
};

/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
	// 倒序遍历

	// 声明选择次数
	let ans = 0;
	// 声明斐波那契的初始化变量
	let f1 = 1;
	let f2 = 1;
	// 保存前n个变量
	const F = [f1, f2];
	// 当fn > k时离开循环
	while(true) {
		const fn = f1 + f2;
		if (fn > k) {
			break;
		}
		F.push(fn);
		f1 = f2;
		f2 = fn;
	}
	// fn长度
	const len = F.length;
	let dividor = k;
	
	// 倒序遍历
	for (let i = len - 1; i < len; i--) {
		if (dividor >= F[i]) {
			dividor = dividor - F[i];
			ans++;
			if (dividor == 0) {
				return ans;
			}
		}
	}
};