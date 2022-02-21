"use strict";
const seabass = 15.568;
const tuna = 123.965;
const carp = 90.2345;

const max = Math.max(seabass, tuna, carp)
console.log(max);

const min = Math.min(seabass, tuna, carp)
console.log(min);


const sum = seabass+tuna+carp
console.log(sum);



const sum1 = Math.floor(seabass)
console.log(sum1);
const sum2 = Math.floor(tuna)
console.log(sum2);
const sum3 = Math.floor(carp)
console.log(sum3);

const noCoinsPrice = sum1+sum2+sum3
console.log(noCoinsPrice);



const sumx100 = Math.round(sum / 100) *100
console.log(sumx100);

const sumA = (noCoinsPrice % 2 == 0)
console.log(sumA);

const change = 500 - sum
console.log(change);

const mid = (sum / 3).toFixed(2)
console.log(mid);

const randsale = Math.random(Math.random() * (100-10)+10)
console.log(randsale.toFixed(2)); 

const salePrise = (sum - randsale)
console.log(salePrise.toFixed(2));

const cash = sum / 2 - (sum * (salePrise / 100))
console.log(cash.toFixed(2));


document.writeln(
<div>
<p>максимальне число: ${max}</p>
<p>мінімальне число: ${min}</p>
<p>сума: ${sum}</p>
<p>округлення до сотих: ${sumx100}</p>
<p>решта: ${change}</p>
<p>заокруглення: ${noCoinsPrice}</p>
<p>середня ціна: ${mid}</p>
<p>знижка: ${salePrise}</p>
<p>чистий прибуток: ${cash}</p>
</div>
);

