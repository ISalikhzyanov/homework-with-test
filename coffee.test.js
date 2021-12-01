import {coffee} from "./homework3";

test("it should show change", () => {
    let drink = "3 в 1"
    let sum = 50
    let result = coffee(drink, sum)
    expect(result).toBe(20)
});