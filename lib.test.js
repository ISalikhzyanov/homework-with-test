import {add} from "./lib";


test("it should add two numbers",()=>{
    const a=1;
    const b=2;
    const result= add(a,b);
    expect(result).toBe(3)
});