#include <vector>

using namespace std;

class Solution {
public:
  vector<int> rowAndMaximumOnes(vector<vector<int>> &mat) {
    vector<int> res = {0, 0};
    int m = mat.size();
    int n = mat[0].size();
    for (int i = 0; i < m; i++) {
      int one = 0;
      for (int j = 0; j < n; j++) {
        if (mat[i][j] == 1)
          one++;
      }
      if (one > res[1]) {
        res[1] = one;
        res[0] = i;
      }
    }
    return res;
  }
};