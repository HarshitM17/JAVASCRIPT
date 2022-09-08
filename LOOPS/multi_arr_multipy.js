function muli_multiply(arr){
    var nes_arr=1;
    for (var i=0;i<arr.length;i++){
        for (var j=0;j<arr[i].length;j++){
            nes_arr*=arr[i][j];
        }
    }
    return nes_arr;
}

array=[[1,2],[3,4],[5,6,7]];
console.log(muli_multiply(array))
