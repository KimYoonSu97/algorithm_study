function solution(date1, date2) {
    var answer = 0;
    
    let num1 = new Date(date1[0],date1[1],date1[2])
    let num2 = new Date(date2[0],date2[1],date2[2])
  
    if( num1.getTime() < num2.getTime() ){
        answer = 1;
    } 
    
    return answer;
}