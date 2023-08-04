function solution(num_list, n) {
    var answer = [];

    for(let i = 1; i <= num_list.length/n; i++){
        answer.push(num_list.slice((n*i)-n,n*i))
    }
    
    
    return answer;
}