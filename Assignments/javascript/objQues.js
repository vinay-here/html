const teas ={
    name: "lemon tea",
    type :"green",
    caffine:"low",

}

console.log(teas.name);
console.log (teas["type"]);

//Add new property
teas.origin ="Assam"

//change caffine level into medium
teas.caffine="Medium"

//remove teas property
delete teas.type

// check if property origin 
console.log("origin"in teas);

// use for loop to print all property of teas object

for (let key in teas){
    console.log(key, teas[key]);
}

//create nested object represents different type of teas

const myTeas ={
    greentea:{
        name:"green tea",
    },
    blacktea:{
        name:"black tea"
    }
}

// copy of tea object
const teaCopy ={
    ...myTeas
}
console.log(teaCopy);
