function case_switch(val){
    var answer;
    switch(val){
        case 1:
            answer="Alpha";
            break;
        case 2:
            answer="Beta";
            break;
        case 3:
            answer="Gamma";
            break;
    }
    return answer;
}
console.log(case_switch(2))