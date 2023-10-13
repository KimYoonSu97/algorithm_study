function solution(num) {
    var answer = -1;

    let a = num
    if( a === 1 ){
        answer = 0
    } else {
    for(let i = 1; i <=500; i++ ){     
        if (a === 1){
            return answer = i-1
        }else if(a%2 === 0 ){
            a = a / 2
        } else {
            a = a*3 + 1
        }
    }
        }
    return answer 
}