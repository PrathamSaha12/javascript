const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)//push dc heros to marvel heros but array ke andar array hoga

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]); //to access the value of array ke andar wala array 

// const allHeros = marvel_heros.concat(dc_heros)//this is the actual method to combine array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]// this is more preferable then concat

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flatten the array
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//make array from string 
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //convert array