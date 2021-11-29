let consumption = 5.7;
let rest = 50;
export function dist(consuption, rest) {
 return Math.round((rest/consuption)*100)


}
console.log(dist(consumption, rest))
