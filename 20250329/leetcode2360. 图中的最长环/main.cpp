#include <cmath>
#include <unordered_set>
#include <vector>
using namespace std;
class Solution {
public:
  int longestCycle(vector<int> &edges) {
    int n = edges.size();
    int res = -1;
    vector<int> pos(n, -1);
    for (int i = 0; i < n; i++) {
      // 未访问
      if (pos[i] == -1) {
        // 开始遍历
        int steps = 0;
        pos[i] = steps;
        int curNode = i;
        unordered_set<int> set = {};
        set.insert(i);
        while (edges[curNode] != -1) {
          curNode = edges[curNode];
          if (pos[curNode] == -1) {
            // 新节点
            pos[curNode] = ++steps;
          } else {
            if (set.count(curNode)) {
              res = max(res, steps - pos[curNode] + 1);
            }
            break;
          }
          set.insert(curNode);
        }
      }
    }
    return res;
  }
};