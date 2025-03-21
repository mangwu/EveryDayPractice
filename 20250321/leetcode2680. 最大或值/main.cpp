#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  long long maximumOr(vector<int> &nums, int k) {
    int n = nums.size();
    long long mutil = ((long long)1) << k;
    vector<long long> suffix(n + 1);
    suffix[n] = 0;
    for (int i = n - 1; i >= 0; i--) {
      suffix[i] = suffix[i + 1] | (long long)nums[i];
    }
    long long pre = 0;
    long long res = 0;
    for (int i = 0; i < n; i++) {
      long long cur = nums[i] * mutil | pre | suffix[i + 1];
      res = max(res, cur);
      pre = pre | nums[i];
    }
    return res;
  }
  long long maximumOr2(vector<int> &nums, int k) {
    int n = nums.size();
    // 计算每个数字的或值和1数量大于1的并值
    long long multiBits = 0;
    long long orSum = 0;
    for (int x : nums) {
      long long lx = x;
      multiBits = multiBits | (lx & orSum);
      orSum = orSum | lx;
    }
    long long res = 0;
    long long lk = k;
    for (int x : nums) {
      long long lx = x;
      // orSum与lx的异或结果：
      // lx中为0的，orSum中为1的 => 1，少了lx，这个位也是1，正确
      // lx中为0的，orSum中为0的 => 0，少了lx，这个位也是0，正确，
      // lx中为1的，orSum中为1的 => 0,
      // 少了lx，这个位由multiBits决定，数量大于1则为1，只有一个则为0
      // lx中为1的，orSum中为0的 => 不存在这种情况
      // 所以(orSum ^ lx) | multiBits 就是除了x剩下的
      res = max(res, (orSum ^ lx) | multiBits | (lx << lk));
    }
    return res;
  }
};

int main(void) {
  Solution solution;
  vector<int> nums = {98545425, 54785416, 85745865, 98588888,  65475895,
                      25895555, 79899999, 65847589, 100000000, 25684759};
  cout << solution.maximumOr(nums, 15) << endl;
  cout << solution.maximumOr2(nums, 15) << endl;
  return 0;
}
