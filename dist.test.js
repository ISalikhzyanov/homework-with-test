import {dist} from "./homework";

test("it should show distance",()=>{
    let consumption = 5.7;
    let rest = 50;
    let result = round(consumption, rest)
    expect(result).toBe(877)
});