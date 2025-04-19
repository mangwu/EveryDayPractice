#include <vector>

using namespace std;

class Solution {
public:
  double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2) {
    int m = nums1.size();
    int n = nums2.size();
    int i = 0;
    int j = 0;
    int half = (m + n) / 2;
    int pre = 0;
    bool hasPre = (m + n) % 2 == 0;
    // 找到第(m + n) / 2个元素
    while (i < m || j < n) {
      int curNum = 0;
      int curIdx = i + j;
      if (i == m) {
        // i + j 个元素是 nums2[j]
        curNum = nums2[j++];
      } else if (j == n) {
        // i + j 个元素是 nums1[i]
        curNum = nums1[i++];
      } else if (nums1[i] > nums2[j]) {
        // i + j 个元素是 nums2[j]
        curNum = nums2[j++];
      } else {
        // i + j 个元素是 nums1[i]
        curNum = nums1[i++];
      }
      if (curIdx == half) {
        return hasPre ? (pre + curNum) / 2.0 : curNum;
      }
      pre = curNum;
    }
    return 0;
  }
};