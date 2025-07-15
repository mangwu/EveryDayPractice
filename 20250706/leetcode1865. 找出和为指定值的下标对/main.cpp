#include <vector>

using namespace std;
class FindSumPairs {
private:
  unordered_map<int, int> map;
  vector<int> nums1;
  vector<int> nums2;

public:
  FindSumPairs(vector<int> &nums1, vector<int> &nums2) {
    this->nums1 = nums1;
    this->nums2 = nums2;
    for (int num : nums2) {
      map[num]++;
    }
  }

  void add(int index, int val) {
    map[nums2[index]]--;
    nums2[index] += val;
    map[nums2[index]]++;
  }

  int count(int tot) {
    int res = 0;
    for (int num : nums1) {
      if (map.count(tot - num)) {
        res += map[tot - num];
      }
    }
    return res;
  }
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * FindSumPairs* obj = new FindSumPairs(nums1, nums2);
 * obj->add(index,val);
 * int param_2 = obj->count(tot);
 */