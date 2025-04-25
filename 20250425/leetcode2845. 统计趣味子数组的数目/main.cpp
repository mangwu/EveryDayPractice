#include <iostream>
#include <vector>

using namespace std;
class Solution {
public:
  long long countInterestingSubarrays(vector<int> &nums, int modulo, int k) {
    int n = nums.size();
    long long res = 0;
    // 遍历到r，我们可以记录总共有sum[r]个满足 x % modulo = k的元素数目
    // 遍历到l，我们可以记录总共有sum[l]个满足 x % modulo = k的元素数目
    // l < r，在区间[l,r]中，有sum[r] - sum[l-1]个满足条件的元素数目
    // 如果它是趣味子数组，那么 (sum[r] - sum[l-1]) % modulo = k
    // 如果当前遍历到r，前面有多少个l，满足这个条件呢？
    // 实际上我们可以记录之前以(sum[l] % modulo)为 key 的l的个数
    // 如果sum[r] % modulo=key(r)，那么我们应该查询的key(l)和key(r)的差值应该是k
    // 即key(l)= key(r) - k , 因为可能出现key(r)在modulo后变小的可能，
    // 所以key(l) = (key(r) + modulo - k) % modulo
    unordered_map<int, int> map;
    int prefix = 0;
    map[0] = 1;
    for (int num : nums) {
      if (num % modulo == k) {
        prefix++;
      }
      res += map[(prefix + modulo - k) % modulo];
      map[prefix % modulo]++;
    }
    return res;
  }
};