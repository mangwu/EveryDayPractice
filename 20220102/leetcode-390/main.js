// 列表 arr 由在范围 [1, n] 中的所有整数组成，并按严格递增排序。请你对 arr 应用下述算法：

// 从左到右，删除第一个数字，然后每隔一个数字删除一个，直到到达列表末尾。
// 重复上面的步骤，但这次是从右到左。也就是，删除最右侧的数字，然后剩下的数字每隔一个删除一个。
// 不断重复这两步，从左到右和从右到左交替进行，直到只剩下一个数字。
// 给你整数 n ，返回 arr 最后剩下的数字。


/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  // 1. n为偶数，那么n + 1的结果也是n的结果
  // 2. 第一步，删除所有奇数
  // 3. 第二步，按照数组长度不等于1时遍历
  // n 是1直接返回
  if (n == 1) {
  	return 1;
  }
  // 声明总个数
  let len = Math.floor(n / 2);
  // 声明数组
  let ans = [];
  // 默认进行了第一个删除奇数的操作
  for (let i = 1; i <= len; i++) {
  	ans.push(i * 2);
  }
  // 声明正序或者倒序删除
  let flag = true;
  while (ans.length !== 1) {
  	// 倒序删除
  	if (flag) {
  		for(let i = ans.length - 1; i >= 0; i = i - 2) {
  			ans.splice(i, 1);
  		}
  	} else {
  		// 正序删除
  		for (let i = 0; i <= ans.length; i++) {
  			ans.splice(i, 1);
  		}
  	}
  	// 更改删除方式
  	flag = !flag;
  }
  console.log(ans)
  return ans[0];
};
lastRemaining(4)

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining2 = function(n) {
  // 1. n为偶数，那么n + 1的结果也是n的结果
  // 2. 第一步，删除所有奇数
  // 3. 第二步，按照数组长度不等于1时遍历
  // n 是1直接返回 每次直接删除
  // 声明总个数
  let len = Math.floor(n / 2);
  // 数组中的第一个值
  let i = 2;
  // 删除次数
  let k = 1;
  // 正向删除，负向删除
  let flag = false;
  while(len > 1 ) {
  	// 如果是正向删除 从第一个开始删除，所以第一个值需要从
  	if (flag) {
  		i = i + Math.pow(2, k);
  	}
  	// 如果是负向删除并且len为奇数, 从第一个开始删除，
  	if (!flag && (len % 2 === 1)) {
  		i = i + Math.pow(2, k);
  	}
  	// 如果是负向删除，并且len为偶数，则不用增加
  	
		// 删除次数加1 
  	k++;
  	// 减半长度
  	len = Math.floor(len / 2);
  	// 替换删除方式
  	flag = !flag;
  }
  console.log(i);
  return len == 0 ? 1 : i;
};
lastRemaining2(4);