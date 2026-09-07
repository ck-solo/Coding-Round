// First repeated element
const nums = [10, 5, 3, 4, 3, 5];
const n = nums.length;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (nums[i] === nums[j]) {
            console.log("First repeated element:", nums[i]);
            process.exit(0);
        }
    }
}
console.log("No repeated element");