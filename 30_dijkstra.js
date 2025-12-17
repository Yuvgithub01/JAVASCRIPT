function dijkstra(graph, start) {
  let dist = {};
  for (let v in graph) dist[v] = Infinity;
  dist[start] = 0;
  return dist;
}
module.exports = dijkstra;
