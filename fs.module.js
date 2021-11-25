const fs=require('fs')
// fs.readFile('data.csv',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//       console.log(data.toString());
// });

let data = fs.readFileSync('data.csv');
console.log(data.toString());

console.log('before end of our script');
console.log('end of program');