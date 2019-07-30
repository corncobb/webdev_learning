

window.setTimeout(function(){


    }, 500);

function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(first !== arr[i]){
            return false;
        }
    }
    return true;
}

function sumArray(arr){
    var temp = 0;
    for(var i = 0; i < arr.length; i++){
        temp+=arr[i];
    }
    return temp;
}

function max(arr){
    var temp = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > temp){
            temp = arr[i];
        }
    }
    return temp;
}