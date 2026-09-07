// First repeated element
// const nums = [10, 5, 3, 4, 3, 5];
// const n = nums.length;
// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         if (nums[i] === nums[j]) {
//             console.log("First repeated element:", nums[i]);
//             process.exit(0);
//         }
//     }
// }
// console.log("No repeated element");

// Find the largest and smallest element in an array.
const nums = [5, 15, 22, 1, -15, 24];
let smallest = nums[0];
let largest = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallest) {
        smallest = nums[i];
    }
    if (nums[i] > largest) {
        largest = nums[i];
    }
}
console.log("Smallest:", smallest);
console.log("Largest:", largest);