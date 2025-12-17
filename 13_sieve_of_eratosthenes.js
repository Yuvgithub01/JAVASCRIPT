function sieve(n) {
  let prime = Array(n+1).fill(true);
  prime[0] = prime[1] = false;
  for (let i = 2; i * i <= n; i++)
    if (prime[i])
      for (let j = i * i; j <= n; j += i)
        prime[j] = false;
  return prime.map((v,i)=>v?i:null).filter(v=>v);
}
module.exports = sieve;
