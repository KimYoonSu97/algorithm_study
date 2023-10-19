function solution(my_string, s, e) {
    var answer = '';
    

    
    let a = my_string.slice(0,s)
    let b = my_string.slice(s,e+1)
    let c = my_string.slice(e+1,my_string.length)    
    answer = a + b.split('').reverse().join("") + c
    
    
    return answer;
}