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
