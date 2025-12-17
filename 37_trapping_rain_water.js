function trap(h) {
  let l=0,r=h.length-1,lm=0,rm=0,res=0;
  while(l<r){
    if(h[l]<h[r]){
      lm=Math.max(lm,h[l]);
      res+=lm-h[l++];
    } else {
      rm=Math.max(rm,h[r]);
      res+=rm-h[r--];
    }
  }
  return res;
}
module.exports = trap;
