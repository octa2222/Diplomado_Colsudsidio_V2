

  // const a= "Javascript is amazing"


////    for (const letter in a)  {
 //       console.log(a[letter])
//}

//for (let s=3 ; s>0; s-- ){
 //   console.log("hola")


//}

/*secuencia de  xxx dependiedno de  un valor  process.argv for in  for in
forEach
for (variable; condicion; cambio de la virable)
const process = require('process');
for (variable; condicion; cambio de la virable)
for (let i=0; condition; i--)
 */

// Node.js program to demonstrate the
// process.argv Property

   
// Include process module

  
// Printing process.argv property value
var args = process.argv;
  
console.log("number of arguments is "+args.length);
  
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});