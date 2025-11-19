#include <cmath>
#include <string>
using namespace std;

class Solution {
public:
  int maximumGain(string s, int x, int y) {
    int n = s.size();
    // x > y就优先删除ab
    // x < y就优先删除ba
    // 删除后不会影响总的删除次数
    // aaba -> 删除ab或ba，剩下aa，都只会删除一次
    // bbab -> 删除ab或ba，剩下bb，都只会删除一次
    // abab -> 删除ab或ba，都会删除两次
    // baba -> 删除ab或ba，都会删除两次
    // 故而优先删除分数大的

    // 预处理，如果y > x，将x 和 y交换,a和b交换，这样只用考虑优先删除ab的情况
    if (y > x) {
      swap(x, y);
      for (int i = 0; i < n; i++) {
        if (s[i] == 'a') {
          s[i] = 'b';
        } else if (s[i] == 'b') {
          s[i] = 'a';
        }
      }
    }
    // 计数法，记录连续的a和b，先消ab
    int res = 0;
    for (int i = 0; i < n; i++) {
      int cntA = 0;
      int cntB = 0;
      while (i < n && s[i] == 'a' || s[i] == 'b') {
        if (s[i] == 'a') {
          cntA++;              // 记录当前连续a的数量
        } else if (cntA > 0) { // 可以消除ab
          cntA--;
          res += x;
        } else {
          cntB++; // 多余的b 可以用户后续消除ba
        }
        i++;
      }
      res += min(cntA, cntB) * y; // ba的个数
    }
    return res;
  }
};