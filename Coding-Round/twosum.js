var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};


// return the number
function twoSumNumbers(nums, target) {
    let set = new Set();
    for (let num of nums) {
        let complement = target - num;
        if (set.has(complement)) {
            return [complement, num];
        }
        set.add(num);
    }
    return [];
}
console.log(twoSumNumbers([3, 8, 12, 4], 12));