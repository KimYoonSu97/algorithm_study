function solution(my_string, is_suffix) {
    var answer = 0;
    let reverseArr = my_string.split("").reverse().join("")
    let reversestr = is_suffix.split("").reverse().join("")
    
    if (reverseArr.indexOf(reversestr) === 0  ){
        answer = 1
    }
    return answer;
}