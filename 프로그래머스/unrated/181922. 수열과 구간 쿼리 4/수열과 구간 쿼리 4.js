function solution(arr, queries) {
    
    
    
    
    var answer = arr;
    
    
    
    
    queries.forEach((query)=>{
        for(let i = query[0]; i <= query[1]-query[0]; i++){
            
        
            if(i % query[2] === 0){
            answer[i]++    
            }
            
            
        }
    })
    
    return answer;
}