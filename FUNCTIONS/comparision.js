function check(num){
    if (num<=40 && num>=20){
        return "Num in req range";
    }
    return "Not in range";
}

function orrr(num){
    if (num==0 || num==1){
        return "True";
    }
    return "False";
}

console.log(check(30));
console.log(check(50));
console.log(orrr(30));
console.log(orrr(0));