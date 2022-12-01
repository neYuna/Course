function calculateVolumeAndArea(ribLength) {
  if (
    ribLength > 0 &&
    typeof ribLength == "number" &&
    Number.isInteger(ribLength)
  ) {
    let area = ribLength * ribLength * 6;
    let volume = ribLength * ribLength * ribLength;
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
  } else {
    return "При вычислении произошла ошибка";
  }
}

// console.log(calculateVolumeAndArea(5));

function getCoupeNumber(placeNumber) {
  if (placeNumber > 36) {
    return "Таких мест нет";
  } else {
    return Math.ceil(placeNumber / 4);
  }
}

// console.log(getCoupeNumber(236));

function getHoursFromMinutes(minutes) {
  let hour = Math.floor(minutes / 60);
  let leftMinutes = minutes % 60;
  let word;
  if (minutes >= 0 && typeof minutes == "number" && Number.isInteger(minutes)) {
    if (hour == 1) {
      word = "час";
    } else if (hour == 2 || hour == 3 || hour == 4) {
      word = "часа";
    } else {
      word = "часов";
    }

    return `Это ${hour} ${word} и ${leftMinutes} минут`;
  } else {
    return "Ошибка проверьте данные";
  }
}

// console.log(getHoursFromMinutes(546));

function findMaxNumber(a, b, c, d) {
  if (
    arguments.length < 4 ||
    typeof a != "number" ||
    typeof b != "number" ||
    typeof c != "number" ||
    typeof d != "number"
  ) {
    return 0;
  } else {
    return Math.max(a, b, c, d);
  }
}

// console.log(findMaxNumber(39, 7, 9, 23));

function fib(num) {
  let past = 0;
  let future = 0;
  let present = 0;
  let res = "";
  if (num > 1) {
    for (let i = 0; i < num; i++) {
      if (i === 1) {
        past = 1;
        future = present + past;
        res += `${future} `;
        past = present;
        present = future;
      } else {
        future = present + past;
        res += `${future} `;
        past = present;
        present = future;
      }
      return res;
    }
  } else if (typeof num === "string" || num === 0) {
    return "";
  } else {
    return "0";
  }
}

// console.log(fib(4));

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng", "french"],
    programmingLangs: {
      js: "20%",
      php: "10%",
      python: "5%",
      java: "0%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function ({ age, skills }) {
    return `Мне ${age} и я владею языками: ${skills.languages
      .join(" ")
      .toUpperCase()}`;
  },
};

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience({ skills }) {
  return skills.exp;
}

// console.log(showExperience(personalPlanPeter))

function showProgrammingLangs({ skills }) {
  let key;
  let res = "";
  for (key in skills.programmingLangs) {
    res += `Язык ${key} изучен на ${skills.programmingLangs[key]}\n`;
  }
  return res;
}

// console.log(showProgrammingLangs(personalPlanPeter));

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let str = "Семья состоит из: ";

  arr.forEach((member) => {
    str += `${member} `;
  });

  return str;
}

// console.log(showFamily(family));

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standartSizeStrings(arr) {
  let res = "";
  arr.forEach((cities) => {
    res += `${cities.toLowerCase()} `;
  });
  return res;
}

// console.log(standartSizeStrings(favoriteCities));

const someString = "This is some strange string";

function reverse(str) {
  let res;
  let fin;
  let string = "";
  res = str.split("");
  res.forEach((letter, index, arr) => {
    fin = res.length - 1 - index;
    index = fin;
    string += arr[fin];
  });
  return string;
}

// console.log(reverse(someString));

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];
const commonArr = [...baseCurrencies, ...additionalCurrencies];
function availableCurr(arr, missingCurr) {
  let str = "Доступная валюта: \n";
  if (arr.length === 0) {
    return "Нет доступных валют";
  }
  arr.forEach((curr) => {
    if (curr !== missingCurr) {
      str += `${curr} \n`;
    }
  });
  return str;
}

// console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30, //за один куб метр
  budget: 50000, // общий бюджет
};

function isBudgetEnough(data) {
  let Sshops = 0;
  data.shops.forEach((shop) => {
    Sshops += shop.width * shop.length;
  });
  let volume = Sshops * data.height;

  return data.moneyPer1m3 * volume > data.budget
    ? "Бюджета не достаточно, сидите в холоде"
    : "Бюджета достаточно, грейтесь";
}

// console.log(isBudgetEnough(shoppingMallData));

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
  "Egor",
  "Yuna",
];

function sortStudentsByGroups(arr) {
  arr = arr.sort();
  debugger;
  let newArr = [];
  let smallArr = [];
  let leftStudents = "Оставшиеся студенты: ";
  arr.forEach((student) => {
    debugger;
    smallArr.push(student);
    if (smallArr.length === 3 && newArr.length < 3) {
      newArr.push(smallArr);
      debugger;
      smallArr = [];
    } else if (newArr.length >= 3) {
      leftStudents += `${student} `;
      debugger;
    }
  });
  newArr.push(leftStudents);
  return newArr;
  debugger;
}
// console.log(sortStudentsByGroups(students));debugger

function isOpen(prop) {
  let answer = "";
  prop ? (answer = "Закрыто") : (answer = "Открыто");

  return answer;
}

// console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (
    +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
    +average.slice(0, -1)
  ) {
    return "Цена ниже средней";
  } else {
    return "Цена выше средней";
  }
}

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[1],
//     restorantData.menu[2],
//     restorantData.averageLunchPrice
//   )
// );

const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

function transferWaitors(data) {
  debugger;

  const copy = Object.assign({}, data);

  debugger;

  copy.waitors = { name: "Mike", age: 32 };
  debugger;
  return copy;
}
console.log(transferWaitors(restorantData));
debugger;

console.log(restorantData);

function factorial(x){//возведение числа в факториал с использованием рекурсии

  if(x === 1){
    return x;
  } else {
    return x * factorial(x - 1);
  }
}


// console.log(factorial(6))


