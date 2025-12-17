class LRUCache {
  constructor(cap) {
    this.cap = cap;
    this.map = new Map();
  }
}
module.exports = LRUCache;
