// const name = "Генератор защитного поля";
// let price = 1000;
// let message = `Выбран «${name}», цена за штуку ${price} кредитов`;
// console.log(message);

// price = 2000;
// console.log(message);

// ======

// const total = 100;
// const ordered = 50;

// if (ordered > total) {
//   console.log("На складе недостаточно твоаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// ============

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// const userInput = prompt("Enter your password");

// if (userInput === null) {
//   console.log("Отменено пользователем!");
// } else if (userInput === ADMIN_PASSWORD) {
//   console.log("Добро пожаловать!");
// } else {
//   console.log("Доступ запрещен, неверный пароль!");
// }
// alert(message);

// ===============

// const credits = 23580;
// const pricePerDroid = 3000;
// let input = prompt("enter number");
// let totalPrice = Number(input) * pricePerDroid;

// if (input === null) {
//   console.log("Отменено пользователем!");
// } else if (credits < totalPrice) {
//   console.log("Недостаточно средств на счету!");
// } else {
//   console.log(
//     `Вы купили ${input} дроидов, на счету осталось ${credits} кредитов.`
//   );
// }

// ==========================

// let input = prompt("Enter your contry");
// input = input.toLowerCase();
// let price;
// let country;
// switch (input) {
//   case "китай":
//     price = 100;
//     country = "Китай";
//     alert(`Доставка в ${country} будет стоить ${price} кредитов`);
//     break;
//   case "чили":
//     price = 250;
//     country = "Чили";
//     alert(`Доставка в ${country} будет стоить ${price} кредитов`);
//     break;
//   case "австралия":
//     price = 170;
//     country = "Австралия";
//     alert(`Доставка в ${country} будет стоить ${price} кредитов`);
//     break;
//   case "индия":
//     price = 80;
//     country = "Индия";
//     alert(`Доставка в ${country} будет стоить ${price} кредитов`);
//     break;
//   case "ямайка":
//     price = 120;
//     country = "Ямайка";
//     alert(`Доставка в ${country} будет стоить ${price} кредитов`);
//     break;

//   default:
//     alert("В вашей стране доставка не доступна");
//     break;
// }

// ===

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);

// ===

// let students = 100;
// students += 50;
// console.log(students);

// ===

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ===
// const value = 27.7;
// console.log("Math.floor()", Math.floor(value));
// console.log("Math.ceil()", Math.ceil(value));
// console.log("Math.round()", Math.round(value));

// ===

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ===

// const totalMinutes = 1441;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// =====

// const userInput = prompt("Какое официальное название JavaScript?");
// if (userInput === "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

// ====

// let userInput = prompt("Введите число");
// userInput = Number(userInput);
// if (userInput === 0) {
//   console.log("Это ноль");
// } else if (userInput >= 1) {
//   console.log("Это положительное число");
// } else {
//   console.log("Это отрицательное число");
// }

// ===

// let link = "https://my-site.com/about";
// // Пиши код ниже этой строки
// if (link.includes("my-site")) {
//   link += "/";
//   console.log("Link updated:", link);
// } else {
//   console.log(link);
// }
// // Пиши код выше этой строки
// console.log(link);

// ===

// let link = "https://my-site.com/about";
// // if (link.includes("my-site") && !link.endsWith("/")) {
// //   link += "/";
// // }
// // console.log(link);

// link = link.includes("my-site") && !link.endsWith("/") ? (link += "/") : link;
// console.log(link);

// ===

// const hours = 18;

// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

// ===

// const daysUntilDeadline = 0;
// // Пиши код ниже этой строки
// if (daysUntilDeadline === 0) {
//   console.log("Сегодня");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Послезавтра");
// } else if (daysUntilDeadline >= 3) {
//   console.log("Дата в будущем");
// }

// ===

// const daysUntilDeadline = 3;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сегодня");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Послезавтра");
//     break;

//   default:
//     console.log("Дата в будущем");
//     break;
// }

// ===

// const max = 100;
// const min = 20;

// for (let i = min; i < max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// ===

// let login = prompt("Введите логин:", "");

// if (login === "Админ") {
//   let password = prompt("Введите пароль:", "");

//   if (password === "Я админ") {
//     console.log("Здравствуйте!");
//   } else if (password === null || password === "") {
//     console.log("Отменено");
//   } else {
//     console.log("Неверный пароль");
//   }
// } else if (login === null || login === "") {
//   console.log("Отменено");
// } else {
//   console.log("Я вас не знаю");
// }
