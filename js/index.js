
// ForEach metodi yordamida ishlanadigan masalalar.



// ========================= 1 -misol ======================


// const numbers = [1, 2, 3, 4]

// numbers.forEach((num) => {
//   const square = num * num
//   console.log(square)
// })


// ========================= 2 -misol ======================


// const numbers = [1, - 2, 3, - 4]

// numbers.forEach((num) => {
//     if(num > 0) {
//         console.log(num);
//     }
// })



// ========================= 3 -misol ======================


// const numbers = [1, 2, 3, 4]

// numbers.forEach((num) => {
//   const square = num * 2
//   console.log(square)
// })


// ========================= 4 -misol ======================


// const numbers = [1, 2, 3, 4];
// let sum = 0;
// numbers.forEach((num) => {
//   sum = sum + num;
//   return sum;
 
// })
// console.log(sum)



// filter metodi yordamida ishlanadigan masalal




// ========================= 1 -misol ======================

// let arr = [1, -2, 3, 4, -5, 6, -7, 8, -9, 10];

// let sum = arr.filter(function(value) {
//   return value > 0;
// });

// console.log(sum);



// ========================= 2 -misol ======================



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = arr.filter(function (value) {
//   if(value % 2 == 0) {
//     return value;
//   }
// })
// console.log(sum);



// ========================= 3 -misol ======================


// let arr = ["olma", "banan", "kivi", "ananas", "mandarin", "shaftoli"];

// let sum = arr.filter(function(value) {
//   return value.length < 5
 
// }
// )
// console.log(sum);


// ========================= 4 -misol ======================



// let arr = [12, 55, 37, 11, 33, 22, 88, 9, 1, 3, 4, 5, 6, 7];

// let sum = arr.filter(function(value){
//   return value > 18
// })
// console.log(sum);







// map metodi yordamida ishlanadigan masalalar.


// ========================= 1 -misol ======================



// let arr = [1, 3, 4, 5, 6, 8, 9];

// let sum = arr.map(function(value){
//   return value * value
// })
// console.log(sum);


// ========================= 2 -misol ======================


// let arr = [1, 3, 4, 5, 6, 8, 9];

// let sum = arr.map(function(value){
//   return value + 5
// })
// console.log(sum);


// ========================= 3 -misol ======================



// let arr = ["olma", "banan", "kivi", "ananas", "mandarin", "shaftoli"];

// let sum = arr.map(function(value){
//   return value.toUpperCase();
// });
// console.log(sum);


// ========================= 4 -misol ======================


// let arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9];

// let sum = arr.map(function(value){
//   return value * value
// })
// console.log(sum);





// some/every metodi yordamida ishlanadigan masalalar.


// ========================= 1 -misol ======================


// let arr = [1, 3, 4, 5 ,6 ,-1, -2, 12, 14, 154];

// let sum = arr.some(function(value){
//   return value < 0
// })
// console.log(sum);


// ========================= 2 -misol ======================



// let arr = ["apple", "banana", "cherry", "watermelonand", "grape", "strawberry"];

// let sum = arr.some(function(value){
//   return value.length > 10
// })
// console.log(sum);


// ========================= 3 -misol ======================


// const numbers = [1, -2, 3, 4, 5];

// const all = numbers.every(num => num > 0);

// console.log(all); 


// ========================= 4 -misol ======================


// let arr = ["apple", "banana", "cherry", "watermelonand", "grape", "strawberry"];
// const all = arr.every(num => num => toUpperCase());
// console.log(all);



// ================= UMIMIY =========================


// ========================= 1 -misol ======================


// let arr = [1, 2, 3, 4, 5, 6, 7];

// let sum = arr.includes(4);
// console.log(sum);


// ========================= 2 -misol ======================



// let arr = [1, 2, 2, 44, 55, 11, 33, 2];
// let sum = arr.indexOf(2);
// console.log(sum);



// ========================= 3 -misol ======================


// let arr = [1, 2, 2, 44, 55, 2, 11, 33, ];
// let sum = arr.lastIndexOf();
// console.log(sum);


// ========================= 4 -misol ======================



// let arr = [5, 12, 8, 130, 44];
// let sum = arr.find(element => element > 10);
// console.log(sum); 

// ========================= 5 -misol ======================


// let arr = [5, 12, 8, 130, 44];
// let sum = arr.findIndex(element => element > 10);
// console.log(sum);


// ========================= 7 -misol ======================



