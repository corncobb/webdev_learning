
function isEven(num){
    return num % 2 === 0;
}


function factorial(n) {
    if(n == 0){
        return 1;
    }
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function kebabToSnake(string){
    var newString = string.replace(/-/g, "_");
    return newString;
}


