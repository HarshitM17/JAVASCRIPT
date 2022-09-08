function number_do(val){
    var result=""

    var numbers={
        "One":1,
        "Two":2,
        "Three":3,
        "Four":4,
        "Five":5,
    };
    result=numbers[val];
    return result;
}
console.log(number_do("One"));
console.log(number_do("Five"));

// number_do("Four");