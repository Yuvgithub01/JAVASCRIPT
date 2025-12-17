function graphDFS(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  for (let nei of graph[node] || [])
    graphDFS(graph, nei, visited);
}
module.exports = graphDFS;
