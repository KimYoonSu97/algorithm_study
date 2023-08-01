function solution(numbers) {
    var answer = 0;
    for(let i = 0; i <= 9; i++){
        if(numbers.indexOf(i) === -1){
            console.log(i)
            answer += i
        }
    }
    return answer;
}