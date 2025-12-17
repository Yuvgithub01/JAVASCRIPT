function lis(nums) {
  let dp = Array(nums.length).fill(1);
  return Math.max(...dp);
}
module.exports = lis;
