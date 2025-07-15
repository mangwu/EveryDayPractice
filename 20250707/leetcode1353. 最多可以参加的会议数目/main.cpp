#include <algorithm>
#include <cmath>
#include <queue>
#include <vector>
using namespace std;

class Solution {
public:
  int maxEvents(vector<vector<int>> &events) {
    // 优先参加结束时间较早的会议
    // 创建一个优先队列
    // 每次天数增加都弹出不符合条件的会议，增加符合条件的会议
    sort(events.begin(), events.end()); // 按照开始时间进行排序
    int n = events.size();
    int maxDay = 0;
    for (int i = 0; i < n; i++) {
      maxDay = max(maxDay, events[i][1]);
    }
    priority_queue<int, vector<int>, greater<>> pq;
    int ans = 0;
    int j = 0;                         // j 遍历events
    for (int i = 0; i <= maxDay; i++) { // 遍历天数
      // 将当前events中小于等于i的事件入队
      while (j < n && events[j][0] <= i) {
        pq.emplace(events[j][1]); // 对结束时间进行排序
        j++;
      }
      // 将结束时间小于i的出队，不符合条件
      while (!pq.empty() && pq.top() < i) {
        pq.pop();
      }
      // 添加一次会议
      if (!pq.empty()) {
        pq.pop();
        ans++;
      }
    }
    return ans;
  }
};