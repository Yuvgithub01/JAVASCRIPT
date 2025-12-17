function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
module.exports = gcd;
