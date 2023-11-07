function solution(x1, x2, x3, x4) {
    var answer = false;
    
    let a = true
    let b = true
    if(!x1 && !x2){
        a = false
    }
    if(!x3 && !x4){
        b = false
    }
    
    if(a && b){
        answer = true
    }
    console.log(answer)
    
    
    return answer;
}