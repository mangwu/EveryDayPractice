/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-20 10:07:36                                                  *
 * @LastModifiedDate: 2022-04-20 14:19:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
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

// 文件系统中的每个文件和文件夹都有一个唯一的 绝对路径 ，即必须打开才能到达文件/目录所在位置的目录顺序，所有路径用 '/' 连接。上面例子中，指向 file2.ext 的 绝对路径 是 "dir/subdir2/subsubdir2/file2.ext" 。每个目录名由字母、数字和/或空格组成，每个文件名遵循 name.extension 的格式，其中 name 和 extension由字母、数字和/或空格组成。

// 给定一个以上述格式表示文件系统的字符串 input ，返回文件系统中 指向 文件 的 最长绝对路径 的长度 。 如果系统中没有文件，返回 0。

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  // dfs求最长路径
  const a = input.split("\n");
  const len = a.length;
  let max = 0;
  const dfs = (idx, header, pathnum) => {
    if (idx >= len) {
      return;
    }

    for (let i = idx + 1; i < len; i++) {
      // 判断是否是同类型的文件
      if (
        idx !== -1 &&
        a[i].substring(0, pathnum - 1) == "\t".repeat(pathnum - 1) &&
        a[i][pathnum - 1] !== "\t" &&
        !a[i].includes(".")
      ) {
        // 是同类型且都是文件 替换header
        const ni = header.lastIndexOf("/");
        let newH;
        if (ni == -1) {
          newH = a[i];
        } else {
          newH = header.substring(0, ni) + a[i].substring(pathnum);
        }
        console.log(newH);
        // dfs(i, header, pathnum);
        break;
      }
      if (
        a[i].substring(0, pathnum) == "\t".repeat(pathnum) &&
        a[i][pathnum] !== "\t"
      ) {
        let newHeader;
        if (header !== "") {
          newHeader = header + "/" + a[i].substring(pathnum);
        } else {
          newHeader = a[i].substring(pathnum);
        }
        // 是文件
        if (a[i].includes(".")) {
          max = Math.max(max, newHeader.length);
        } else {
          dfs(i, newHeader, pathnum + 1);
        }
      }
    }
  };
  // 判断第一个元素是文件还是目录,以及有没有根目录
  // if(a[0].includes(".") && !a[0].includes("\t")) {
  //   // 第一个元素是文件

  // }
  console.log(a);
  // idx表示从数组中的哪一个出发，header表示头，pathnum表示目录和文件数量

  dfs(-1, "", 0);
  return max;
};

// "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext\n\tsubsubdir3"

// "dir\nfile1.txt\nfile2.txt\nlongfile.txt\naa"
