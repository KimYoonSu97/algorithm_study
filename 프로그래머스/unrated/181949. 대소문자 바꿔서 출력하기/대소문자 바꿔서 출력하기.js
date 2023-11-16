const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const answer = str.split("").map((item)=>{
         let firstStrValue = item.charCodeAt(0);
 if(firstStrValue >= 65 && firstStrValue <= 90){
     return item.toLowerCase()
 } else {
   return item.toUpperCase()  
 }

    }).join("")
        console.log(answer)
});