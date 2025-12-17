function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined)
      return [map[target - nums[i]], i];
    map[nums[i]] = i;
  }
  return [];
}
module.exports = twoSum;
