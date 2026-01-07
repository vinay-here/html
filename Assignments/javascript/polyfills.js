if(!Array.prototype.myForEach) {
    Array.prototype.myForEach =function (userFun){
     const OriginalArr=this;


for (let i=0; i<OriginalArr.length;i++){
    userFun(OriginalArr[i],i);
}
};
}

if (!Array.prototype.myMap){
    Array.prototype.myMap=function(userFn){
        const result =[]

        for (let i=0; i<this.length; i++){
            const val= userFn(this[i],i);
        result.push(val);
}
        return result;
    };
}

  

if (!Array.prototype.myFilter){
    Array.prototype.myFilter = function (userFun){
        const result =[];

         for(let i=0;i<this.length;i++){
         if   (userFun(this[i])){
              result.push(this[i]);
         }
        
    }
    return result;

};
   }
const arr =[1,2,3,4,5,6]

// Error: .forEach fun doesn't exist on arr variable

//Real signature pf forEach: No return, function as input , para as (value,index)
//calls my fun for every value. 

const Return =arr.myForEach(function(val,index){
    console.log(`value at index ${index} is ${val}`);
});
console.log('Return is',Return);


// Map 
//return =new arr ,each element iterate ,userFun

const n =arr.map(function(val,idx){
    return val*2;

});

const n2= arr.myMap((e)=>e*3);
console.log(n2);

//filter 
// signature: return new array | input userFun
// agar user ka function true return karta to current value in new Array

const n3 =arr.myFilter((val)=>val % 2==0);
console.log('Even nos are',n3);
