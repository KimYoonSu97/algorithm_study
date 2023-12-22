function solution(my_str, n) {
    var answer = [];
    let length = Math.ceil(my_str.length / n)
    
    for(let i = 0; i < length; i++){
        if(answer.length === 0){
            let str = my_str.slice(0,n)
            answer.push(str) }
        else {
            let str = my_str.slice(i * n,(i+1)*n)
            if(i === length ) { str = my_str.slice(i * n,my_str.length)}
            answer.push(str)
        }
    }
  
    return answer;
}