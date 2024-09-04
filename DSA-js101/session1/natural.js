//print first 100 natuural numbers
//exaample of while loop
//manual way

function printNumbers(){
    let i = 1
    while(i <= 100){
        console.log(i)
        i++
    }
}
printNumbers()

//Dynamic way(Giving control to the main function)

function printNumbers(N){
    let i = 1
    while(i <= N){
        console.log(i)
        i++
    }
}
printNumbers(101)

