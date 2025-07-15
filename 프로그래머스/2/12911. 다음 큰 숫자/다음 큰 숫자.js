function solution(n) {
    var answer = 0;
    let num = n;
    const nI = n.toString(2).split('').filter((item)=> item === '1').length
    for(let i = 1; i > 0; i++){
         const length = (n+i).toString(2).split('').filter((item)=> item === '1').length
         if(nI === length){
             answer = n + i
        break;  
         }
        
    }
    return answer;
}