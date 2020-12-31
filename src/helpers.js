import data from './data.json';

function total(cart) {
    let sum = 0;
    for(let item of cart) {
        sum += data.products[item].price
    }
    return sum.toFixed(2);
}

function qty(cart) {
    let obj = {};
    for(let item of cart) {
        if(!(item in obj)) {
            obj[item] = 1;
        } else {
            obj[item]++;
        }
    }
    return obj;
}

export {total, qty};