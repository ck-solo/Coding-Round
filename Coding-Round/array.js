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
// const nums = [5, 15, 22, 1, -15, 24];
// let smallest = nums[0];
// let largest = nums[0];
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < smallest) {
//         smallest = nums[i];
//     }
//     if (nums[i] > largest) {
//         largest = nums[i];
//     }
// }
// console.log("Smallest:", smallest);
// console.log("Largest:", largest);


// find the second largest 
// const nums = [10, 5, 20, 8, 20, 15];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > largest) {
//         secondLargest = largest;
//         largest = nums[i];
//     } else if (nums[i] > secondLargest && nums[i] !== largest) {
//         secondLargest = nums[i];
//     }
// }
// console.log("Second largest:", secondLargest);


// reverse array 
// const nums = [10, 20, 30, 40, 50];
// let reversed = [];
// for (let i = nums.length - 1; i >= 0; i--) {
//     reversed.push(nums[i]);
// }
// console.log(reversed);



// sum of all elements
// const nums = [10, 20, 30, 40];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
// }
// console.log("Sum:", sum);