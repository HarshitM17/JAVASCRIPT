var creature_a={
    "Name":"Sheru",
    "Legs":4,
    "Speaks":"Woof -woof!!"
};
var creature_b={
    "Name":"Gorilla",
    "Legs":2,
    "Speaks":"huu-huu"
};
var creature_c={
    "Name":"",
    "Legs":0,
    "Speaks":""
};
console.log(creature_a);
console.log(creature_b);

// Dot notations are used for the perticular info

console.log(creature_a.Name);
console.log(creature_b.Name);

// bracket notations are used for the perticular info

console.log(creature_a["Speaks"])

console.log(creature_b["Speaks"])

// add attributes to creature_c

creature_c.Name="Harshit";
creature_c.Legs=2;
creature_c.Speaks="Hindi";
console.log(creature_c);

// add new property
creature_c.species="Human";
console.log(creature_c);

// delete property
delete creature_c.Legs;
console.log(creature_c);