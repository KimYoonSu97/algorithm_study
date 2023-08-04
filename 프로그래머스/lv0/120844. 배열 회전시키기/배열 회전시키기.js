function solution(numbers, direction) {
    var answer = [];
    if(direction ==="right"){
        //뒤에것이 앞으로
        answer.push(numbers[numbers.length-1])
        console.log(numbers.slice(0,numbers.length-1))
        answer = [...answer,...numbers.slice(0,numbers.length-1)]
        
    } else {
        //앞에것이 뒤로
        answer = numbers.slice(1,numbers.length)
        answer.push(numbers[0])
    }
    
    
    return answer;
}