function solution(a, d, included) {
    var answer = 0;
    
    for(let i = 0; i < included.length; i++){
        
        let num = a+(d*i)
        
        if(included[i]){
            answer += num
        }
    }
    
    return answer;
}