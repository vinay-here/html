let p1 ={
    fname:"vinay",
    lname:"kumar",
    address :{
        hno:1,
        street:2
    }
}

// let p2 ={
//     ...p1 //spread Opretor but it fails for deeper or nested objects
// }
const p1String = JSON.stringify(p1)
console.log (p1String);
let p2 =JSON.parse(p1String)


p2.fname ="ravi"
p2.address.hno ="hacked"

console.log(p2);
console.log(p1);

console.log(p1.address.hno)
