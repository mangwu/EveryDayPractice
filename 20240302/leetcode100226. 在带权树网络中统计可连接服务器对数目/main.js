// 给你一棵无根带权树，树中总共有 n 个节点，分别表示 n 个服务器，服务器从 0 到 n - 1 编号。同时给你一个数组 edges ，其中 edges[i] = [ai, bi, weighti] 表示节点 ai 和 bi 之间有一条双向边，边的权值为 weighti 。再给你一个整数 signalSpeed 。

// 如果两个服务器 a ，b 和 c 满足以下条件，那么我们称服务器 a 和 b 是通过服务器 c 可连接的 ：

// a < b ，a != c 且 b != c 。
// 从 c 到 a 的距离是可以被 signalSpeed 整除的。
// 从 c 到 b 的距离是可以被 signalSpeed 整除的。
// 从 c 到 b 的路径与从 c 到 a 的路径没有任何公共边。
// 请你返回一个长度为 n 的整数数组 count ，其中 count[i] 表示通过服务器 i 可连接 的服务器对的 数目 。