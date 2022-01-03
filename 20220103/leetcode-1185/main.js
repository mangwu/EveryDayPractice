// leetcode-1185
// 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。

// 输入为三个整数：day、month 和 year，分别表示日、月、年。

// 您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
	// 通过编译器可以得到基准日期1971 1 1 => Friday
	// 输入的日期在1971 到2100之间
	// 声明一周的各个星期
  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  // 声明普通年份的各个月份天数
 	const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 以1971 1 1 为基准的星期索引
  const initailIdx = 4;
  // 计算相隔年限
  // 闰年：4年一闰年，百年不闰，四百年再闰
  // 1971到2100之间每个年份为4的倍数的都是闰年，除了2100
  // 但是当年如果是闰年，还需判断月份是否是三月（过了2月表示已经多加了一天）
  const apartYear = year - 1971; // 过去的年份
  // 有几个闰年 不包括本身的
  const bigYear = Math.floor((apartYear + 2) / 4);
  // 计算得到年份的天数, 加上闰年个数
  const year_day = apartYear * 365 + bigYear;
  // 获得本年度的天数
  // 如果不是闰年，正常计算
  // 月份
  const apartMonth = month - 1;
  const apartDay = day - 1;
  let otherDay = apartDay;
  // 计算度过的月份天数
  for (let i = 0; i < apartMonth; i ++) {
  	otherDay += monthDay[i];
  }
  // 如果是闰年，且月份大于3月则额外加一天
  if (year % 4 === 0 && year !== 2100 && month > 2) {
  	otherDay++;
  }
  console.log(otherDay)
  // 总天数加初始星期索引，与7百分比得到最终week索引
  const idx = (otherDay + year_day + initailIdx) % 7;
  return week[idx];
};
console.log(dayOfTheWeek(29, 2, 2000)); // 59  == 31 + 28
// 
console.log(dayOfTheWeek(1, 3, 2000)); // 60 == 31 + 29 + 0
console.log(dayOfTheWeek(15, 8, 1993));