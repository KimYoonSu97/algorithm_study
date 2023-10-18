function solution(my_string, indices) {
    var answer = '';
    
    let str = my_string.split('')
    
    str.map((string, index)=>{
        if( !indices.includes(index)){
            answer += string
        }
    })
    
    return answer;
}