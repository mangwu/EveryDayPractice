#include <cmath>
#include <vector>
using namespace std;

class Solution {
public:
  int maxFreeTime(
    int eventTime, int k, vector<int> &startTime, vector<int> &endTime) {
    int n = startTime.size();
    // 滑动窗口
    int pre = 0;
    vector<int> frees;
    for (int i = 0; i < n; i++) {
      frees.push_back(startTime[i] - pre);
      pre = endTime[i];
    }
    frees.push_back(eventTime - pre);
    int m = frees.size();
    int cur = 0;
    int res = 0;
    for (int i = 0; i < min(m, k + 1); i++) {
      cur += frees[i];
    }
    res = cur;
    for (int i = k + 1; i < m; i++) {
      cur -= frees[i - k - 1];
      cur += frees[i];
      res = max(res, cur);
    }
    return res;
  }
};