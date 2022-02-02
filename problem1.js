



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
console.log('max Number:', max);




