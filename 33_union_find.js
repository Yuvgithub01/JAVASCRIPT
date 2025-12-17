class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill(0).map((_,i)=>i);
  }
  find(x) {
    if (this.parent[x] !== x)
      this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
}
module.exports = UnionFind;
