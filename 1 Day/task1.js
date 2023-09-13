//________________ Tack One _______________________
console.log("____________________Tack One_______________");


function Convert_minutes_to_seconds(minutes) {
    let seconds = minutes * 60;
    return seconds
}

let resultOne = Convert_minutes_to_seconds(86)
console.log(resultOne); // The Result 5,160


//________________ Tack Two _______________________
console.log("____________________ Tack Two _______________");


function OneGuest(number) {
    return number +1;
}

let resultTwo = OneGuest (86);
console.log(resultTwo); // The Result 87


//________________ Tack Three _______________________
console.log("____________________ Tack Three _______________");

function firstNumber(arr) {
    if (Array.isArray(arr) && arr.length > 0 && typeof arr[0] === 'number') {
        return arr[0];
    }else{
        return null;
    }
}

let numbers = [1,2,3,4,5];
let resultThree = firstNumber(numbers);
console.log(resultThree);

//________________ Tack Four _______________________
console.log("____________________ Tack Four _______________");