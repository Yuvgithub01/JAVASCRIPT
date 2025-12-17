function graphBFS(graph, start) {
  let q = [start], visited = new Set([start]);
  while (q.length) {
    let n = q.shift();
    for (let nei of graph[n] || [])
      if (!visited.has(nei)) {
        visited.add(nei);
        q.push(nei);
      }
  }
}
module.exports = graphBFS;
