// teas array 
let teas =["lemon","black","green","oolong","herbal"]
   console.log(teas);

// add chamomile
teas.push("chamomile")
console.log(teas);

// remove oolong
teas.splice(3,1)
console.log(teas);

// sort alphabet order
teas.sort();
console.log(teas);

// for loop each teas in array
for (let i=0;i<teas.length;i++){
   console.log(teas);
}

// filter  caffinatedTeas
let caffinatedTeas =teas.filter((tea)=> tea!=="herbal");
console.log(caffinatedTeas);

// new Array with for loop all teas with uppercase
let uppCaseTea =[]
for (let i=0;i<teas.length;i++){
   uppCaseTea.push(teas[i].toUpperCase())
}
console.log(uppCaseTea);

  // tea with most character 

  let longestTea =""
  for (let i=0;i<teas.length;i++){
   if (teas[i].length>longestTea.length){
      longestTea=teas[i]
   }
  }
  console.log(longestTea);

  // reverse the tea oeder

  let Reverse = teas.reverse();
  console.log(Reverse);
