// 假设有一个同时存储文件和目录的文件系统。下图展示了文件系统的一个示例：

// 这里将 dir 作为根目录中的唯一目录。dir 包含两个子目录 subdir1 和 subdir2 。subdir1 包含文件 file1.ext 和子目录 subsubdir1；subdir2 包含子目录 subsubdir2，该子目录下包含文件 file2.ext 。

// 在文本格式中，如下所示(⟶表示制表符)：

// dir
// ⟶ subdir1
// ⟶ ⟶ file1.ext
// ⟶ ⟶ subsubdir1
// ⟶ subdir2
// ⟶ ⟶ subsubdir2
// ⟶ ⟶ ⟶ file2.ext
// 如果是代码表示，上面的文件系统可以写为 "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" 。'\n' 和 '\t' 分别是换行符和制表符。

// 文件系统中的每个文件和文件夹都有一个唯一的 绝对路径 ，即必须打开才能到达文件/目录所在位置的目录顺序，所有路径用 '/' 连接。上面例子中，指向 file2.ext 的 绝对路径 是 "dir/subdir2/subsubdir2/file2.ext" 。每个目录名由字母、数字和/或空格组成，每个文件名遵循 name.extension 的格式，其中 name 和 extension由字母、数字和/或空格组成。

// 给定一个以上述格式表示文件系统的字符串 input ，返回文件系统中 指向 文件 的 最长绝对路径 的长度 。 如果系统中没有文件，返回 0。

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  // 目录：不包含.，直到遇到下一个\n或结束
  // 文件：包含.，直到遇到下一个\n或结束
  // 根据\t的数量决定当前目录或文件的深度
  const stack = [];
  const n = input.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (input[i] === "\n") {
      // 新一行获取\t数量
      let curTNum = 0;
      while (input[i + 1] === "\t") {
        curTNum++;
        i++;
      }
      // 下一个文件或目录的深度为curTNum
      // 栈中元素的个数即为当前路径的深度
      while (stack.length > curTNum) stack.pop();
    } else {
      // 目录或文件
      const [name, end, isFile] = getSeriesName(input, i);
      i = end;
      stack.push(name);
      if (isFile) {
        // 是文件
        res = Math.max(res, stack.join("/").length);
        stack.pop(); // 出栈已被比较文件
      }
    }
  }
};

/**
 * @description 获取文件或目录名称
 * @param {string} s
 * @param {number} i
 * @returns {[string,number,boolean]} [名称，结束索引，是文件]
 */
function getSeriesName(s, i) {
  const n = s.length;
  const res = [];
  let isFile = false;
  while (i < n && s[i] !== "\t" && s[i] !== "\n") {
    if (s[i] === ".") isFile = true;
    res.push(s[i++]);
  }
  return [res.join(""), i - 1, isFile];
}
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  // 目录：不包含.，直到遇到下一个\n或结束
  // 文件：包含.，直到遇到下一个\n或结束
  // 根据\t的数量决定当前目录或文件的深度
  const stack = [];
  const n = input.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (input[i] === "\n") {
      // 新一行获取\t数量
      let curTNum = 0;
      while (input[i + 1] === "\t") {
        curTNum++;
        i++;
      }
      // 下一个文件或目录的深度为curTNum
      // 栈中元素的个数即为当前路径的深度
      while (stack.length > curTNum) stack.pop();
    } else {
      // 目录或文件
      const [name, end, isFile] = getSeriesName(input, i);
      i = end;
      // 记录入栈当前路径长度而不是
      let len = name.length + (stack.length ? stack[stack.length - 1] + 1 : 0);
      stack.push(len);
      if (isFile) {
        // 是文件
        res = Math.max(res, len);
        stack.pop(); // 出栈已被比较文件
      }
    }
  }
  return res;
};
