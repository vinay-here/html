// ---->WARMUP <---

Function.prototype.describe = function(name){
    console.log(`Function name is ${this.name}`);
}    //calling function name

function greet (){}  

greet.describe(); // oupt: function name is greet 


function sum (a,b){
    return a+b;
}
console.log(sum(5,4));  // normal function

const multiply = (a,b)=> a*b ; // arrow function

const mul =(a,b)=>{
    return a*b; // another way
}


const subtract =function (a,b){ //function expression
    return a-b;
}

console.log(subtract(5,4));



function applyOperation (a,b,operation){ //First class function 
    return operation (a,b) ; //  function ko as argument pass kar skte h
}

const result = applyOperation (5,4,(x,y) => x/y);
console.log(result);


// tiffin concept 

const counter = function (){

    let count =0
    return function(){ // in this function taking count from parent variable
        count ++
        return count;
    }
}


(function(){
    console.log('vinay');
})()

()()