#include <cmath>
#include <vector>
using namespace std;

class Solution {
public:
  int maxFreeTime(int eventTime, vector<int> &startTime, vector<int> &endTime) {
    int n = startTime.size();
    int preFree = startTime[0]; // 上一段空闲时间
    int res = 0;
    int maxFree = 0; // 左边最大的空闲时间
    for (int i = 0; i < n; i++) {
      // 当前空闲时间
      int curFree = (i + 1 < n ? startTime[i + 1] : eventTime) - endTime[i];
      // 会议时间
      int curMeet = endTime[i] - startTime[i];
      if (curMeet <= maxFree) {
        // 可以移到左边空闲时间内
        res = max(res, curFree + preFree + curMeet);
      } else {
        res = max(res, curFree + preFree);
      }
      maxFree = max(maxFree, preFree);
      preFree = curFree;
    }
    // 从右往左遍历
    preFree = eventTime - endTime[n - 1];
    maxFree = 0;
    for (int i = n - 1; i >= 0; i--) {
      // 当前空闲时间
      int curFree = startTime[i] - (i - 1 >= 0 ? endTime[i - 1] : 0);
      // 会议时间
      int curMeet = endTime[i] - startTime[i];
      if (curMeet <= maxFree) {
        // 可以移到右边空闲时间内
        res = max(res, curFree + preFree + curMeet);
      } else {
        res = max(res, curFree + preFree);
      }
      maxFree = max(maxFree, preFree);
      preFree = curFree;
    }
    return res;
  }
};