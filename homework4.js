// #4
let width = 4;
let lenght = 5;
let height = 3;
let widthR = 0.53;
let rollLenght = 10;

export function room(width, lenght, height, widthR, rollLenght) {
    return Math.ceil((width * height * 2) + (lenght * height * 2) / (widthR * rollLenght))

}

console.log(room(width, lenght, height, widthR, rollLenght))