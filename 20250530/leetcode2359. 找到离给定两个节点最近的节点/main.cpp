#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
public:
  int closestMeetingNode(vector<int> &edges, int node1, int node2) {
    if (node1 == node2) {
      return 0;
    }
    // BFS
    unordered_set<int> set1;
    unordered_set<int> set2;
    unordered_map<int, vector<int>> map;
    int n = edges.size();
    for (int i = 0; i < n; i++) {
      if (edges[i] != -1) {
        map[i].push_back(edges[i]);
      }
    }
    set1.insert(node1);
    set2.insert(node2);
    vector<int> q1 = {node1};
    vector<int> q2 = {node2};
    while (q1.size() > 0 || q2.size() > 0) {
      vector<int> nxt1;
      vector<int> nxt2;
      int res = n;
      for (int cur : q1) {
        if (map[cur].size() > 0) {
          for (int nxtNode : map[cur]) {
            if (set2.count(nxtNode) > 0) {
              res = min(res, nxtNode);
            }
            if (!set1.count(nxtNode)) {
              set1.insert(nxtNode);
              nxt1.push_back(nxtNode);
            }
          }
        }
      }
      for (int cur : q2) {
        if (map[cur].size() > 0) {
          for (int nxtNode : map[cur]) {
            if (set1.count(nxtNode) > 0) {
              res = min(res, nxtNode);
            }
            if (!set2.count(nxtNode)) {
              set2.insert(nxtNode);
              nxt2.push_back(nxtNode);
            }
          }
        }
      }
      if (res != n)
        return res;
      q1 = nxt1;
      q2 = nxt2;
    }
    return -1;
  }
};