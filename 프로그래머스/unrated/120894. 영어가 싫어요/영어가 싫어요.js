
const num = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]

function solution(numbers) {
    var answer = 0;
    let answerNum = numbers
    num.forEach((item,index)=>{
        
        answerNum = answerNum.replaceAll(item,index)
        
    })
    
    return Number(answerNum);
}