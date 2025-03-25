#include <cmath>
#include <set>
#include <vector>

using namespace std;
class Solution {
public:
  vector<vector<int>> differenceOfDistinctValues(vector<vector<int>> &grid) {
    int m = grid.size();
    int n = grid[0].size();
    vector<vector<int>> ans;
    for (int i = 0; i < m; i++) {
      vector<int> cur;
      for (int j = 0; j < n; j++) {
        set<int> s1;
        int x = i - 1, y = j - 1;
        while (x >= 0 && y >= 0)
          s1.insert(grid[x--][y--]);
        x = i + 1, y = j + 1;
        set<int> s2;
        while (x < m && y < n)
          s2.insert(grid[x++][y++]);
        cur.push_back(abs((int)s1.size() - (int)s2.size()));
      }
      ans.push_back(cur);
    }
    return ans;
  }
};