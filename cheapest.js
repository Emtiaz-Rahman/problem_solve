const phones = [
    { name: 'samsung', price: 45000, camera: 10, storage: 40 },
    { name: 'nokia', price: 15000, camera: 5, storage: 2 },
    { name: 'oppo', price: 12000, camera: 10, storage: 4 },
    { name: 'mi', price: 40000, camera: 10, storage: 4 },
    { name: 'htc', price: 49000, camera: 10, storage: 4 },
]
let cheapest = phones[0];
for (let phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log('Cheapest Phone;', cheapest);