

function maxNumber(number) {
    let max = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
const numbers = [12, 52, 45, 90, 85, 2, 11, 110];
const max = maxNumber(numbers);
console.log('Max Number=', max);


function minNumber(number) {
    let min =number [0];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}
const miNumber = [12, 52, 45, 90, 85, 2, 11, 110];
const min = minNumber(miNumber);
console.log('Min Number=', min);




