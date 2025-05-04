// 给你一组多米诺骨牌 dominoes 。

// 形式上，dominoes[i] = [a, b] 与 dominoes[j] = [c, d] 等价 当且仅当 (a == c 且
// b == d) 或者 (a == d 且 b == c) 。即一张骨牌可以通过旋转 0 度或 180
// 度得到另一张多米诺骨牌。

// 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j]
// 等价的骨牌对 (i, j) 的数量。
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
  int numEquivDominoPairs(vector<vector<int>> &dominoes) {
    int n = dominoes.size();
    unordered_map<int, int> map;
    int res = 0;
    for (int i = 0; i < n; i++) {
      int key = 0;
      if (dominoes[i][0] > dominoes[i][1]) {
        key += dominoes[i][1] * 10;
        key += dominoes[i][0];
      } else {
        key += dominoes[i][0] * 10;
        key += dominoes[i][1];
      }
      if (map.count(key)) {
        res += map[key];
      }
      map[key]++;
    }
    return res;
  }
};