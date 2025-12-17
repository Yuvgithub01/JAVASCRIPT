const gcd = require('./10_gcd_euclidean');
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
module.exports = lcm;
