#include <algorithm>
#include <cmath>
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
  int minimumDeletions(string word, int k) {
    unordered_map<char, int> freq;
    for (char ch : word) {
      freq[ch]++;
    }
    vector<int> nums;
    for (auto it : freq) {
      nums.push_back(it.second);
    }
    sort(nums.begin(), nums.end());
    int sum = 0;
    int n = nums.size();
    int res = word.size();
    for (int i = 0; i < nums.size(); i++) {
      // 以nums[i]为频率的字符为最小值
      int curRes = sum;
      sum += nums[i];
      for (int j = n - 1; j > i; j--) {
        if (nums[j] > k + nums[i]) {
          curRes += nums[j] - k - nums[i];
        } else {
          break;
        }
      }
      res = min(res, curRes);
    }
    return res;
  }
};
