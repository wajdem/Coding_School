//________________ Tack One _______________________
console.log("____________________Tack One_______________");


function Adds(n) {
  return function (m) {
    return n + m;
  };
}

const add10 = Adds(10);
const add0 = Adds(0);
const addNeg30 = Adds(-30);

console.log(add10(20)); // Output: 30
console.log(add0(20)); // Output: 20
console.log(addNeg30(80)); // Output: 50


//________________ Tack Two _______________________
console.log("____________________ Tack Two _______________");


function trailingAndLeadingZeros(n) {
    let numbers = Number(n);
    let result = numbers.toString();

    return result;
}

console.log(trailingAndLeadingZeros("230.000")); // Output: "230"
console.log(trailingAndLeadingZeros("00402"));  // Output: "402"
console.log(trailingAndLeadingZeros("03.1400"));  // Output: "3.14"
console.log(trailingAndLeadingZeros("30"));  // Output: "30"


//________________ Tack Three _______________________
console.log("____________________ Tack Three _______________");


function secondLargestNumber(array) {
    if (array.length < 2) {
        return
    }

    let first = -Infinity
    let last = -Infinity

    for (let i = 0; i < array.length; i++) {
       if (array[i] > first) {
        last = first;
        first = array[i]
       } else 
       if (array[i] > last && array[i] < first) {
        last = array[i];
       }
    }
    return last;
}

console.log(secondLargestNumber([10, 40, 30, 20, 50])); // Output 40
console.log( secondLargestNumber([25, 143, 89, 13, 105])); // Output 105
console.log(secondLargestNumber([54, 23, 11, 17, 10])); // Output 23


//________________ Tack Four _______________________
console.log("____________________ Tack Four _______________");


function aReqdigit(number) {
    if (number < 0) {
        return false;
    }

    let numbers = number % 10;
    while (number > 0) {
        if (number % 10 !== numbers) {
            return false;
        }
        number = Math.floor(number / 10)
    }
    return true;
}

console.log(aReqdigit(66)); // Output true
console.log(aReqdigit(0)); // Output true
console.log(aReqdigit(-11)); //Output false


//________________ Tack Five _______________________
console.log("____________________ Tack Five _______________");


function reverseWords(strings) {
    let words = strings.split(' ');
    let reverseStrings = words.reverse().join(' ');

    return reverseStrings;
}

console.log(reverseWords("the sky is blue")); // Output: "blue is sky the"
console.log(reverseWords("hello world!")); // Output: "world! hello"
console.log(reverseWords("a good example")); // Output: "example good a"


//________________ Tack Sex _______________________
console.log("____________________ Tack Sex _______________");

function boom(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().includes('7')) {
            return "Boom!";
        }
    }
    return "There is no 7 in the array";
}


console.log(boom([1, 2, 3, 4, 5, 6, 7])); // Output: "Boom!"
console.log(boom([8, 6, 33, 100])); // Output: "There is no 7 in the array"
console.log(boom([2, 55, 60, 97, 86])); // Output: "Boom!"


//________________ Tack Siven _______________________
console.log("____________________ Tack Siven _______________");


function whitespace(text) {
    let result = "";
    for (let i = 0; i < text.length - 1; i++) {
        if (text[i].toLowerCase() === text[i] && text[i+1].toUpperCase() === text[i+1]) {
            result += text[i] + " ";
        } else {
            result += text[i];
        }
    }
    result += text[text.length - 1];
    return result;
}

console.log(whitespace("SheWalksToTheBeach")); // Output: "She Walks To The Beach"
console.log(whitespace("MarvinTalksTooMuch")); // Output: "Marvin Talks Too Much"
console.log(whitespace("TheGreatestUpsetInHistory")); // Output: "The Greatest Upset In History"


//________________ Tack Eight _______________________
console.log("____________________ Tack Eight _______________");


function trueValuse(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            count++
        }
    }
    return count;
}

console.log(trueValuse([true, false, false, true, false])); // Output :2
console.log(trueValuse([false, false, false, false])); // Output :0
console.log(trueValuse([])); // Output :0


//________________ Tack Ninth _______________________
console.log("____________________ Tack Ninth _______________");


function move(a) {
    let capitalLetters = "";
    let lowerCaseLetters = "";
    
    for (let i = 0; i < a.length; i++) {
        if (a[i].toUpperCase() === a[i]) {
            capitalLetters += a[i];
        } else {
            lowerCaseLetters += a[i];
        }
    }

    return capitalLetters + lowerCaseLetters;
}


console.log(move("hApPy")); // Output: APhpy
console.log(move("moveMENT")); // Output: MENTmove
console.log(move("shOrtCAKE")); // Output: OCAKEshrt


//________________ Tack Ten _______________________
console.log("____________________ Tack Ten _______________");


function lastItem(array) {
    let last = array.pop();
    let concatenated = array.join("")
    return last == concatenated
}

console.log(lastItem(["rsq", "6hi", "g", "rsq6hig"])); // Output :true
console.log(lastItem([1, 1, 1, "11"])); // Output :false
console.log(lastItem([8, "thunder", true, "8thundertrue"])); // Output :true


//________________ Tack Eleven _______________________
console.log("____________________ Tack Eleven _______________");


function findNaN(array) {
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            return i;
        }
    }
    return -1;
}

console.log(findNaN([1, 2, NaN])); // Output :2
console.log(findNaN([NaN, 1, 2, 3, 4])); // Output :0
console.log(findNaN([0, 1, 2, 3, 4])); // Output :-1


//________________ Tack Twelve _______________________
console.log("____________________ Tack Twelve _______________");


function removes(array) {
    return array.filter((item, index) => 
    array.indexOf(item) === index
    )
}

console.log(removes([1, 0, 1, 0]));// Output: [ 1, 0 ]
console.log(removes(["The", "big", "cat"])); //output: ['The', 'big', 'cat' ]
console.log(removes(["John", "Taylor", "John"])); // output: [ 'John', 'Taylor' ]


//________________ Tack Thirteen _______________________
console.log("____________________ Tack Thirteen_______________");

//________________ Tack Fourteen _______________________
console.log("____________________ Tack Fourteen _______________");


function lastVowel(text) {
    let words = text.split(" ");
    let vowels = "aeiouAEIOU"

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let last = -1;

        for ( let j = word.length - 1; j >= 0; j--){
            if (vowels.includes(word[j])) {
                last = j;
                break;
            }
        }

        if (last !== -1){
            words[i] = word.slice(0, last) + word.slice(last + 1)
        }
    }
    return words.join(" ");
}

console.log(lastVowel("Those who dare to fail miserably can achieve greatly.")); // Output: Thos wh dar t fal miserbly cn achiev gretly.
console.log(lastVowel("Love is a serious mental disease.")); // Output:Lov s  serios mentl diseas.



//________________ Tack Fifteen _______________________
console.log("____________________ Tack Fifteen _______________");


function ofCubes(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], 3);
    }

    return sum;
}


console.log(ofCubes([1, 5, 9])); // Output: 855
console.log(ofCubes([3, 4, 5])); // Output: 216
console.log(ofCubes([2])); // Output: 8
console.log(ofCubes([])); // Output: 0
