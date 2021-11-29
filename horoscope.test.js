import {qw} from "./app";


test("it should show zodiak sign",()=>{
    const day = 28;
    const month = 7;
    const result = qw(day,month);
    expect(result).toBe("Lev")
});