function solution(s) {
    var answer = '';
    
    let str = s.split("").sort().join("")
    
    for(let i = 0; i < s.length; i++){
        
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            answer += str[i]
        }
        
    }

    return answer;
}