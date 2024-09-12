//Ertract numbers
// [a, 1, b, 2, c, d, 3, 4, e] => output =[1, 2, 3, 4]

// /** 
//  * @param {number} N
//  * @param {number[]} arr
//  * @return {number[]}
// //  */


// When someone asks you to "optimize the code," they generally want you to improve the code in terms of efficiency, readability, or maintainability. Optimization can involve several aspects:

// 1. Performance Optimization:
// Time Complexity: Reduce the amount of time the code takes to execute. This often involves finding more efficient algorithms or data structures. For example, changing a solution from O(n^2) to O(n) time complexity.
// Space Complexity: Minimize the amount of memory or storage the code uses. This can involve reducing the number of variables or using more space-efficient data structures.
// 2. Code Efficiency:
// Avoid Redundant Computations: Ensure that calculations or operations are not repeated unnecessarily.
// Optimize Data Access Patterns: For example, reduce the number of times data is accessed or manipulated, especially in performance-critical sections.
// 3. Readability and Maintainability:
// Simplify Code: Refactor code to be cleaner and more understandable. This may include breaking complex functions into smaller ones, using meaningful variable

//best way is this simple for loop
let n = 8
let arr = ["a", 3, "long", 17, "crio", "dsa", 100, 20]

//brute force approach
function extractNumber(n, arr){
    let result = []

    for(let i = 0; i < n; i++){
          // isNaN(item) returns true if item is not a number; !isNaN(item) checks if it's a valid number
        if(!isNaN(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(extractNumber(n, arr))

//TC = O(n) (as we are iterating through each element of the array in the worst case)
//SC = O(n) (for the extra space(array) which is result)

//OPTIMIZATION with higher order function(FILTER(), MAP())

function Enum(n, arr) {
    // Use filter() to create a new array containing only the elements from `arr` that are numbers.
    // The filter function returns `true` for elements that are not NaN (i.e., valid numbers).
    let result = arr.filter((item) => !isNaN(item));
    
    // Use map() to convert each element in the `result` array to a number.
    // `map(Number)` ensures that each element is explicitly converted to a number, though in this case it's redundant
    // because `filter()` already ensures the elements are valid numbers.
    return result.map(Number);
}

// Example usage
console.log(Enum(n, arr)); // Prints the array with numbers extracted and converted to number type

// Time Complexity:
// Filter Method:

// Operation: arr.filter((item) => !isNaN(item))
// Explanation: The filter() method iterates through each element of the arr array exactly once and applies the isNaN(item) check. This operation has a time complexity of O(n), where n is the length of the input array arr.
// Map Method:

// Operation: result.map(Number)
// Explanation: The map() method iterates through each element of the result array exactly once and applies the Number conversion. If result contains m elements, this operation has a time complexity of O(m). In the worst case, where all elements are valid numbers, m can be equal to n.
// Total Time Complexity: Since filter() and map() both iterate through the array independently, the overall time complexity is O(n), where n is the length of the input array arr. The map() operation does not add additional complexity beyond the filter() operation because m (the length of result) is at most n.

// Space Complexity:
// Intermediate Arrays:

// Space for result: The filter() method creates a new array result that stores valid numbers. In the worst case, this array can be as large as the input array, so the space complexity is O(n).
// Space for Final Result: The map() method creates a new array from result. This array also has a space complexity of O(n), assuming all elements in result are valid numbers.
// Total Space Complexity: The space complexity is O(n), where n is the length of the input array arr. This accounts for the space used by both the result array and the final array returned by map().

// Summary:
// Time Complexity: O(n) (due to iterating through the array once for filtering and once for mapping)
// Space Complexity: O(n) (due to creating intermediate arrays for filtering and mapping)

//another way of writing

function filterAndConvertToNumbers(arr) {
    return arr.reduce((acc, item) => {
        if (!isNaN(item)) {
            acc.push(Number(item));
        }
        return acc;
    }, []);
}
console.log(filterAndConvertToNumbers(arr))

// Time Complexity:
// reduce() Method:

// Iteration: The reduce() method iterates over each element of the arr array exactly once.
// Operations Inside Callback: Inside the callback function, isNaN(item) checks if item is not a number, and Number(item) converts it to a number if it is a valid number. Both operations are O(1) operations.
// Push Operation: The push() method adds an element to the acc array, which is also an O(1) operation.
// Total Time Complexity: Since reduce() iterates over each element of the array once, the overall time complexity is O(n), where n is the length of the array.

// Space Complexity:
// Accumulator Array (acc):

// Space Usage: The reduce() method creates a new array acc that stores all valid numbers. In the worst case, if all elements in arr are numbers, acc will have a size equal to the length of arr.
// Additional Variables: The function uses a few additional variables (such as item), but they do not scale with the input size.
// Total Space Complexity: The space used by the acc array is proportional to the number of valid numbers in the original array. Therefore, in the worst case where all elements are valid numbers, the space complexity is O(n), where n is the length of the input array.

// Summary:
// Time Complexity: O(n) (due to iterating through the array once)
// Space Complexity: O(n) (due to storing valid numbers in the acc array)











