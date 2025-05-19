#include <cmath>
#include <unordered_map>
#include <vector>

using namespace std;

long long mod = 1000000007;

class Solution {
public:
  int colorTheGrid(int m, int n) {
    vector<vector<vector<long long>>> dp(
      m, vector<vector<long long>>(n, vector<long long>(3, 0)));
    dp[0][0][0] = 1;
    dp[0][0][1] = 1;
    dp[0][0][2] = 1;

    // 第一行
    for (int i = 1; i < n; i++) {
      for (int k = 0; k < 3; k++) {
        dp[0][i][k] = dp[0][i - 1][(k + 1) % 3] + dp[0][i - 1][(k + 2) % 3];
      }
    }
    // 第一列
    for (int j = 1; j < m; i++) {
      for (int k = 0; k < 3; k++) {
        dp[j][0][k] = dp[j - 1][0][(k + 1) % 3] + dp[j - 1][0][(k + 2) % 3];
      }
    }

    for (int i = 1; i < m; i++) {
      for (int j = 1; j < n; j++) {
        for (int k = 0; k < 3; k++) {
          dp[i][j][k] = 0; // ? 这里的动态规划不清楚
        }
      }
    }
    return (dp[m - 1][n - 1][0] + dp[m - 1][n - 1][1] + dp[m - 1][n - 1][2]) %
           mod;
  }
};

class Solution {
public:
  int colorTheGrid(int m, int n) {
    // 可以使用状态压缩，将每一列的情况记录下来
    // 因为m最大为5，所以列的情况最多有 3^m 个
    // 先记录有效的列情况，再记录相邻两个列的合法对应情况

    int maxMask = pow(3, m);
    // int是mask值,vector<int>是对应的三进制串，有m个，每个元素可能为0,1,2
    unordered_map<int, vector<int>> valid;
    for (int mask = 0; mask < maxMask; mask++) {
      vector<int> color; // 记录三进制串
      int mm = mask;
      bool check = true; // 是否合法（相邻元素不同）
      for (int i = 0; i < m; i++) {
        // 这里三进制串的正序和逆序都没关系，保持一致即可
        if (color.size() && mm % 3 == color[color.size() - 1]) {
          check = false;
          break;
        }
        color.push_back(mm % 3);

        mm /= 3;
      }
      if (check) {
        valid[mask] = move(color);
      }
    }

    // 预处理所有mask1和mask2，比较每列的元素是否相等，以判断合法的mask1和mask2对
    unordered_map<int, vector<int>> adjacent;
    for (const auto &[mask1, color1] : valid) {
      for (const auto &[mask2, color2] : valid) {
        bool check = true;
        for (int i = 0; i < m; i++) {
          if (color1[i] == color2[i]) {
            check = false;
            break;
          }
        }
        if (check) {
          adjacent[mask1].push_back(mask2);
        }
      }
    }

    // 使用滚动数组方式进行动态规划
    vector<int> f(maxMask);
    for (const auto &[mask, _] : valid) {
      f[mask] = 1; // 初始化元素
    }
    for (int i = 1; i < n; i++) {
      vector<int> g(maxMask);
      for (const auto &[mask2, _] : valid) {
        // 计算合法mask2
        for (int mask1 : adjacent[mask2]) {
          g[mask2] += f[mask1];
          g[mask2] %= mod;
        }
      }
      f = move(g);
    }
    int ans = 0;
    for (int num : f) {
      ans += num;
      ans %= mod;
    }
    return ans;
  }

private:
  static constexpr int mod = 1000000007;
};