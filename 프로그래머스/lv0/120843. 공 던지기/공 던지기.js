function solution(numbers, k) {
    var answer = 0;
    //i가 던지는 횟수임 k가 될때까지 던지는것임
    let index = 0;
    
    for(let i = 1; i <= k; i++ ){
        
        //answer은 number배열의 [i+2] 번째로 고정
        //근데이제... [i+2]가 numbers.length보다 크면 [i+2-numbers.length]를 해야함
        
        index = index + 2
        
        // console.log(index)
        if(index > numbers.length) {
            index = index%numbers.length
        }
        
        answer = numbers[index]
        
    }
    
    return answer;
}