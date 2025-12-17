function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === target) return m;
    arr[m] < target ? l = m + 1 : r = m - 1;
  }
  return -1;
}
module.exports = binarySearch;
