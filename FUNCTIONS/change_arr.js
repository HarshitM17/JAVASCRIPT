function change(arr,item_a,item_b){
    arr.push(item_a);
    arr.unshift(item_b);
    return arr;
}

var arr=[2,3,4,5];
console.log(change(arr,6,1));