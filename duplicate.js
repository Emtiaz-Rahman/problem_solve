const names = ['rahim', 'habul', 'kabul', 'babul', 'habul', 'karim', 'rahim'];

function removeduplicateNames(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniquenames = removeduplicateNames(names);
console.log(uniquenames);


const names = ['rahim', 'habul', 'kabul', 'babul', 'habul', 'karim', 'rahim'];
function removeduplicateNames(names) {
    const unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniquenames = removeduplicateNames(names);
console.log(uniquenames);

const names = ['rahim', 'habul', 'kabul', 'babul', 'habul', 'karim', 'rahim'];
function removeduplicateNames(names) {
    const unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeduplicateNames(names);
console.log('Unique Name:', uniqueNames);


const numbers = [12, 22, 12, 45, 12, 23, 20, 45];

function removeduplicateNumber(value) {
    const uniqueNumber = value[i];

    for (const element of value) {
        if (uniqueNumber.indexOf(element) !== -1) {
            uniqueNumber.push(element);
        }
    }
    return uniqueNumber;
}
const unique = removeduplicateNumber(numbers);
console.log('Unique Number:', unique);

const numbers = [12, 22, 12, 45, 12, 22, 23, 20, 45];
let duplicate = []

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (duplicate.indexOf(element) == -1) {
        duplicate.push(element)
    }
}
console.log(duplicate)


const numbers = [12, 22, 12, 45, 12, 22, 23, 20, 45];
const unique = [];
function removeduplicateNumber(values) {
    for (const element of values) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNumber = removeduplicateNumber(numbers);
console.log(uniqueNumber);



const numbers = [12, 22, 12, 32, 42, 32, 52, 32, 52];
const unique = [];
function removedoplicateNumber(value) {
    for (const element of value) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNumber = removedoplicateNumber(numbers);
console.log('Unique Number:', uniqueNumber);

