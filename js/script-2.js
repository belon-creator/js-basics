// const genres = ["jazz", "blues"];
// genres.push("«Рок-н-рол»");
// console.log(genres[0]);

// console.log(genres[genres.length - 1]);
// console.log(genres.slice(0, 1));
// genres.splice(0, 0, "«Country»", "«Reggae»");
// console.log(genres);

// =====
// const values = "8 11";

// const sides = values.split(" ");

// const width = Number(sides[0]);
// const height = Number(sides[1]);

// const area = width * height;

// console.log(`Площадь прямоугольника равна ${area}`);

// ===

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`element number: ${i + 1} element value ${fruits[i]}`);
// }

// ===

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");
// console.log(namesArr);
// console.log(phonesArr);
// for (let i = 0; i < namesArr.length && phonesArr.length; i += 1) {
//   console.log(`name: ${namesArr[i]}, phone ${phonesArr[i]}`);
// }

// ===

// const string = "Welcome to the future";
// const words = string.split(" ");
// console.log(words);
// let result = "";
// for (let i = 1; i < words.length - 1; i += 1) {
//   result += words[i];
//   if (i < words.length - 2) {
//     result += " ";
//   }
// }
// console.log(result);

// const string = "Welcome to the future";
// let reversedString = "";

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reversedString += string[i];
// }

// console.log(reversedString);

// ===

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }
// console.log(min); // 1

//

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]} `);
//   }
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ===

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const words = message.split(" ");
//   const wordsCount = words.length;
//   const price = pricePerWord * wordsCount;
//   return price;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

//

// const findLongestWord = function (string) {
//   const wordsArr = string.split(" ");
//   let longestWord = wordsArr[0];
//   console.log(wordsArr);
//   for (const word of wordsArr) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

//

// const formatString = function (string) {
//   if (string.length > 40) {
//     string = string.slice(0, 40) + "...";
//   }
//   return string;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// вернется форматированная строка

//

// const checkForSpam = function (message) {
//   const normalizedMessage = message.toLowerCase();
//   return (
//     normalizedMessage.includes("spam") || normalizedMessage.includes("sale")
//   );
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//

// const findSmallestNumber = function (a, b) {
//   return a < b ? a : b;
// };
// console.log(findSmallestNumber(2, 5)); // 2
// console.log(findSmallestNumber(3, -1)); // -1
// console.log(findSmallestNumber(1, 0)); // 1

//

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     const string = `${i + 1} - ${items[i]}`;
//     console.log(string);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

//

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   }
//   return false;
// };

// const isLoginUnique = function (allLogins, login) {
//   return !allLogins.includes(login);
// };

// const addLogin = function (allLogins, login) {
//   if (!isLoginValid(login)) {
//     return "Ошибка! Логин должен быть от 4 до 16 символов.";
//   }
//   if (!isLoginUnique(allLogins, login)) {
//     return "Такой логин уже используется!";
//   }

//   allLogins.push(login);
//   return "Логин успешно добавлен!";
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

//

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < phonesArr.length; i += 1) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// function findLargestNumber(numbers) {
//   let largestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number > largestNumber) {
//       largestNumber = number;
//     }
//   }
//   return largestNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

const addCourse = function (name) {
  if (courses.includes(name)) {
    console.log("Ви вже маєте такий курс");
  } else {
    courses.push(name);
  }
};

addCourse("Express");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse("CSS"); // 'Ви вже маєте такий курс'

const removeCourse = function (name) {
  const index = courses.indexOf(name);

  if (index === -1) {
    console.log("Курс із таким ім'ям не знайдено");
  } else {
    courses.splice(index, 1);
  }
};

removeCourse("React");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Курс із таким ім'ям не знайдено'

const updateCourse = function (oldName, newName) {
  const index = courses.indexOf(oldName);
  if (index === -1) {
    console.log("Курс із таким ім'ям не знайдено");
  } else {
    courses[index] = newName;
  }
};

updateCourse("Express", "NestJS");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
