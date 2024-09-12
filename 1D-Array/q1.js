//find maximum value in the array

//brute force approach

let arr = [1,2,4,56,78]//an array
let max = arr[0]//initializing array[0] value with max

for(let i = 0; i < arr.length; i++){//iterate the loop from 0 to arra.length
    if(arr[i] > max){//checking if the any of the value is bigger than max or not  (minimum is also same just put < here instead of >)
        max = arr[i]//string the suitable value in max
    }
}
console.log(max)//finally printing the max value

//TIME COMPLEXITY ====> 0(n)// as we are running the loop till n
//SPACE COMPLEXITY ====> 0(1) as we are changing the values in a same array or not taking any additional space

//Note (Here we cannot optimize the code because each element in the array need to be iterate once to find the maximum value)

///with reduce()
// const arr = [1, 5, 3, 7, 2];
// const max = arr.reduce((acc, currentValue) => {
//     return currentValue > acc ? currentValue : acc;
// }, arr[0]);
// console.log(max); // Output: 7