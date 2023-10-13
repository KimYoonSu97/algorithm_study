function solution(n) {
    var answer = [];
    answer = String(n).split("").reverse().map((num) =>{
        return Number(num)
    })
    return answer;
}