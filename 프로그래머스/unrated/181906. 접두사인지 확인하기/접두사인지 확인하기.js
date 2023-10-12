function solution(my_string, is_prefix) {
    var answer = 0;
    if( my_string.indexOf(is_prefix) === 0 ){
        answer = 1
    }
    return answer;
}