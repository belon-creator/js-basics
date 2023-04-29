// const playlist = {
//   name: "my playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   getName() {
//     console.log("getName");
//   },
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },
//   updadeRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };
// console.log(playlist);
// playlist.getName();
// playlist.changeName("new name");
// playlist.addTrack("new track");
// playlist.updadeRating(4.8);
// playlist.qwe = 5;
// console.log(playlist);
// playlist.qwe = 10;
// console.log(playlist);
// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks);
// console.log(playlist.trackCount);

// const userName = "Mango";
// const email = "mail@ail.com";

// const signup = {
//   userName,
//   email,
// };

// console.log(signup);

// const inputName = "color";
// const inputValue = "red";

// const color = {
//   [inputName]: inputValue,
// };

// console.log(color);

// const a = {
//   x: 1,
//   y: 2,
// };

// const b = a;

// b.c = 3;

// console.log(a);
// console.log(b);
// console.log(a === b);

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 2,
// };
// let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }
// console.log(totalFeedback);

// const values = Object.values(feedback);
// console.log(values);
// for (const value of values) {
//   totalFeedback += value;
// }
// console.log(totalFeedback);

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend.online);
// }

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     console.log(friend.name === name);
//     if (friend.name === friendName) {
//       return "FIND";
//     }
//   }
//   return "NOT FIND";
// };
// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(getAllNames(friends));

// const getOnlineFriends = function (allFriends) {
//   const onlineArr = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineArr.push(friend);
//     }
//   }
//   return onlineArr;
// };
// console.log(getOnlineFriends(friends));

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// console.log(user);

// function displayData() {
//   const keys = Object.keys(user);

//   for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }

// displayData();

//

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let totalSalary = 0;
// const allSalaries = Object.values(salaries);

// function countTotalSalary() {
//   for (const salary of allSalaries) {
//     totalSalary += salary;
//   }
//   console.log(`totalSalary = ${totalSalary}`);
// }
// countTotalSalary();

//

// const countProps = function (obj) {
//   const numberOfValues = Object.keys(obj);
//   console.log(numberOfValues.length);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

//

// const findBestEmployee = function (employees) {
//   let maxTasks = 0;
//   let bestEmployee;

//   for (let employee in employees) {
//     if (employees[employee] > maxTasks) {
//       maxTasks = employees[employee];
//       bestEmployee = employee;
//     }
//   }
//   return bestEmployee;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

//

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];
// console.table(stones);

// function calcTotalPrice(stones, stoneName) {
//   //
//   stoneName = stones.name;
//   for (const stone of stones) {
//     console.log(`${stone.name} = ${stone.price * stone.quantity}`);
//   }
// }

// calcTotalPrice(stones, stones.name);

//

// const countTotalSalary = function (employees) {
//   let totalSarary = 0;
//   const salaries = Object.values(employees);
//   for (const salary of salaries) {
//     totalSarary += salary;
//   }
//   return totalSarary;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

//

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const result = [];

//   for (const item of arr) {
//     if (prop in item) {
//       result.push(item[prop]);
//     }
//   }

//   return result;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

//

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  productName = products.name;
  allProdcuts = products;

  for (const product of products) {
    console.log(`${product.name} = ${product.price * product.quantity}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
