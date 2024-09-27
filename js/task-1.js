function isEnoughCapacity(products, containerSize) {
    let totalProducts = 0;
    for (const quantity of Object.values(products)) {
        totalProducts += quantity;
    }
    return totalProducts <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 6)); // true
console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 5)); // false
console.log(isEnoughCapacity({ oranges: 3, bananas: 2, cherries: 1 }, 6)); // true
console.log(isEnoughCapacity({ oranges: 3, bananas: 2, cherries: 1 }, 5)); // false
console.log(isEnoughCapacity({}, 10)); // true
console.log(isEnoughCapacity({ milk: 5, bread: 5 }, 10)); // true
console.log(isEnoughCapacity({ milk: 5, bread: 5 }, 9)); // false
