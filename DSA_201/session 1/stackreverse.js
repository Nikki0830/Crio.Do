//reverse a string using stack Data structure
//two pinter is also fine

let str = "abcde"
let stack = []

///push all the string character to stack

for(let i = 0; i < str.length; i++){
    stack.push(str[i])
}

//remove all string character from stack as long as there is some

let result = ""
while(stack.length > 0){
    let x = stack.pop()
    result += x //appending the characters with result
}

console.log(result)