function solution(before, after) {
    var answer = 1;
    let beforeStr = before.split("").sort().join("")
    let afterStr = after.split("").sort().join("")
    for(let i = 0 ; i< before.length; i++){
        if(beforeStr[i] !== afterStr[i]){
            answer = 0
            break;
        }
    }
    return answer;
}