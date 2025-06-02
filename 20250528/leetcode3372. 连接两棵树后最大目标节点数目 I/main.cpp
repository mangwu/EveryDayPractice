#include <cmath>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  vector<int> maxTargetNodes(
    vector<vector<int>> &edges1, vector<vector<int>> &edges2, int k) {
    int n = edges1.size() + 1;
    int m = edges2.size() + 1;
    // 计算edges1和edges2中每层的节点个数，第0层为根节点0，个数为1
    vector<int> res(n, 0);
    if (k == 0) {
      // 只有自己是目标节点
      return res;
    }
    vector<int> nodeLayer1(n, 0);
    vector<int> layerNum1;
    cout << n << ", " << m << endl;
    SetNodeLayerAndNums(nodeLayer1, layerNum1, edges1);
    vector<int> targetLayer1(layerNum1.size(), 0);
    cout << "---layerNum---\n";
    for (int i = 0; i < layerNum1.size(); i++) {
      cout << i << "#" << layerNum1[i] << endl;
    }
    cout << "---layerNumEnd---\n";
    SetTargetNodeNum(nodeLayer1, layerNum1, targetLayer1, k);

    vector<int> nodeLayer2(m, 0);
    vector<int> layerNum2;
    SetNodeLayerAndNums(nodeLayer2, layerNum2, edges2);
        cout << "---layerNum---\n";
    for (int i = 0; i < layerNum2.size(); i++) {
      cout << i << "#" << layerNum2[i] << endl;
    }
    cout << "---layerNumEnd---\n";
    vector<int> targetLayer2(layerNum2.size(), 0);
    SetTargetNodeNum(nodeLayer2, layerNum2, targetLayer2, k - 1);

    int layer2Max = 1;
    for (int num : nodeLayer2) {
      layer2Max = max(layer2Max, num);
    }

    for (int i = 0; i < n; i++) {
      cout << "node " << i << " (layer)" << nodeLayer1[i] << " : "
           << targetLayer1[nodeLayer1[i]] << " + " << layer2Max << endl;
      res[i] = targetLayer1[nodeLayer1[i]] + layer2Max;
    }
    return res;
  }

private:
  void SetNodeLayerAndNums(
    vector<int> &nodeLayer, vector<int> &layerNum, vector<vector<int>> &edges) {
    // nodeLayer:每个节点所在的层数
    // layerNum:每层的节点个数
    int nodeNum = edges.size() + 1; // 节点数量
    layerNum.push_back(1);          // 第0层只有节点0
    nodeLayer[0] = 0;               // 节点0在第0层
    // linkList：每个节点连接的节点列表
    vector<vector<int>> linkList(nodeNum, vector<int>());
    SetLinkList(edges, linkList);
    vector<int> q = {0};                  //  第0层
    vector<bool> visited(nodeNum, false); // bfs的访问信息
    visited[0] = true;                    // 根节点已访问
    int level = 1;
    while (q.size() > 0) {
      vector<int> nxt; // 下一层节点数据
      for (auto curNode : q) {
        auto &nxtNodes = linkList[curNode];
        cout << curNode << endl;
        for (int nxtNode : nxtNodes) {
          if (!visited[nxtNode]) {
            nxt.push_back(nxtNode);
            visited[nxtNode] = true;
            nodeLayer[nxtNode] = level; // 设置节点层数
          }
        }
      }
      if (nxt.size() > 0) {
        layerNum.push_back(nxt.size()); // 当前层的节点数量
      }
      q = nxt;
      level++;
    }
  }
  void SetLinkList(vector<vector<int>> &edges, vector<vector<int>> &linkList) {
    for (auto &edge : edges) {
      linkList[edge[0]].push_back(edge[1]);
      linkList[edge[1]].push_back(edge[0]);
    }
  }
  void SetTargetNodeNum(
    vector<int> &nodeLayer, vector<int> &layerNum, vector<int> &layerCache,
    int k) {
    // 根据节点层数的数据和每个节点的层数，计算每个节点能达到的目标节点数
    int layerLen = layerNum.size();
    int nodeNum = nodeLayer.size();
    for (int node = 0; node < nodeNum; node++) {
      int layer = nodeLayer[node];
      if (layerCache[layer] > 0) {
        continue;
      } else {
        int res = k >= 2 ? layerNum[node] : 1;
        // 向上和向下查找
        for (int i = 1; i <= k; i++) {
          if (layer + i >= layerLen && layer - i < 0) {
            break;
          }
          if (layer + i < layerLen) {
            res += layerNum[layer + i];
          }
          if (layer - i >= 0) {
            res += layerNum[layer - i];
          }
        }
        layerCache[layer] = res;
      }
    }
  }
};

int main(void) {
  Solution s;
  vector<vector<int>> edges1 = {{0, 1}, {0, 2}, {2, 3}, {2, 4}};
  vector<vector<int>> edges2 = {{0, 1}, {0, 2}, {0, 3}, {2, 7},
                                {1, 4}, {4, 5}, {4, 6}};
  vector<int> res = s.maxTargetNodes(edges1, edges2, 2);
  for (int k : res) {
    cout << k << " ";
  }
  return 0;
}