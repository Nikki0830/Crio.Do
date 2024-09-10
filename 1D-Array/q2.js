//Reversing an array

let arr = [1,2,3,4,5]//An array

let start = 0;//initializing with 0
let end = arr.length-1;//initializing with last index of array

while(start < end){//iterate from 0 to the last index
    [arr[start], arr[end]] = [arr[end], arr[start]]//swap the array values 
    start++;//increment the start vale
    end--;//
}

// //with for loop
// for(let i = start; i < end; i++){//iterate from 0 to the last index
//     [arr[start], arr[end]] = [arr[end], arr[start]]//swap the array values 
//     start++;//increment the start vale
//     end--;//
// }
console.log(arr)

//0 = 1, 4 = 5 [5,1]
//1 = 2, 3 = 4 [5,4,2,1]
//2 = 3 , 2 = 3 [5 , 4, 3, 2, 1]

//TC => O(n)//as it running through each element
//SC => O(1)// as we are not takimg any extra space istead of start and end

//Note (while loop is better a s we are defing start and end point) and 
//no optimizatuion needed as we have to touch all elemts at least once to swap the values




