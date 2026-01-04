let obj1 ={
 fname :"vinay",
 lname:"kumar",

 getFullname :function(){
    if (this.lname!==undefined)return `${this.fname} ${this.lname}`;
    return this.fname;
 },
};


const obj2 ={
    fname :"ravi",
    lname:"kumar",
   
};
//Object.setPrototypeOf(obj2, obj1);
obj2.__proto__=obj1;

console.log(obj1.getFullname());
console.log(obj2.getFullname());