let drink = "3 в 1"
let summa = 50
let sum = 0

export function coffee(drink, sum) {
    if (summa <= 100) {
        sum = summa
    } else {
        console.log("Внесите сумму не более 100 рублей")
    }
    let change = null
    switch (drink) {
        case "3 в 1":
            change = sum - 30
            break;
        case "Черный кофе":
            change = sum - 35
            break;
        case "Черный сос сливками":
            change = sum - 40
            break;
        case "Латте":
            change = sum - 45
            break;
    }
    return change

}

let sdacha = coffee(drink, sum)
console.log(sdacha)