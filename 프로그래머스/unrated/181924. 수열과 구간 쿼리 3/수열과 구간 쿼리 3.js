function solution(arr, queries) {
    var answer = arr;
    
    for(let i = 0; i < queries.length; i++){
          let query = queries[i]
          
    let a = answer[query[0]]
    let b = answer[query[1]]
    answer[query[0]] = b
        answer[query[1]] = a
    }
    
    return answer;
}