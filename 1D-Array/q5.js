//Extract numbers(anti-clockwise)
function extractElement(){
    let arr = [1,2, 3,4,5]//ouutput 2 3 4 5 1

    let res = arr.shift()//remove the first element
    
    arr.push(res)//adding the removed elemnt at the last
    
    return arr
}

// console.log(extractElement(arr)) //give you an err(ReferenceError: arr is not defined)
console.log(extractElement())


// Time Complexity:
// arr.shift():

// The shift() method removes the first element from the array and shifts all the remaining elements one position to the left. This involves moving all elements in the array by one position, which takes O(n) time, where n is the length of the array.
// arr.push(res):

// The push() method adds an element to the end of the array, which takes constant time O(1).
// Total Time Complexity: The overall time complexity is dominated by the shift() operation, which makes the total time complexity O(n).

// Space Complexity:
// In-place Operations:
// The function modifies the input array in place (removing the first element and adding it to the end). The only extra space used is for the temporary variable res, which stores a single element.
// Total Space Complexity: The space complexity is O(1), since the function only uses a fixed amount of extra space regardless of the input size.
// Summary:
// Time Complexity: O(n) (due to the shift() operation)
// Space Complexity: O(1) (in-place operation with a constant amount of extra space)
