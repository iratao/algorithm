function twoSum(nums, target) {
	var numhash = {}
    for (var i = 0; i < nums.length; i++){
        numhash[nums[i]] = i
    }
    for (var i = 0; i < nums.length; i++) {
        expect = numhash[target - nums[i]]
        if (typeof expect !== 'undefined' && expect !== i) {
            return [i, expect]
        }
    }
}