var myobj=[
    {

        "Name":"Harshit",
        "Lastname":"Mathur",
        "number":9887997335
    },
    {
        "Name":"Chitrank",
        "Lastname":"Tak",
        "number":9876543210
    },
    {
        "Name":"Sambhav",
        "Lastname":"Singh",
        "number":8735725699
    }
]
function profile_func(myobj,name,property){
    for (var i=0;i<myobj.length;i++){
        if(myobj[i].Name==name){
            console.log(myobj[i][property]);
        }
        
    }
}

// console.log(profile_func(myobj,"Harshit",number))
profile_func(myobj,"Harshit","number");