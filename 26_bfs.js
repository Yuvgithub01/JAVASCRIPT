function bfs(root) {
  let q = [root];
  while (q.length) {
    let n = q.shift();
    if (!n) continue;
    if (n.left) q.push(n.left);
    if (n.right) q.push(n.right);
  }
}
module.exports = bfs;
