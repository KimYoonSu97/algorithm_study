function solution(rsp) {
    var answer = '';
    answer = rsp.split("").map((a)=>{
       if( a === "2" ){
           return "0"
       } else if ( a === "0" ){
           return "5"
       } else {
          return "2"
       }
    }).join("")
    
    return answer;
}