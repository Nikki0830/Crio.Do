//find local peak

// Problem Description
// Write a program to find the peaks in the sequence.

// An element is a peak element if it is greater than its neighbors (a[i] > a[i-1] AND a[i] > a[i+1]).

// For the leftmost element, only check the element to the right of it (a[0] > a[1]). Similarly, for the rightmost element, only check the element to the left of it (a[n-1] > a[n-2]).

// Below is an example, Input: Arr[] = [10,5,6,3,4,8,9,15] Output: [10,6,15]

// Input format
// First line contains an integer N the number of integers int the input array

// Second line contains the integers in the array

// Output format
// Return an array containing all the local peak elements

// Sample Input 1
// 7

// 4 2 3 1 5 6 4

// Sample Output 1
// 4 3 6

// Explanation
// Here, 4 is a local peak as 4 > 2 and there is no integer left of 4

// 3 is a local peak as 3 > 2 and 3 > 1

// 6 is a local peak as 6 > 5 and 6 > 4
let nLength = 7;
let arrVal = [4,2,3,1,5,6,4]

function localPeak(n, arr){
    let peak = []

    if(arr[0]> arr[1]){
       peak.push(arr[0])
    }

    for(let i = 1; i < n; i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            peak.push(arr[i])
        }
    }

    if(arr[n-1] > arr[n-2]){
        peak.push(arr[n-1]) 
    }

    return peak;
}

console.log(localPeak(nLength,arrVal))

// . Output: [4, 3, 6]
// This output format represents an array containing all the local peaks. 
//It is returned as a single array where all peaks are collected and then outputted tog

// Final Complexity:
// Time Complexity (TC): O(n), as you iterate through the array once.
// Space Complexity (SC): O(n), since the worst case requires storing around half the elements of the array in the peak array
//(which still simplifies to O(n))(actuall O(n/2)) remove constants so O(n).


//OPTIMIZATION WITH SC


// Yes, there is a possible optimization to reduce the space complexity by avoiding the use of the extra array peak.
//Instead of storing the peaks in a separate array, you could directly print them or return them in another form,
//such as joining them into a string. This would change the space complexity from O(n) to O(1).

// (BUT if you are printing the values then it is poosible otherwise if in returning we need to take extra variable for storing)

let n = 7;
let arr = [4,2,3,1,5,6,4]

function localPeak2(n, arr){
    // let peak = []

    if(arr[0]> arr[1]){
       console.log (arr[0])
    }

    for(let i = 1; i < n; i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            console.log (arr[i])
        }
    }

    if(arr[n-1] > arr[n-2]){
        console.log (arr[n-1]) 
    }

    // return peak;
      // If no peak is found, return a default value or null
      return null;
}

localPeak2(nLength,arrVal) , "Optimazation"

// 2. Output:
// 4
// 3
// 6
// This output format represents each peak being printed separately on a new line.
// Instead of returning or storing the peaks, they are directly printed as soon as they are found, one by one.

// Key Differences:
// Array Format ([4, 3, 6]):
// All peaks are collected in a single array and displayed together.
// More structured, and you can manipulate the array (e.g., access specific elements, loop over it, etc.).
// Separate Print Statements (4, 3, 6):
// Peaks are printed one by one as they are found.
// No array is created; the output is immediate, but once printed, you can't further manipulate the values unless you store them separately.




