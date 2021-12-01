// 1
// const sales = [100,5000,1000]
//
// let sum = 0;
// for (let price of sales){
//     sum = sum+price
// }
//
// // console.log(sum)
// 2
// const scores =[8,7,4,2,10]
//
// let total = 0;
// for (let item of scores){
//     total= total+item
//
// }
//
// total = total/scores.length
//
// console.log(total)
// 3
// const scores =[8,7,4,2,10]
//
// let max = 0;
//
// for (let item of scores){
//     if(item>max){max=item}
// }
// console.log (max)
// 4
// const scores =[8,7,4,2,10]
//
// let min = ;
//
// for (let item of scores){
//     if(item<min){min=item}
// }
// console.log (min)
// import {add} from './lib.js';
// const result = add(1,2);
// console.log (result)
// Homework 1

let day = 28;
let month = 7;
let znak = ""

export function qw(day, month) {

    switch (month) {
        case 1:
            if (day <= 19) {
                znak = "Kozerog"
            } else {
                znak = "Vodoley"
            }
            break;
        case 2:
            if (day <= 19) {
                znak = "Vodoley"
            } else {
                znak = "Ryby"
            }
            break;
        case 3:
            if (day <= 20) {
                znak = "Ryby"
            } else {
                znak = "Oven"
            }
            break;
        case 4:
            if (day <= 20) {
                znak = "Oven"
            } else {
                znak = "Telec"
            }
            break;
        case 5:
            if (day <= 21) {
                znak = "Telec"
            } else {
                znak = "Bliznecy"
            }
            break;
        case 6:
            if (day <= 21) {
                znak = "Bliznecy"
            } else {
                znak = "Rak"
            }
            break;
        case 7:
            if (day <= 22) {
                znak = "Rak"
            } else {
                znak = "Lev"
            }
            break;
        case 8:
            if (day <= 22) {
                znak = "Lev"
            } else {
                znak = "Deva"
            }
            break;
        case 9:
            if (day <= 22) {
                znak = "Deva"
            } else {
                znak = "Vesy"
            }
            break;
        case 10:
            if (day <= 22) {
                znak = "Vesy"
            } else {
                znak = "Scorpyon"
            }
            break;
        case 11:
            if (day <= 21) {
                znak = "Scorpyon"
            } else {
                znak = "Strelec"
            }
            break;
        case 12:
            if (day <= 21) {
                znak = "Strelec"
            } else {
                znak = "Kozrog"
            }
            break;

    }
    return znak
}

let zodiak = qw(day, month)
console.log(zodiak)



