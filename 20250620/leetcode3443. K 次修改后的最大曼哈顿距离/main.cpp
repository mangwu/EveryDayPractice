#include <cmath>
#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
  int maxDistance(string s, int k) {
    int x = 0;
    int y = 0;
    int res = 0;
    unordered_map<char, int> map;
    for (char ch : s) {
      map[ch]++;
      move(ch, x, y);
      // 当前的最大值
      int curRes = abs(x) + abs(y);
      int curK = k;
      if (y >= 0 && curK > 0 && map['S'] > 0) {
        getCurMax(curRes, curK, map, 'S');
      } else if (y < 0 && curK > 0 && map['N'] > 0) {
        getCurMax(curRes, curK, map, 'N');
      }

      if (x >= 0 && curK > 0 && map['W'] > 0) {
        getCurMax(curRes, curK, map, 'W');
      } else if (x < 0 && curK > 0 && map['E'] > 0) {
        getCurMax(curRes, curK, map, 'E');
      }
      res = max(res, curRes);
    }
    return res;
  }
  void getCurMax(int &curRes, int &curK, unordered_map<char, int> &m, char a) {
    // 优先将S转换成N或者N转换成S
    if (m[a] > 0 && m[a] <= curK) {
      curRes += 2 * m[a];
      curK -= m[a];
    } else if (m[a] > 0) {
      curRes += 2 * curK;
      curK = 0;
    }
  }
  void move(char d, int &x, int &y) {
    if (d == 'N') {
      y++;
    } else if (d == 'S') {
      y--;
    } else if (d == 'E') {
      x++;
    } else {
      x--;
    }
  }
};