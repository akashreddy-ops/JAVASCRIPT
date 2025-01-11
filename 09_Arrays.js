const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);    // we will use "Concat" or "push" the result will be the same

const allHeros = marvel_heros.push(dc_heros)   // when we put const all heros then the result will be no arrays will be seperated they all coming in the same line 
