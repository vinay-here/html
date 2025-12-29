// condition weather cloudy , rainy , sunny

let weather ="rainy";

if (weather=== "rainy"){
    console.log("Carry umbrella");
}
else if (weather ==="cloudy"){
    console.log("take jacket");
} 
else {
    console.log('enjoy the sunny');
}


// guest for pizza AND Their Size :)
let numberGuest =5;

if (numberGuest <=2){
    console.log('small');
}
else if (numberGuest<=5){
    console.log('medium');
}
else{
    console.log('large');
}


// Grade Calculator
function gradeCal (marks) {
  

if (marks>=90){
    return 'A';
}
else if (marks>=80){
    return 'B';
}
else if (marks >=70){
    return 'C';
}
else if (marks >=60 ){
   return 'D';
}
else{
    return 'F';
}
}

console.log (gradeCal(98));
