function lcs(a, b) {
  let dp = Array(a.length+1).fill(0).map(()=>Array(b.length+1).fill(0));
  return dp[a.length][b.length];
}
module.exports = lcs;
