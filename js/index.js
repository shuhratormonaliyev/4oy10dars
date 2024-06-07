
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





const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenOnly = nums.filter(function (n) {
  const remainder = n % 2

  return remainder === 0
})
