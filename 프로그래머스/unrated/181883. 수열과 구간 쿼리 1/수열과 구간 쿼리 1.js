function solution(arr, queries) {
    var answer = arr;
    
    for(let i = 0; i<queries.length; i++){
        let query = queries[i]
        for (let j = query[0] ; j <=query[1]; j++){
            answer[j]++
        }
        
        }
        
    
    
    
    return answer;
}