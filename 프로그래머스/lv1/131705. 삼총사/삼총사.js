function solution(number) {
    var answer = 0;
    // 1번째 학생을 기준으로... 
    // 2,3 // 2,4// 2,5
    // 3,4 // 3,5
    // 4,5

    // 2번째 학생을 기준으로 ...
    // 3,4 // 3,5
    // 4,5
    
    // 3번째 학생을 기준으로...
    // 4,5
    
    
    for( let i = 0 ; i<number.length; i++){
        for(let j = i+1 ; j<number.length; j++){
            for(let y = j+1; y<number.length; y++){
                if(number[i]+number[j]+number[y] === 0){
                    answer++
                }
            }
        }
        
    }
    
    return answer;
}