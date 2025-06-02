#include <vector>

using namespace std;

class Solution {
public:
  vector<int>
  maxTargetNodes(vector<vector<int>> &edges1, vector<vector<int>> &edges2) {
    // 偶数层的节点互相是目标节点
    // 奇数层的节点互相是目标节点
    // 以0节点为第0层，属于偶数层
    int n = edges1.size() + 1;
    int m = edges2.size() + 1;
    vector<bool> layer1(n, true); // true表示偶数层，false表示奇数层
    vector<bool> layer2(m, true); // true表示偶数层，false表示奇数层
    vector<vector<int>> linkList1(n, vector<int>());
    vector<vector<int>> linkList2(m, vector<int>());
    for (auto &edge : edges1) {
      linkList1[edge[0]].push_back(edge[1]);
      linkList1[edge[1]].push_back(edge[0]);
    }
    for (auto &edge : edges2) {
      linkList2[edge[0]].push_back(edge[1]);
      linkList2[edge[1]].push_back(edge[0]);
    }
    int odd1 = 0, odd2 = 0;
    int even1 = 0, even2 = 0;
    dfs(0, -1, linkList1, layer1, 0, odd1, even1);
    dfs(0, -1, linkList2, layer2, 0, odd2, even2);
    int otherMax = odd2 > even2 ? odd2 : even2;
    vector<int> res(n, 0);
    for (int i = 0; i < n; i++) {
      if (layer1[i]) {
        res[i] = even1 + otherMax;
      } else {
        res[i] = odd1 + otherMax;
      }
    }
    return res;
  }

private:
  void dfs(
    int start, int pre, vector<vector<int>> &linkList, vector<bool> &layer,
    int level, int &odd, int &even) {
    if (level % 2 == 0) {
      even++;
      layer[start] = true;
    } else {
      odd++;
      layer[start] = false;
    }
    for (int nxtNode : linkList[start]) {
      if (nxtNode != pre) {
        dfs(nxtNode, start, linkList, layer, level + 1, odd, even);
      }
    }
  }
};

int main(void) {
  Solution s;
  return 0;
}