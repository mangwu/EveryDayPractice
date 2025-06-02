#include <cmath>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  vector<int> maxTargetNodes(
    vector<vector<int>> &edges1, vector<vector<int>> &edges2, int k) {
    int n = edges1.size() + 1;
    int m = edges2.size() + 1;
    vector<int> res(n, 1);
    if (k == 0) {
      return res;
    }
    vector<vector<int>> linkList1(n, vector<int>(0));
    vector<vector<int>> linkList2(m, vector<int>(0));
    for (auto &edge : edges1) {
      linkList1[edge[0]].push_back(edge[1]);
      linkList1[edge[1]].push_back(edge[0]);
    }
    for (auto &edge : edges2) {
      linkList2[edge[0]].push_back(edge[1]);
      linkList2[edge[1]].push_back(edge[0]);
    }
    int maxPoints = 1;
    for (int i = 0; i < m; i++) {
      maxPoints = max(maxPoints, dfs(linkList2, i, -1, k - 1));
    }
    for (int i = 0; i < n; i++) {
      res[i] = dfs(linkList1, i, -1, k) + maxPoints;
    }
    return res;
  }

private:
  int dfs(const vector<vector<int>> &linkList, int start, int pre, int k) {
    if (k == 0) {
      return 1;
    }
    int res = 1;
    for (int nxtNode : linkList[start]) {
      if (nxtNode != pre) {
        res += dfs(linkList, nxtNode, start, k - 1);
      }
    }
    return res;
  }
};

int main(void) {
  Solution s;
  vector<vector<int>> edges1 = {{0, 1}};
  vector<vector<int>> edges2 = {{0, 1}};
  vector<int> res = s.maxTargetNodes(edges1, edges2, 1);
  for (int item : res) {
    cout << item << endl;
  }
  return 0;
}