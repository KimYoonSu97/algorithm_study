function solution(dot) {
    var answer = 0;
    const checkPos = (num) =>{
        if(num > 0){
            return true
        } else {
            return false
        }
    }
     
        if(checkPos(dot[0]) && checkPos(dot[1])){
            answer = 1
        } else if (!checkPos(dot[0]) && checkPos(dot[1])) {
                   answer = 2
} else if(checkPos(dot[0]) && !checkPos(dot[1])) {
          answer = 4
          } else {
            answer =3
        }
        
        
        
    
    
    return answer;
}