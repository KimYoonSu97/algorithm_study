function solution(n) {
    var answer = 0;
    const maxNum = Math.floor(n/2);
    let checkNum = 0;
    for(let i = 1; i <= maxNum; i++){
        let sum = 0;
        for(let j = i; j<=maxNum+1;j++ ){
            sum += j
            if(sum === n){
                answer++;
                break;
            }
            if(sum > n){
                break;
            }
        }
        
    }
    answer ++
    return answer;
}