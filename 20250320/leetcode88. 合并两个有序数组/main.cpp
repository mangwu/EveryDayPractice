#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  void merge(vector<int> &nums1, int m, vector<int> &nums2, int n) {
    // 将nums1的元素右移n位
    for (int i = m - 1; i >= 0; i--) {
      // m - 1 =>  n + m - 1
      nums1[n + i] = nums1[i];
    }
    int idx1 = n;
    int idx2 = 0;
    for (int i = 0; i < m + n; i++) {
      int cur = INT_MAX;
      if (idx1 < m + n)
        cur = min(nums1[idx1], cur);
      if (idx2 < n) {
        cur = min(nums2[idx2], cur);
        if (cur == nums2[idx2]) {
          idx2++;
        } else
          idx1++;
      } else {
        idx1++;
      }
      nums1[i] = cur;
    }
  }
};

int main(void) {
  Solution solution;
  vector<int> nums1 = {1, 2, 3, 3, 4, 7, 0, 0, 0, 0};
  vector<int> nums2 = {2, 4, 7, 9};
  solution.merge(nums1, 6, nums2, 4);
  for (int i = 0; i < nums1.size(); i++) {
    cout << nums1[i] << " ";
  }
  cout << endl;
}