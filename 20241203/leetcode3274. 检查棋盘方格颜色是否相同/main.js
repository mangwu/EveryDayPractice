// 给你两个字符串 coordinate1 和 coordinate2，代表 8 x 8 国际象棋棋盘上的两个方格的坐标。

// 以下是棋盘的参考图。

// 如果这两个方格颜色相同，返回 true，否则返回 false。

// 坐标总是表示有效的棋盘方格。坐标的格式总是先字母（表示列），再数字（表示行）。

/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
  const getNum = (str) => {
    return str[0].charCodeAt() + parseInt(str[1]);
  };
  return getNum(coordinate1) % 2 === getNum(coordinate2) % 2;
};
