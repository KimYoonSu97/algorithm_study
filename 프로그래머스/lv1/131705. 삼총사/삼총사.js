function solution(number) {
    var answer = 0;

        
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