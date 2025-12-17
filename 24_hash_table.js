class HashTable {
  constructor() { this.map = {}; }
  set(k, v) { this.map[k] = v; }
  get(k) { return this.map[k]; }
}
module.exports = HashTable;
