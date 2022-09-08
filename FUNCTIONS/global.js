// first global variable;

var first_global=10;

// intializing func to give a global var without func_a

function func_a(){
    second_global=5;
}

// intializing seconffunc

function func_b(){
    if (typeof first_global!="undefined"){
        console.log("First global is -->",first_global);
    }
    if (typeof second_global!="undefined"){
        console.log("Second global is -->",second_global);
    }
}

// recalling the func

func_a()
func_b()