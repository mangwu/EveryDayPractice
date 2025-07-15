#include <algorithm>
#include <vector>

using namespace std;

class Solution {
public:
  int matchPlayersAndTrainers(vector<int> &players, vector<int> &trainers) {
    sort(players.begin(), players.end(), [](int a, int b) { return a > b; });
    sort(trainers.begin(), trainers.end(), [](int a, int b) { return a > b; });
    int m = players.size();
    int n = trainers.size();
    int res = 0;
    for (int i = 0, j = 0; i < n && j < m; i++) {
      while (j < m && players[j] > trainers[i]) {
        j++;
      }
      if (j < m && players[j] <= trainers[i]) {
        res++;
        j++;
      }
    }
    return res;
  }
};