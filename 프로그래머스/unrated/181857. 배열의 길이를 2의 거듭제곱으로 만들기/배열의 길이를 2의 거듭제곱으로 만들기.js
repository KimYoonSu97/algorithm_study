function solution(arr) {
    var answer = arr;
    let length = 0;
    
    let num = 1;
    
    if(arr.length === 1){
        return answer
    }
    
    while(arr.length > 2 ** num ){
        num++
    }
    let minus = 2 ** num - arr.length
console.log(2 ** num)    
    
    for(let i = 0; i <minus; i++){
        answer.push(0)
    }
    
    
    return answer;
}