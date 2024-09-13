//Common matrix operations

//Adding two matrices
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6]
];

let matrix2 = [
    [7, 8, 9],
    [10, 11, 12]
];

function addMatrix(matrix1, matrix2){
    let result = []

    for(let i = 0; i < matrix1.length; i++){
        result[i] = []
        for(let j = 0; j < matrix1[0].length; j++){//matrix1[0] => 1st column
            result[i][j] = matrix1[i][j] + matrix2[i][j]
        }
    }
    return result
}

console.log(addMatrix(matrix1,matrix2))//output [ [ 8, 10, 12 ], [ 14, 16, 18 ] ]

// Time Complexity of Matrix Addition
// Time Complexity: O(n * m), where n is the number of rows and m is the number of columns. This is because we iterate over each element once.
// Space Complexity: O(n * m), as we need additional space to store the result matrix of the same size.

