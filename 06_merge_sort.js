function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(l, r) {
  let res = [];
  while (l.length && r.length)
    res.push(l[0] < r[0] ? l.shift() : r.shift());
  return res.concat(l, r);
}
module.exports = mergeSort;
