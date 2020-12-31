import data from './data.json';

function total(cart) {
    let sum = 0;
    for(let item of cart) {
        sum += data.products[item].price
    }
    return sum.toFixed(2);
}

export default total;