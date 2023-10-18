function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0 ; i<intStrs.length; i++){
        let num = intStrs[i].slice(s,s+l)
        console.log(num)
        if(k < num){
            answer.push(num++)
        }
        
        
    }
    return answer;
}