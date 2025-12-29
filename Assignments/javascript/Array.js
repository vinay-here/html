let fruits =["apple","banana","mango"];
console.log(fruits[2]);
console.log(fruits.length);
fruits.push("grapes");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift(); // remove first element
console.log(fruits);
fruits.unshift("orange","apple"); // add element at first position
console.log(fruits);
fruits.splice(0,2); // remove element from index 1
console.log(fruits);
