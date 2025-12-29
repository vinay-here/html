let myArray =[1,3,4,5,6,8];

function sumArray (n){
    sum =0;
   for (let i=0;i<n.length;i++){
    sum=sum+n[i];
   }


    return sum;
}
let result = sumArray(myArray);
let newRes= sumArray([2,3,1]) ;  //Don't forgot to ([])this.
console.log(`My result is ${newRes} :)`);