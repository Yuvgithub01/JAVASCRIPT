function isAnagram(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join('');
}
module.exports = isAnagram;
