//find quadrant
//Given cordinates of a (x,y)n2d plane. find in which quadrrant does this point lie
//input = -5.5, 2------output = 2
//input = -1, 1------output = 4

//solution with if else(paly with positive and negative)


function findQuadrant(x,y){
    if(x > 0 && y > 0){
        return 1
    }else if(x < 0 && y > 0){
        return 2
    }else if(x < 0 && y < 0){
        return 3
    }else{
        return 4
    }
}

console.log(findQuadrant(-5.5, 2))
console.log(findQuadrant(1, -1))