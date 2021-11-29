import {oboi} from "./homework4";


test("it should show calculate area",()=>{
    let width = 4;
    let lenght = 5;
    let height = 3;
    let widthR = 0.53;
    let rollLenght  = 10;
    const result= room(width, lenght, height, widthR, rollLenght)
    expect(result).toBe(30)
});