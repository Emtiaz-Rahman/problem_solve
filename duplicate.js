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