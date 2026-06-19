// Q1. Write a function to reverse a string.  
function reverseString(str){
    return str.split('').reverse().join('');
}
//  without inbuilt methods 
 
function rever(str){
    let result = ''

    for(let i = str.length - 1; i >= 0; i--){
        result += str
    }

    return result 
}