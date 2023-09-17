//________________ Tack One _______________________
console.log("____________________Tack One_______________");

function Convert_minutes_to_seconds(minutes) {
  let seconds = minutes * 60;
  return seconds;
}

let resultOne = Convert_minutes_to_seconds(86);
console.log(resultOne); // The Result 5,160

//________________ Tack Two _______________________
console.log("____________________ Tack Two _______________");

function OneGuest(number) {
  return number + 1;
}

let resultTwo = OneGuest(86);
console.log(resultTwo); // The Result 87

//________________ Tack Three _______________________
console.log("____________________ Tack Three _______________");

function firstNumber(arr) {
  if (Array.isArray(arr) && arr.length > 0 && typeof arr[0] === "number") {
    return arr[0];
  } else {
    return null;
  }
}

let numbersArrayThree = [1, 2, 3, 4, 5];
let resultThree = firstNumber(numbersArrayThree);
console.log(resultThree);

//________________ Tack Four _______________________
console.log("____________________ Tack Four _______________");

function areaOfTriangle(base, height) {
  if (base > 0 && height > 0) {
    let area = 0.5 * base * height;
    return area;
  } else {
    return null;
  }
}

let base = 10;
let height = 16;
let area = areaOfTriangle(base, height);

console.log(area); // The Result 80

//________________ Tack Five _______________________
console.log("____________________ Tack Five _______________");

function evenNumberEvenIndex(nums) {
  let resultFive = [];
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] % 2 === 0) {
      resultFive.push(nums[i]);
    }
  }
  return resultFive;
}

let numbersFive = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
let resultArrayFive = evenNumberEvenIndex(numbersFive);

console.log(resultArrayFive); // The result [2,8,34]

//________________ Tack Sex _______________________
console.log("____________________ Tack Sex _______________");

function evenIndexOddLength(strings) {
    var resultSex = [];
    for (var i = 0; i < strings.length; i += 2) {
        if (strings[i].length % 2 !== 0) {
            resultSex.push(strings[i]);
        }
    }
    return resultSex;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
var resultArray = evenIndexOddLength(strings);
console.log(resultArray); // The result ["madrasa"]


//________________ Tack Siven _______________________
console.log("____________________ Tack Siven _______________");

function powerElementIndex(numbersSiven) {
    let resultSiven = [];
    for (let i = 0; i < numbersSiven.length; i++) {
        resultSiven.push(Math.pow(numbersSiven[i], i));
    }
    return resultSiven;
}

let numbersSiven = [44, 5, 4, 3, 2, 10]
let resultArraySiven = powerElementIndex(numbersSiven);

console.log(resultArraySiven); // The result [ 1, 5, 16, 27, 16, 100000 ]


//________________ Tack Eight _______________________
console.log("____________________ Tack Eight _______________");


function sum(a,b) {
    let carry = 0;
    while (b !== 0){
        carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

function multiplication2(x,y) {
    let resultEight = 0;

    while(y !== 0) {
        if (y & 1) {
            resultEight = sum(resultEight, x)
        }
        x <<=1;
        y >>=1;
    }
    return resultEight
}

console.log(multiplication2(5,4)); // The result 50
console.log(multiplication2(2,8)); // The result 16
console.log(multiplication2(7,6)); // The result 42


//________________ Tack Ninth _______________________
console.log("____________________ Tack Ninth _______________");


function multi2(start, end) {
    let resultNinth = 1;
    for (let i = start; i <= end; i++) {
        resultNinth *= i;
    }
    return resultNinth;
}

console.log(multi2(4,5,)); // The result 20
console.log(multi2(3,6)); // The result 360


//________________ Tack Ten _______________________
console.log("____________________ Tack Ten _______________");


function aveArray(arr) {
    if (arr.length == 0) {
        return 0 ;
    }

    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length
}

let numbersTen = [1, 2, 3, 8, 9]
let numbersTen2 = [1, 2, 3, 8, 9, 77];



console.log(aveArray(numbersTen)); // The result 4.6
console.log(aveArray(numbersTen2)); // Output: 16.666666668
