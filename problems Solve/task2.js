//________________ Tack One _______________________
console.log("____________________Tack One_______________");

function days(date1, date2) {
  let dayOne = 24 * 60 * 60 * 1000;
  let datTwo = Math.round(Math.abs((date1 - date2) / dayOne));
  return datTwo;
}

let resultOne1 = days(new Date("2015-01-01"), new Date("2015-01-05"));
console.log(resultOne1); // The Result 4

let resultOne2 = days(new Date("2015-01-01"), new Date("2015-01-011"));
console.log(resultOne2); // The Result 10

//________________ Tack Two _______________________
console.log("____________________Tack Two_______________");

function numInStringe(array) {
  let Stringeings = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == parseInt(array[i][j])) {
        Stringeings.push(array[i]);
        break;
      }
    }
  }
  return Stringeings;
}

console.log(numInStringe(["1A", "A", "2B", "B"])); // The Result ["1A, 2B"]
console.log(numInStringe(["ABC", "ABC10"])); // The Result ["ABC10"]

//________________ Tack Three _______________________
console.log("____________________ Tack Three _______________");

let idOdd = (Stringe) => Stringe.length % 2 === 1;
let reverseOdd = (Stringe = "") => {
  let array = Stringe.split(" ");

  return array
    .reduce((access, value) => {
      if (idOdd(value)) {
        access.push(value.split("").reverse().join(""));
        return access;
      }
      access.push(value);
      return access;
    }, [])
    .join(" ");
};

let arrayOne = "Bananas";
let arrayTwo = "One two three four";

console.log(reverseOdd(arrayOne)); // The Result sananaB
console.log(reverseOdd(arrayTwo)); // The Result enO owt eerht four

//________________ Tack Four _______________________
console.log("____________________ Tack Four _______________");


const isPandigital = (number) =>
  new Set(number.toString().split("")).size === 10;

console.log(isPandigital(98140723568910)); // The Result true
console.log(isPandigital(90864523148909)); // The Result false
console.log(isPandigital(112233445566778899)); // The Result true
