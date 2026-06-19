// Q1. Write a function to reverse a string.  
function reverseNumber(num) {
    return Number(num.toString().split('').reverse().join(''));
}

// console.log(reverseNumber(12345)); // 54321
//  without inbuilt methods 
 
function rever(arr){
    let left = 0
    let right = arr.length - 1
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}
 
// console.log(rever([1,2,3,4])) // 4,3,2,1


// **********************************************************

// 2. Maximum Number 
function findmax(arr){
    let max = arr[0]
    for(let num of arr){
        if(num > max) max = num 
    }
    return max 
}

// console.log(findmax([5, 2, 9, 1])) // 9

// **********************************************************

// 3. Count Vowels in String 

function countVowels(str){
    let Vowels = new Set(["a", "e", "i", "o","u"])
    let sum = 0
    for(let ch of str.toLowerCase()){
        if(Vowels.has(ch)) sum++
    }
    return sum
}
// console.log(countVowels("JavaScript"))

// **********************************************************

// 4. Check Palindrome

function isPalindrome(str){
    const s = str.toLowerCase().replace(/[a-z0-9]*g/, "")
    let left = 0
    let right = s.length - 1
    while(left < right){
        if(s[left] !== s[right]){
            return false
        }
        left++
        right--
    }
    return true
}
// console.log(isPalindrome("madam"))


// **********************************************************

// 5. Frequency Count Using Object 
function countfreq(arr){
    const obj = {}
    for(let item of arr){
       obj[item] = (obj[item] || 0) + 1
    }
    return obj
}

// console.log(countfreq(["a", "b","c", "a","a"]))


// **********************************************************

// 6.Remove Duplicates Using Set
function removeDuplicate(arr){
    return [...new Set(arr)]
}

// console.log(removeDuplicate([1,2,3,3,3,2,11,2,2,4]))

// without using set 

function removeDupli(arr){
    let result = []
    for(let num of arr){
        if(!result.includes(num)){
            result.push(num)
        }
    }
    return result
}

// console.log(removeDuplicate([1,2,3,3,3,2,11,2,2,4]))



// **********************************************************


// 7. Group Users by Role 

function userRole(users){
    return users.reduce((acc,user)=>{
        acc[user.role]= acc[user.role] || []
        acc[user.role].push(user)
        return acc
    },{})
}

// console.log(userRole([ { name: "A", role: "admin" }, { name: "B", role: "user" } ]))


// **********************************************************

// 8. Sum Using Reduce
function sumReduce(num){
    return num.reduce((total, sum)=> total + sum , 0)
}

// console.log(sumReduce([1,2,3]))


// **********************************************************

// 9. Flatten Nested Array
 function flattered(arr){
    return arr.reduce((acc, item)=>{
        return acc.concat(Array.isArray(item) ? flattered(item): item)
    }, [])
 }

console.log(flattered([1,2,[3]]))


// **********************************************************
