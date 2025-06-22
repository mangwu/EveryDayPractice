#include <algorithm>
#include <vector>
using namespace std;

class Solution {
public:
  int partitionArray(vector<int> &nums, int k) {
    int n = nums.size();
    vector<int> idxes(n, 0);
    for (int i = 0; i < n; i++) {
      idxes[i] = i;
    }
    sort(idxes.begin(), idxes.end(), [&arr = nums](int a, int b) {
      return arr[a] < arr[b];
    });
    int res = 0;
    for (int i = 0; i < n; i++) {
      int minVal = nums[idxes[i]];
      int j = i;
      for (; j < n; j++) {
        if (nums[idxes[j]] - minVal > k) {
          break;
        }
      }
      i = j - 1;
      res++;
    }
    return res;
  }
};