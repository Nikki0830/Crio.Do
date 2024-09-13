//find trhe second largest element in the arrray

function secondLargest(arr){
    if(arr.length < 2){
        return null
    }


    //find the  largest element
    let largest = Math.max(...arr)

    //Initialize second largest to -Infinity and look for the second largest element

    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        //Ignore elements that are equal to the largest, and find the largest among the remaining elemnts
        if(arr[i] !== largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }

    //if no valid second largest was found then return null else return the second largest value

    return secondLargest === -Infinity ? null : secondLargest
}

// Example usage:
const arr = [3, 1, 4, 5, 9, 2, 8];

console.log(secondLargest(arr))//output = 8



   
    //Key Points:
    // Definition:

    // -Infinity represents the concept of negative infinity, which is smaller than any real number.
    // It is a part of JavaScript's Number type and behaves according to the rules of mathematical infinity.
    // Usage:
    
    // Typically used in comparisons or initial values when searching for the smallest possible value, such as in algorithms to find the largest or second-largest number in an array.