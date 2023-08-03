function solution(hp) {
    var answer = 0;
    let big= 0
    let mid= 0
    let small= 0
    
    for(let i = 0; i < hp; i++){
        if( 5 * i <= hp ){
            mid =i
        } else {
            big = i-1
            break;
        }
    }
    console.log(big)
    for (let i =0; i<hp; i++){
        if( 3 * i <= hp - (5 * big) ){            
            mid = i
        } else {
            mid = i-1
            break
        }
    }
    console.log(mid)
    small = hp -(5*big) -(3*mid)
    console.log(small)
    answer = big+mid+small
    
    return answer;
}