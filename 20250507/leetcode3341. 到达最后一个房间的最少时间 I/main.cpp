#include <cmath>
#include <iostream>
#include <limits>
#include <queue>
#include <vector>
using namespace std;

// class Solution {
// public:
//   int minTimeToReach(vector<vector<int>> &moveTime) {
//     int m = moveTime.size();
//     int n = moveTime[0].size();
//     vector<vector<int>> dp(m, vector<int>(n, 0));
//     for (int i = 0; i < m; i++) {
//       for (int j = 0; j < n; j++) {
//         if (i == 0 && j == 0) {
//           continue;
//         }
//         int top = i > 0 ? dp[i - 1][j] + 1 : INT_MAX;
//         int left = j > 0 ? dp[i][j - 1] + 1 : INT_MAX;
//         dp[i][j] = max(moveTime[i][j] + 1, min(top, left));
//       }
//     }
//     return dp[m - 1][n - 1];
//   }
// };

// [
//   [ 94, 79, 62, 27, 69, 84 ],
//   [ 6, 32, 11, 82, 42, 30 ],
// ]
// 上述解答错误，因为可以上下移动，不是动态规划题目，是最小路径题目

class Solution {
public:
  int minTimeToReach(vector<vector<int>> &moveTime) {
    int m = moveTime.size();
    int n = moveTime[0].size();
    // 使用BFS，
    vector<vector<int>> grid(m, vector<int>(n, INT_MAX));
    vector<vector<int>> DIRS = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    grid[0][0] = 0;
    queue<vector<int>> q;
    q.push({0, 0});
    while (!q.empty()) {
      auto point = q.front();
      q.pop();
      for (auto &dir : DIRS) {
        int x = point[0] + dir[0];
        int y = point[1] + dir[1];
        if (x >= 0 && x < m && y >= 0 && y < n) {
          // 从point => [x,y]的新时间
          int newTime = max(grid[point[0]][point[1]] + 1, moveTime[x][y] + 1);
          if (newTime < grid[x][y]) {
            grid[x][y] = newTime;
            q.push({x, y});
          }
        }
      }
    }
    return grid[m - 1][n - 1];
  }
};

int main(void) {
  Solution s;
  vector<vector<int>> moveTime = {
    {72, 120, 86, 90, 4, 77, 105, 18, 114},
    {27, 109, 96, 36, 95, 21, 74, 71, 65},
    {33, 13, 64, 89, 40, 53, 45, 78, 118},
  };
  cout << s.minTimeToReach(moveTime);
  return 0;
}