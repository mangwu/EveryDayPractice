#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
public:
  int maxCandies(
    vector<int> &status, vector<int> &candies, vector<vector<int>> &keys,
    vector<vector<int>> &containedBoxes, vector<int> &initialBoxes) {
    if (initialBoxes.size() == 0) {
      return 0;
    }
    unordered_set<int> keySet; // 钥匙库
    int n = status.size();
    vector<int> queue = initialBoxes;
    int res = 0;
    while (queue.size()) {
      vector<int> nxt;
      bool flag = false; // 本轮循环是否有新的盒子
      for (int box : queue) {
        // 检查盒子能否打开，且有糖果
        if ((status[box] == 1 || keySet.count(box) > 0) && candies[box] > 0) {
          res += candies[box];
          candies[box] = 0;
          status[box] = 0;
          if (keys[box].size() > 0) {
            for (int key : keys[box]) {
              keySet.insert(key);
            }
          }
          if (containedBoxes[box].size() > 0) {
            flag = true; // 有新盒子
            for (int nxtBox : containedBoxes[box]) {
              nxt.push_back(nxtBox);
            }
          }
        }
        // 还有糖果的盒子可以继续添加到nxt中
        if (candies[box] > 0) {
          nxt.push_back(box);
        }
      }
      // 没有新盒子，且盒子数量没变化
      if (!flag && nxt.size() == queue.size()) {
        break;
      }
      queue = nxt;
    }
    return res;
  }
};