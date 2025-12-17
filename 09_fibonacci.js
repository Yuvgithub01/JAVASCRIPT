function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return n === 0 ? 0 : b;
}
module.exports = fibonacci;
