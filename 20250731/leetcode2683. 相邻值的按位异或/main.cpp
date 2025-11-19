#include <vector>

using namespace std;

class Solution {
public:
  bool doesValidArrayExist(vector<int> &derived) {
    int n = derived.size();
    int cur = 0; // 初始值
    int next;
    for (int i = 0; i < n; i++) {
      // derived[i] = cur ^ next;
      if (derived[i] != cur) {
        next = 1;
      } else {
        next = 0;
      }
      cur = next;
    }
    if (cur == 0) {
      return true;
    }
    cur = 1; // 初始值
    for (int i = 0; i < n; i++) {
      // derived[i] = cur ^ next;
      if (derived[i] != cur) {
        next = 1;
      } else {
        next = 0;
      }
      cur = next;
    }
    if (cur == 1) {
      return true;
    }
    return false;
  }
};