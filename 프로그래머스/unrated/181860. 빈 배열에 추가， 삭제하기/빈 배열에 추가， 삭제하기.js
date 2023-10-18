function solution(arr, flag) {
    var answer = [];
    
    for(let i = 0; i <arr.length; i++){
        if(flag[i]){
            for(let j =0; j< 2 * arr[i]; j++){
                answer.push(arr[i])
            }
        } else {
            answer = answer.slice(0,answer.length-arr[i])
        }
    }
    
    return answer;
}